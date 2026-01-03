# Sanity Comments Setup Guide

## Overview
The comments system is now fully integrated with Sanity CMS. Comments are stored as documents in Sanity and automatically linked to their respective blog posts.

## Setup Steps

### 1. Create a Sanity API Token

You need to create a write token in your Sanity project to allow the API to create and update comments.

#### Steps:
1. Go to [https://manage.sanity.io/](https://manage.sanity.io/)
2. Select your project: **paod8vxu**
3. Navigate to **Settings** → **API**
4. Click **Add API token** under the "Tokens" section
5. Set the token name to something like `Comments Write Token`
6. Set permissions to **Editor** (allows create, read, update operations)
7. Click **Create**
8. Copy the generated token

### 2. Add Token to Environment Variables

Add the token to your `.env.local` file:

```bash
# .env.local (add this line)
SANITY_API_TOKEN=your_token_here
```

Replace `your_token_here` with the token you just created.

### 3. Deploy Schema Changes (If using Local Studio)

If you have a local Sanity Studio, deploy the updated schema:

```bash
npx sanity schema deploy
```

If you don't have a local studio, the changes are already deployed to the cloud via the schema definitions.

### 4. Test the Comments System

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to a blog post (e.g., `/blogs/your-post-slug`)

3. Scroll to the Comments section

4. Submit a test comment

5. Go to your Sanity Studio at `http://localhost:3000/studio`

6. Navigate to **Comments** in the sidebar

7. You should see your new comment (with `isApproved: false` until moderated)

## How It Works

### Comment Flow

1. **User Submits Comment**
   - Form validates input (name, email, content)
   - POST request sent to `/api/comments`

2. **API Stores Comment**
   - Creates a new `comment` document in Sanity
   - Links it to the post via reference
   - Sets `isApproved: false` by default
   - Returns comment ID

3. **Comment Approval (Manual)**
   - Admin goes to Sanity Studio
   - Opens the Comments section
   - Finds the new comment
   - Clicks Edit → checks the `isApproved` checkbox
   - Publishes the change

4. **Comment Display**
   - Frontend fetches comments with `isApproved: true`
   - Shows approved comments only
   - Updates in real-time

### API Endpoints

#### Get Comments
```
GET /api/comments?postId={postId}
```

Returns only approved comments for a post.

**Example:**
```bash
curl "http://localhost:3000/api/comments?postId=your-post-id"
```

#### Submit Comment
```
POST /api/comments
```

**Body:**
```json
{
  "postId": "your-post-id",
  "author": "John Doe",
  "email": "john@example.com",
  "content": "Great article!"
}
```

#### Like/Unlike Comment
```
PUT /api/comments
```

**Body:**
```json
{
  "commentId": "comment-id",
  "action": "like" // or "unlike"
}
```

## Schema Structure

### Comment Document Type

```typescript
{
  _type: 'comment',
  _id: 'unique-id',
  post: {
    _type: 'reference',
    _ref: 'post-id'
  },
  author: 'John Doe',
  email: 'john@example.com',
  content: 'The comment text...',
  timestamp: '2026-01-03T12:00:00Z',
  likes: 0,
  isApproved: true,
  isVerified: false
}
```

### Post Document Enhancement

Posts now have a `comments` array:

```typescript
{
  _type: 'post',
  _id: 'post-id',
  title: 'Blog Post Title',
  // ... other fields ...
  comments: [
    {
      _type: 'reference',
      _ref: 'comment-id-1'
    },
    {
      _type: 'reference',
      _ref: 'comment-id-2'
    }
  ]
}
```

## Moderation Workflow

### In Sanity Studio

1. Open a Comment document
2. Edit the following fields as needed:
   - **isApproved**: Check to show comment publicly
   - **isVerified**: Check if commenter is credible (shows badge)
   - **likes**: Update if needed

### Manual Moderation

To prevent spam, comments start with `isApproved: false`. You must manually approve them in the Sanity Studio before they appear on your site.

### Future Enhancements

Consider implementing:
- Automated spam detection
- Email notifications for new comments
- Comment moderation workflows
- Automatic approval for verified commenters

## Troubleshooting

### Comments Not Saving

**Problem:** Submit comment but it doesn't appear in Sanity Studio

**Solutions:**
1. Check that `SANITY_API_TOKEN` is set in `.env.local`
2. Verify the token has **Editor** permissions
3. Check browser console for error messages
4. Check server logs: `npm run dev` terminal output

### Comments Not Showing

**Problem:** Comments exist in Sanity but don't show on the site

**Solutions:**
1. Check that `isApproved: true` in the Sanity comment document
2. Clear browser cache
3. Check the GROQ query in `/api/comments/route.ts`
4. Verify the `postId` is being passed correctly

### Token Error

**Problem:** "Invalid API token" or "Unauthorized" error

**Solutions:**
1. Double-check the token in `.env.local`
2. Regenerate the token in Sanity if needed
3. Ensure the token has **Editor** or **Contributor** permissions
4. Restart your dev server after adding the token

## Environment Variables Reference

```bash
# Required for Sanity Studio
NEXT_PUBLIC_SANITY_PROJECT_ID=paod8vxu
NEXT_PUBLIC_SANITY_DATASET=production

# Required for Comments API (Write Operations)
SANITY_API_TOKEN=your_token_here
```

## Next Steps

1. ✅ Schema types created
2. ✅ API endpoint implemented
3. ✅ Component updated to fetch from Sanity
4. ⏭️ **Add your API token** to `.env.local`
5. ⏭️ **Test** by submitting a comment
6. ⏭️ **Approve** comments in Sanity Studio
7. ⏭️ (Optional) Implement automated moderation

## Advanced Features

### Fetch Comments with Post

To optimize performance, you can fetch comments alongside the post:

```typescript
// In your blog post query
const post = await client.fetch(`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    comments[]-> {
      _id,
      author,
      content,
      timestamp,
      likes,
      isVerified
    }
  }
`, { slug })
```

### Email Notifications (Future)

Send email when new comment is submitted:

```typescript
// In /api/comments/route.ts POST handler
const response = await fetch('https://api.resend.com/emails', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}` },
  body: JSON.stringify({
    from: 'noreply@livingrite.com',
    to: 'admin@livingrite.com',
    subject: `New comment on: ${postTitle}`,
    html: `<p>${author} commented: ${content}</p>`
  })
})
```

### Comment Count in Post Preview

```typescript
// Update post query to include comment count
const posts = await client.fetch(`
  *[_type == "post"] {
    ...,
    commentCount: count(comments[]._ref)
  }
`)
```
