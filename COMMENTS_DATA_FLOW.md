# Comments System Architecture & Data Flow

## System Overview

Your comments system now has three layers:

```
┌─────────────────────────────────────┐
│   React Component (Frontend)         │
│   /components/blog/blog-comments.tsx │
└────────────────┬────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────┐
│   Next.js API Route (Middleware)     │
│   /app/api/comments/route.ts         │
└────────────────┬────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────┐
│   Sanity CMS (Database)              │
│   Documents: post, comment           │
└─────────────────────────────────────┘
```

---

## Data Flow: Submitting a Comment

### 1️⃣ User Submits Form
```
Blog Post Page
└─ BlogComments Component
   ├─ Input: author, email, content
   └─ Button: "Post Comment" (onClick → handleSubmitComment)
```

### 2️⃣ Frontend Makes API Call
```typescript
// /components/blog/blog-comments.tsx
const response = await fetch('/api/comments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    postId: 'my-blog-post-id',
    author: 'John Doe',
    email: 'john@example.com',
    content: 'Great article!'
  })
})
```

**State Update:**
```javascript
isSubmitting: true  // Show loading spinner
error: ''          // Clear any previous errors
```

### 3️⃣ API Validates Input
```typescript
// /app/api/comments/route.ts - POST handler

// ✅ Validation checks:
✓ postId exists
✓ author is not empty
✓ email matches email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
✓ content length is 10-5000 characters

// ❌ If validation fails:
return NextResponse.json(
  { error: 'Invalid email address' },
  { status: 400 }
)
```

### 4️⃣ API Creates Sanity Document
```typescript
// Creates this document in Sanity:
await client.create({
  _type: 'comment',
  post: {
    _type: 'reference',
    _ref: postId  // Links to the blog post
  },
  author: 'John Doe',
  email: 'john@example.com',
  content: 'Great article!',
  timestamp: '2026-01-03T12:34:56Z',
  likes: 0,
  isApproved: false,    // ← Pending moderation
  isVerified: false
})
```

### 5️⃣ API Links Comment to Post
```typescript
// Adds comment reference to post's comments array
await client.patch(postId).append('comments', [
  {
    _type: 'reference',
    _ref: newComment._id  // Bidirectional link
  }
]).commit()
```

### 6️⃣ API Returns Success
```json
{
  "success": true,
  "message": "Comment submitted successfully. It will appear after moderation within 24 hours.",
  "comment": {
    "_id": "abc123xyz",
    "author": "John Doe",
    "email": "john@example.com",
    "content": "Great article!",
    "timestamp": "2026-01-03T12:34:56Z",
    "likes": 0,
    "isVerified": false
  }
}
```

### 7️⃣ Frontend Updates UI
```javascript
// Reaction 1: Clear the form
setName('')
setEmail('')
setContent('')

// Reaction 2: Show success message
alert('Comment submitted successfully! It will appear after moderation.')

// Reaction 3: Stop loading
isSubmitting: false
```

---

## Data Flow: Loading Comments

### 1️⃣ Component Mounts
```typescript
// /components/blog/blog-comments.tsx
useEffect(() => {
  const fetchComments = async () => {
    // Run on component mount
  }
}, [postId])  // Re-run if postId changes
```

### 2️⃣ Frontend Makes API Call
```typescript
const response = await fetch(`/api/comments?postId=${postId}`)
const data = await response.json()
```

**State Update:**
```javascript
isLoading: true
error: ''
```

### 3️⃣ API Queries Sanity
```typescript
// /app/api/comments/route.ts - GET handler

const comments = await client.fetch(
  `*[_type == "comment" && post._ref == $postId && isApproved == true] {
    _id,
    author,
    email,
    content,
    timestamp,
    likes,
    isVerified
  } | sort(timestamp desc)`,
  { postId }
)
```

**GROQ Query Breakdown:**
- `*[...]` - Get all documents
- `_type == "comment"` - Of type "comment"
- `post._ref == $postId` - Belonging to this post
- `isApproved == true` - That are approved
- `| sort(timestamp desc)` - Newest first

### 4️⃣ API Returns Comments
```json
{
  "comments": [
    {
      "_id": "comment1",
      "author": "Dr. Amara",
      "email": "amara@example.com",
      "content": "Excellent insights...",
      "timestamp": "2026-01-02T10:30:00Z",
      "likes": 5,
      "isVerified": true
    },
    {
      "_id": "comment2",
      "author": "John D.",
      "email": "john@example.com",
      "content": "Very helpful...",
      "timestamp": "2026-01-01T15:45:00Z",
      "likes": 2,
      "isVerified": false
    }
  ]
}
```

### 5️⃣ Frontend Renders Comments
```javascript
// State update:
setComments(data.comments || [])
isLoading: false

// Renders each comment with:
// - Author avatar (first letter)
// - Author name + verified badge
// - Relative timestamp (e.g., "2d ago")
// - Comment content
// - Like button + count
// - Reply button
// - Flag button
```

---

## Data Flow: Liking a Comment

### 1️⃣ User Clicks Like Button
```typescript
onClick={() => handleLikeComment(comment._id)}
```

### 2️⃣ Frontend Optimistic Update
```javascript
// Immediately update UI (optimistic)
likedComments: [...prev, commentId]
comment.likes: likes + 1

// Then sync with server
```

### 3️⃣ Frontend Makes API Call
```typescript
const response = await fetch('/api/comments', {
  method: 'PUT',
  body: JSON.stringify({
    commentId: 'abc123',
    action: 'like'  // or 'unlike'
  })
})
```

### 4️⃣ API Updates Sanity
```typescript
// Get current comment
const comment = await client.fetch(
  `*[_type == "comment" && _id == $commentId][0]`,
  { commentId }
)

// Update likes
const newLikes = action === 'like' ? likes + 1 : likes - 1
await client.patch(commentId).set({ likes: newLikes }).commit()
```

### 5️⃣ Frontend Updates State
```javascript
// Update comment in list
setComments(prev =>
  prev.map(c =>
    c._id === commentId
      ? { ...c, likes: newLikes }
      : c
  )
)
```

---

## Data Flow: Admin Approval

### 1️⃣ New Comment Submitted
```
Sanity Document Created:
{
  _type: 'comment',
  author: 'John',
  content: 'Great article!',
  isApproved: false  ← Not visible yet
}
```

### 2️⃣ Admin Goes to Studio
```
URL: http://localhost:3000/studio
→ Comments section (in sidebar)
→ Click on new comment
→ Edit button
```

### 3️⃣ Admin Reviews Comment
```
Shows:
- Author name
- Email
- Comment content
- Timestamp
- Current likes
- Checkboxes:
  ✓ isApproved (currently unchecked)
  ✓ isVerified (optional)
```

### 4️⃣ Admin Approves
```
Steps:
1. Check the "isApproved" checkbox
2. (Optional) Check "isVerified" for credible sources
3. Click Publish or Update
```

### 5️⃣ Frontend Detects Change
```
Next time someone views the blog post:
1. Component mounts
2. Fetches comments via GET /api/comments
3. GROQ query includes: isApproved == true
4. Approved comment appears in the list!
```

---

## Sanity Document Structure

### Comment Document
```
Name: comment
Type: document

Fields:
├── post (reference to post)
├── author (string)
├── email (string, validated)
├── content (text, 10-5000 chars)
├── likes (number, default: 0)
├── isApproved (boolean, default: false)
├── isVerified (boolean, default: false)
└── timestamp (datetime, auto-set)
```

### Post Document (Enhanced)
```
Name: post
Type: document

Fields:
├── title
├── slug
├── excerpt
├── category
├── publishedAt
├── image
├── author
├── readingTime
├── body
└── comments (array of references)  ← NEW
```

---

## Error Handling

### Validation Errors (400)
```json
{
  "error": "Missing required fields"
}
// OR
{
  "error": "Invalid email address"
}
// OR
{
  "error": "Comment must be between 10 and 5000 characters"
}
```

### Not Found Errors (404)
```json
{
  "error": "Comment not found"
}
```

### Server Errors (500)
```json
{
  "error": "Failed to submit comment"
}
```

---

## Performance Considerations

### API Optimization
```typescript
// ✅ Good: Only fetch approved comments
*[_type == "comment" && isApproved == true]

// ❌ Bad: Fetch all comments and filter client-side
*[_type == "comment"]  // Too much data
```

### Frontend Optimization
```typescript
// ✅ Optimistic UI updates
setLikedComments([...prev, id])  // Instant visual feedback

// ✅ Debouncing (prevents duplicate requests)
const handleLike = debounce(likeComment, 300)

// ✅ Memoization (prevents unnecessary renders)
const CommentList = memo(({ comments }) => ...)
```

---

## Security Considerations

✅ **Email Validation** - Regex check before storing  
✅ **Content Length** - Max 5000 chars to prevent spam  
✅ **API Token** - Server-only, never exposed to client  
✅ **Approval Required** - Comments hidden by default  
✅ **CORS** - API only accepts requests from your domain  

---

## Database Schema Diagram

```
┌─────────────────────────┐
│       Post Document     │
├─────────────────────────┤
│ _id: "post-123"         │
│ title: "Blog Post"      │
│ body: [...]             │
│ comments: [             │
│   { _ref: "comment-1" } │
│   { _ref: "comment-2" } │
│   { _ref: "comment-3" } │
│ ]                       │
└──────────┬──────────────┘
           │
    ┌──────┴──────┬──────────┐
    ↓             ↓          ↓
┌────────┐  ┌────────┐  ┌────────┐
│Comment1│  │Comment2│  │Comment3│
├────────┤  ├────────┤  ├────────┤
│Author  │  │Author  │  │Author  │
│Content │  │Content │  │Content │
│Approved│  │Approved│  │Approved│
│Likes   │  │Likes   │  │Likes   │
└────────┘  └────────┘  └────────┘
```

---

## Complete Request/Response Examples

### POST: Submit Comment
```bash
curl -X POST http://localhost:3000/api/comments \
  -H "Content-Type: application/json" \
  -d '{
    "postId": "about-stroke-recovery",
    "author": "Jane Smith",
    "email": "jane@example.com",
    "content": "This article really helped my understanding of post-stroke care pathways."
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Comment submitted successfully. It will appear after moderation within 24 hours.",
  "comment": {
    "_id": "xyz789abc",
    "author": "Jane Smith",
    "email": "jane@example.com",
    "content": "This article really helped my understanding of post-stroke care pathways.",
    "timestamp": "2026-01-03T14:30:00Z",
    "likes": 0,
    "isVerified": false
  }
}
```

### GET: Fetch Comments
```bash
curl http://localhost:3000/api/comments?postId=about-stroke-recovery
```

**Response:**
```json
{
  "comments": [
    {
      "_id": "comment-xyz",
      "author": "Dr. Amara Okonkwo",
      "email": "amara@example.com",
      "content": "Excellent insights into post-stroke care...",
      "timestamp": "2026-01-02T10:15:00Z",
      "likes": 12,
      "isVerified": true
    }
  ]
}
```

### PUT: Like Comment
```bash
curl -X PUT http://localhost:3000/api/comments \
  -H "Content-Type: application/json" \
  -d '{
    "commentId": "comment-xyz",
    "action": "like"
  }'
```

**Response:**
```json
{
  "success": true,
  "comment": {
    "_id": "comment-xyz",
    "author": "Dr. Amara Okonkwo",
    "likes": 13
  }
}
```

---

## Testing Checklist

- [ ] Add `SANITY_API_TOKEN` to `.env.local`
- [ ] Restart dev server (`npm run dev`)
- [ ] Navigate to a blog post
- [ ] Submit a test comment
- [ ] Check Sanity Studio - should see comment with `isApproved: false`
- [ ] Edit comment in Studio - check "isApproved"
- [ ] Publish the change
- [ ] Refresh blog post - comment should appear
- [ ] Click Like - should update count
- [ ] Click Reply - should show reply UI (ready for nesting)
- [ ] Click Flag - should show report option
