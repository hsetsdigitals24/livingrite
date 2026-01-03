# Living Rite Care - Web App Product Requirements Document

**Document Version:** 1.0  
**Last Updated:** December 20, 2025  
**Project Type:** Core Website Redesign + Client Portal Platform  
**Status:** In Development

---

## 1. Executive Summary

Living Rite Care's web platform is a comprehensive digital ecosystem designed to establish market leadership in home-based healthcare services across Nigeria and the diaspora. The platform serves dual purposes:

1. **Public-Facing Website**: Brand presence, service discovery, and lead generation
2. **Premium Client Portal**: Real-time care monitoring, secure communication, and invoice management
3. **Admin Dashboard**: Operational command center for care coordination and business intelligence

### Key Objectives
- Establish trust through transparent service information and social proof
- Generate qualified leads through strategic content and booking systems
- Enable seamless client-provider communication
- Provide operational visibility for administrative teams
- Support business growth through analytics and automation

---

## 2. Technology Stack Architecture

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **State Management**: Redux (Redux Toolkit recommended)
- **Styling**: Tailwind CSS with Shadcn/ui components
- **Charts & Data Visualization**: Chart.js with React wrapper
- **Calendar Integration**: Calendly embedded
- **Real-time Updates**: Socket.io for care updates (optional future enhancement)

### Backend & Services
- **CMS**: Sanity.io (for blog, case studies, testimonials)
- **Database**: Sanity.io data store (scales with content)
- **Authentication**: NextAuth.js with JWT
- **File Storage**: Cloudflare R2 (documents, images, care photos/videos)
- **Email Service**: Mailchimp for transactional mails and newsletters
- **Payment Processing**: Paystack (primary), Stripe as fallback
- **Calendar/Scheduling**: Calendly API integration
- **API Communication**: REST with axios/fetch

### Infrastructure & DevOps
- **Hosting**: Vercel (Next.js optimized)
- **CDN**: Cloudflare (included with R2)
- **Domain Management**: Cloudflare DNS
- **Monitoring**: Sentry for error tracking
- **Analytics**: Mixpanel / PostHog for funnel tracking

### Additional Tools
- **Google Reviews Widget**: For review aggregation
- **WhatsApp Business API**: For automated messaging
- **SMS Service**: Twilio for reminders and notifications
- **Video Hosting**: Cloudflare Stream (videos for homepage, testimonials)
- **Image Optimization**: Next.js Image component with Cloudflare

---

## 3. Feature Specifications

### 3.1 Homepage

**Purpose**: First impression, brand communication, immediate CTAs

**Key Components**:

#### 3.1.1 Hero Section
```
- High-contrast "Book A Free Consultation" CTA (sticky header + hero)
- 30-45 second looping video featuring:
  - Real caregivers and patients
  - Animated text highlighting differentiators
  - Key messages: "Home-Based Care", "Post-ICU Specialists", "Hospital-Trained Nurses"
- Tagline: "Expert Post-Hospital Care in the Comfort of Home"
```

**Technical Implementation**:
- Video hosted on Cloudflare Stream
- Autoplay with muted audio
- Fallback image for accessibility
- Responsive aspect ratio (16:9 desktop, 9:16 mobile)

#### 3.1.2 Trust Indicators Section
```
Metrics Display:
- Years of Service (e.g., "5+ Years")
- Families Served (e.g., "2,000+")
- Care Hours Delivered (e.g., "50,000+")
- Certifications & Accreditations (logos)
- Client Satisfaction Rate (e.g., "98%")
```

**Technical Implementation**:
- Static data sourced from Sanity.io
- Counter animation on scroll
- Responsive grid layout

#### 3.1.3 Value Proposition Section
```
Three Pillar Layout:
1. Specialized Expertise (post-acute care focus)
2. Home Comfort (dignity + privacy)
3. Trusted Care (certified professionals)
```

#### 3.1.4 Services Preview
```
- 6-8 featured services with icons
- Link to dedicated service pages
- Brief 1-line description per service
```

**Technical Implementation**:
- Services data from Sanity.io CMS
- Dynamic card component
- Hover animations

#### 3.1.5 Call-to-Action Buttons (Throughout)
```
Primary CTA: "Book Free Consultation" → Calendly modal
Secondary CTA: "View Services" → /services page
Tertiary CTA: "Browse Case Studies" → /testimonials page
```

---

### 3.2 Service Pages (SEO Optimized)

**Architecture**: 
- Central `/services` hub page
- Individual service pages at `/services/[service-slug]`

**Services Offered**:
1. Postpartum Care
2. Physiotherapy Services
3. Routine Laboratory Services
4. Home Medical Consultations
5. Chronic Wound Care
6. Geriatric Care
7. End-of-Life & Palliative Care
8. Post-Surgical Care
9. Post-ICU Care
10. Neurorehabilitation Care

**Page Structure** (for each service):

#### 3.2.1 Service Header
```
- Service name (h1)
- Professional hero image
- One-line value proposition
```

#### 3.2.2 Service Details Section
```
- Detailed description (800-1200 words)
- Our Approach & Care Protocols
- Step-by-step care journey
- Equipment/resources used
```

**Technical Implementation**:
- Rich text editor in Sanity.io
- Markdown/WYSIWYG support
- Image galleries with alt text

#### 3.2.3 Who Benefits Most
```
- Target patient demographics
- Health conditions we specialize in
- Success criteria/outcomes
```

#### 3.2.4 Pricing & CTA
```
- Transparent pricing tiers (if available)
- "Request Custom Quote" button → pre-filled contact form
- Pricing model explanation
```

#### 3.2.5 Case Studies/Related Content
```
- 2-3 related case studies per service
- Links to relevant blog articles
- Client testimonials filtered by service
```

**Technical Implementation**:
- Dynamic relationships in Sanity.io
- Related content pulled via GROQ queries

#### 3.2.6 Service-Specific FAQ
```
- 5-8 common questions
- Expandable accordion component
- Schema markup for search engines
```

**Technical Implementation**:
- FAQ data in Sanity.io
- Accordion UI component
- JSON-LD FAQ schema

#### 3.2.7 Clear Call-to-Actions
```
- "Book Consultation"
- "Get Service Proposal"
- "Chat with Specialist"
```

**SEO Optimization**:
- Unique meta titles and descriptions
- H1-H6 heading hierarchy
- Internal linking strategy
- Image alt texts
- Schema markup (LocalBusiness, Service, FAQPage)
- Mobile responsiveness
- Core Web Vitals optimization

---

### 3.3 About Us Page

**Purpose**: Build emotional connection, establish credibility, humanize brand

**Sections**:

#### 3.3.1 Founder's Story
```
- Personal narrative: "Why Living Rite Care?"
- Background and credentials
- Pivotal moment/inspiration
- Vision for healthcare in Nigeria
```

**Technical Implementation**:
- Rich text from Sanity.io
- 2-3 founder photos
- Video testimonial (optional)

#### 3.3.2 Mission, Vision & Values
```
- Mission Statement
- Vision Statement
- 3-5 Core Values with explanations
```

#### 3.3.3 Impact Metrics
```
Dashboard-style display:
- Families served
- Care hours delivered
- Client satisfaction rate
- Staff certifications
- Geographic reach
```

**Technical Implementation**:
- Chart.js for visualizations
- Redux store for metrics
- Real-time updates from backend

#### 3.3.4 Team Profiles
```
Grid layout featuring:
- Full name
- Professional photo
- Title/Role
- Credentials & Certifications
- Years of experience
- Short bio
- Contact email
```

**Technical Implementation**:
- Team data in Sanity.io
- Responsive grid (3-4 columns desktop, 1-2 mobile)
- Modal for expanded profiles

#### 3.3.5 Thought Leadership
```
- Link to founder's article on "Nigeria's Post-Acute Care Gap"
- Featured on Medium, LinkedIn, or internal blog
```

#### 3.3.6 Resources Hub (Footer)
```
Quick Links:
- Free Care Guides (PDF downloads)
- Care Checklists
- Blog/Articles
- Consultation Booking
- Testimonials Page
```

---

### 3.4 Testimonials & Social Proof Page

**Purpose**: Build trust through real client stories and reviews

**Sections**:

#### 3.4.1 Video Testimonials
```
- 1-2 video testimonials (60-90 seconds each)
- Client name, condition, outcome
- Emotional impact focus
```

**Technical Implementation**:
- Hosted on Cloudflare Stream
- Responsive video player
- Subtitles for accessibility

#### 3.4.2 Case Studies
```
Structure per case study:
- Client profile (anonymized or with permission)
- Health condition/challenge
- Our intervention & care plan
- Photos of care progress (with consent)
- Video excerpts (optional)
- Measurable outcomes
- Family testimonial quote
- Timeline of care
```

**Quantity**: 2-3 comprehensive case studies  
**Word Count**: 1000-1500 words per case study

**Technical Implementation**:
- Sanity.io for case study content
- Image gallery from Cloudflare R2
- Timeline component for care journey
- Rich text formatting

#### 3.4.3 Photo Gallery Carousel
```
- Before/after care progress photos
- Care team moments
- Family interactions
- Professional settings
- Carousel with thumbnail navigation
- Lightbox for full-size viewing
```

**Technical Implementation**:
- React Carousel library
- Images optimized on Cloudflare R2
- Lazy loading for performance
- GDPR-compliant consent management

#### 3.4.4 Star Ratings & Review Aggregation
```
Metrics Display:
- Overall average rating (e.g., 4.8/5.0)
- Review count
- Breakdown by stars (5⭐, 4⭐, 3⭐, etc.)
- Recent reviews list with filters
```

**Technical Implementation**:
- Internal review system (stored in database)
- Manual import from external sources

#### 3.4.5 Google Reviews Widget
```
- Embedded Google Reviews widget
- Direct link to Google Business Profile
- Call-to-action: "Leave a Review"
```

#### 3.4.6 Service-Type Filtering
```
Filter testimonials by:
- Post-Stroke Care
- Post-ICU Care
- Physiotherapy
- End-of-Life Care
- Live-in Nursing
- Rehabilitation
```

**Technical Implementation**:
- Redux state for filter
- Dynamic query to Sanity.io
- URL query parameters for shareable filters

#### 3.4.7 Trust Badge Section
```
- Certifications/Accreditations
- Industry partnerships
- Media mentions (if any)
- Awards/Recognition
```

---

### 3.5 Blog / Health Resource Library

**Purpose**: SEO domination, thought leadership, organic traffic generation

**Architecture**:
- Dedicated `/blog` page with grid/list view
- Individual post pages at `/blog/[post-slug]`
- Category filtering: `/blog?category=[category]`
- Author pages: `/blog/author/[author-slug]`

**Content Management**:
- All blog content hosted in Sanity.io
- WYSIWYG editor with rich media support
- SEO fields: meta title, description, featured image, excerpt

**Blog Features**:

#### 3.5.1 Featured Articles
```
- Hero section with latest/top articles
- "Read More" CTA for each
```

#### 3.5.2 Article Grid/List View
```
Sorting options:
- Latest first
- Most popular
- By category
- By author
```

**Technical Implementation**:
- Server-side pagination (20 articles per page)
- Infinite scroll option (toggle)
- Search functionality

#### 3.5.3 Individual Article Page Structure
```
- Header with title, author, publish date
- Featured image (optimized)
- Reading time estimate
- Table of contents (for long articles)
- Rich formatted content
- Author bio card at bottom
- Related articles section
- CTA: "Book Consultation" or "Subscribe"
- Comment section (optional; Disqus integration)
```

**Technical Implementation**:
- generateStaticParams for dynamic routes
- Incremental Static Regeneration (ISR)
- Reading time calculation
- TOC auto-generation from headers

#### 3.5.4 Newsletter Signup CTA
```
- Inline signup forms in articles
- Sidebar widget signup
- Exit-intent popup (subtle, non-intrusive)
```

#### 3.5.5 Article Categories
```
Suggested categories:
- Post-Acute Care
- Stroke Recovery
- ICU Recovery
- Palliative Care
- Family Caregiving
- Wellness Tips
- Industry Updates
```

**Technical Implementation**:
- Category taxonomy in Sanity.io
- Faceted filtering

#### 3.5.6 Author Profiles
```
Per author:
- Profile image
- Bio
- Credentials
- Articles written
- Social links (LinkedIn, Twitter)
```

**Technical Implementation**:
- Author data in Sanity.io
- Dynamic author pages with article listings

#### 3.5.7 SEO Optimization
```
- Unique meta tags per article
- H1-H6 hierarchy
- Internal linking to service pages
- Featured snippets optimization
- Schema markup (Article, NewsArticle, BreadcrumbList)
- Sitemap generation
- XML feed for syndication
```

**Publishing Strategy**:
- Minimum 2 articles per week
- Keyword research-driven topics
- 1500-2500 words per article
- Rich formatting with images, callouts, lists

---

### 3.6 Smart Booking System

**Purpose**: Frictionless consultation scheduling with payment & follow-up automation

**Architecture**: Calendly embedded with custom pre-/post-booking flows

#### 3.6.1 Calendly Integration
```
Features:
- Real-time availability display
- Automatic timezone detection (diaspora support)
- Multiple booking types:
  - Free 15-min consultation
  - 30-min paid consultation
  - Service inquiry
```

**Technical Implementation**:
- Calendly embed via iframe
- Custom styling to match brand
- Webhook integration for confirmations

#### 3.6.2 Pre-Consultation Intake Form
```
Fields collected:
- Full name
- Email
- Phone number
- Service interested in
- Brief health history/reason for consultation
- Preferred communication method
- Timezone
- Any accessibility needs
```

**Technical Implementation**:
- Custom form component (Shadcn/ui)
- Form submission to database
- Integration with Calendly metadata

#### 3.6.3 Booking Confirmation Flow

**Immediate (0 min)**:
```
Email to client:
- Booking confirmation with date/time
- "What to Expect" guide (tailored to service)
- Zoom/call link
- Ical attachment
```

**Technical Implementation**:
- Mailchimp transactional email template
- Trigger: Webhook from booking system
- Dynamic content based on service type

**Pre-Consultation (6-12 hours before)**:
```
Reminder sequence:
1. Email reminder (6 hours before)
   - Preparation tips
   - Re-confirm join link
2. SMS reminder (30 min before)
   - Quick confirmation
   - Join link
   - "Typical response time: 15 min"
```

**Technical Implementation**:
- Scheduled job (Vercel Cron)
- Twilio SMS integration
- Mailchimp for email

**Post-Consultation (within 1 hour)**:
```
Thank you email:
- Appreciation message
- Quick feedback form (2-minute survey)
- Next steps based on consultation outcome
- Link to proposal/service page
```

**Follow-Up (48 hours)**:
```
If no response/engagement:
- Re-engagement email
- "Questions?" CTA
- Schedule another call option
```

#### 3.6.4 Payment Integration for Paid Services

```
Checkout Flow:
1. Service selection
2. Quantity/duration selection
3. Paystack payment gateway
4. Invoice generation + storage (Cloudflare R2)
5. Payment confirmation email with receipt
6. Client portal invoice access
```

**Technical Implementation**:
- Paystack API integration
- Invoice generation (PDFKit)
- Stored in Cloudflare R2
- Database record for accounting

#### 3.6.5 Calendar Sync
```
Options:
- Google Calendar integration
- Outlook/Microsoft Calendar
- iCal export
```

**Technical Implementation**:
- Calendly native feature
- User enables in settings

#### 3.6.6 Reschedule/Cancel Functionality
```
Self-service:
- Client can reschedule up to 24 hours before
- Cancellation with auto-refund (if paid service)
- Automatic notification to admin
```

**Technical Implementation**:
- Calendly native feature + webhook
- Paystack refund API for paid bookings
- Email notification to support team

---

### 3.7 WhatsApp & Click-to-Chat Integration

**Purpose**: Omnichannel customer support with fast response times

#### 3.7.1 WhatsApp Chat Button
```
Position: Bottom-right corner (floating)
Features:
- WhatsApp Business API integration
- Pre-filled message template: "Hi, I'm interested in your services..."
- Click opens WhatsApp Web/App
- Non-intrusive dismissible design
```

**Technical Implementation**:
- WhatsApp Business API
- Floating button component
- WhatsApp link: `https://wa.me/234XXXXXXXXXX?text=...`

#### 3.7.2 Click-to-Call Button
```
Position: Bottom-right (next to WhatsApp)
Features:
- Mobile-optimized
- Desktop: Shows phone number tooltip
- Click initiates call on mobile
```

**Technical Implementation**:
- `tel:` protocol link
- Conditional rendering based on device

#### 3.7.3 Business Hours Indicator
```
Display:
- "Open Now" / "We're Closed" badge
- Operating hours tooltip
- Timezone-aware
```

**Technical Implementation**:
- Business hours in Sanity.io config
- Real-time calculation
- Visual indicator (green/red)

#### 3.7.4 Trust Message
```
Display below chat options:
- "Typical response time: 15 minutes"
- "Expert team available"
- "Usually responds within 1 hour"
```

**Technical Implementation**:
- Static or configurable text
- Builds confidence in engagement

#### 3.7.5 Automated Messaging
```
WhatsApp Business API automations:
- Order confirmation messages
- Appointment reminders
- Follow-up messages
- Support ticket updates
```

**Technical Implementation**:
- WhatsApp Business API
- Webhook triggers from backend
- Message templates pre-approved

---

### 3.8 Client Portal (Premium Feature)

**Purpose**: Real-time care monitoring, secure communication, document management

**Accessibility**: Password-protected, available to paid clients only

#### 3.8.1 Portal Architecture

```
User Roles:
1. Family Member (read-only access to assigned patient)
2. Care Provider (read-write, updates care status)
3. Admin (full access to all clients)
```

**Technical Implementation**:
- NextAuth.js for authentication
- Role-based access control (RBAC)
- Database: Patient, CareUpdate, Document entities

#### 3.8.2 Dashboard Overview
```
Cards/Widgets:
- Current care team members (with photos, contact)
- Next scheduled appointment
- Patient status summary ("Stable", "Improving", "Needs Attention")
- Recent updates count
- Outstanding invoices
- Documents available for download
```

**Technical Implementation**:
- React Dashboard layout
- Redux for state management
- Real-time data from backend

#### 3.8.3 Real-Time Care Updates & Progress Reports
```
Timeline View:
- Chronological care entries
- Categorized by type:
  - Vital signs update
  - Medication administered
  - Physical therapy session
  - Nutrition notes
  - General observation
- Timestamp + caregiver name
- Edit/delete for providers (with audit trail)
```

**Technical Implementation**:
- Database schema with audit logging
- WebSocket for real-time updates (optional)
- Infinite scroll pagination
- Search/filter by date range

#### 3.8.4 Weekly Health Logs
```
Structured format:
- Vital signs (BP, HR, temp, O2 sat)
- Medications administered
- Meals/nutrition intake
- Physical therapy progress
- Mood/behavioral observations
- Sleep patterns
- Any incidents or concerns
- Signature from care provider
```

**Technical Implementation**:
- Form builder component
- Auto-save functionality
- PDF export capability

#### 3.8.5 Photos/Videos from Care Team
```
Features:
- Care team uploads photos/videos with consent
- Photo gallery organized by date
- Captions/notes per photo
- Secure storage on Cloudflare R2
- Privacy controls (visible to approved family only)
```

**Technical Implementation**:
- File upload handler
- Cloudflare R2 integration
- Consent management system
- Access logs for GDPR compliance

#### 3.8.6 Invoices & Payment History
```
Display:
- Downloadable PDF invoices
- Payment status (Paid, Pending, Overdue)
- Service breakdown
- Date range filtering
- Payment method used
- Receipt download
```

**Technical Implementation**:
- Invoice generation (PDFKit)
- Stored in Cloudflare R2
- Database query for payments
- Paystack payment records

#### 3.8.7 Care Plans & Schedules
```
Display:
- Patient's care plan (document)
- Weekly schedule
- Care provider assignments
- Medication schedule
- Therapy/exercise schedule
- Appointment calendar
```

**Technical Implementation**:
- Calendar component (react-big-calendar)
- Document upload from admin
- Color-coded by care type

#### 3.8.8 Direct Messaging with Care Team
```
Features:
- Real-time chat with assigned care providers
- Message history
- File attachments
- Read receipts
- Typing indicators
- Notification preferences
```

**Technical Implementation**:
- Chat component (custom or library like stream-chat)
- WebSocket for real-time messaging
- Database persistence
- Push notifications

#### 3.8.9 Document Management
```
Categories:
- Medical records (prescriptions, lab results)
- Care reports
- Consent forms
- Insurance documents
- Discharge summaries
```

**Features**:
- Secure upload/download
- Versioning
- Access audit trail
- Search by date/type

**Technical Implementation**:
- File upload to Cloudflare R2
- Database metadata storage
- Access logging

#### 3.8.10 Appointment Scheduling
```
Features:
- View available care provider slots
- Request appointment
- Receive confirmation
- Calendar view
- Reminder notifications
```

**Technical Implementation**:
- Calendly API or custom calendar system
- Notification triggers

#### 3.8.11 Portal Security
```
Measures:
- HTTPS only
- JWT tokens with expiration
- GDPR compliance
- Two-factor authentication (optional)
- IP whitelisting (optional)
- Activity logs
- Secure password requirements
```

**Technical Implementation**:
- NextAuth.js session management
- bcrypt for password hashing
- Rate limiting on API endpoints
- CORS security headers

---

### 3.9 Admin Command Center (Backend Operations)

**Purpose**: Operational visibility, business intelligence, workflow automation

**Accessibility**: Admin staff only (role-based authentication)

#### 3.9.1 Dashboard Overview
```
Key Metrics Cards:
- Total revenue (this month/year)
- New leads (this week/month)
- Conversion rate (inquiry → consultation)
- Active clients
- Outstanding invoices
- Client satisfaction score
- Care hours delivered (this month)
```

**Technical Implementation**:
- Server-side data aggregation
- Chart.js visualizations
- Redux for caching

#### 3.9.2 Consultation Request Management
```
Table/List View:
- Name, email, phone, service interested
- Inquiry date
- Status (New, Contacted, Consultation Booked, Converted, Lost)
- Assigned to (team member)
- Tags (hot lead, follow-up, etc.)
- Notes field
- Action buttons (contact, move to next stage, delete)
```

**Features**:
- Filtering by status, date, service, assigned person
- Bulk actions (bulk email, assign, change status)
- Search functionality
- Sort by various columns
- Export to CSV

**Technical Implementation**:
- Database query with filters
- Pagination (50 per page)
- Redux for table state
- Bulk operation handlers

#### 3.9.3 Service Booking Monitoring
```
Analytics:
- Bookings by service type (bar chart)
- Bookings by date (line chart)
- Most popular time slots
- Booking source (website, referral, etc.)
- Conversion rate by service
```

**Technical Implementation**:
- Chart.js with aggregated data
- Time-series data for trends
- Grouped by service

#### 3.9.4 Client/Lead Segmentation
```
Filters:
- Service type interested
- Acquisition source
- Engagement level
- Customer lifetime value
- Geography (local/diaspora)
- Care status (active, completed, lost)
```

**Technical Implementation**:
- Segment creation in database
- Redux actions for filtering
- Save custom segments

#### 3.9.5 Customer Pipeline Visualization
```
Funnel Chart:
- Inquiry (starting number)
- Consultation Booked
- Proposal Sent
- Client (converted)
- Conversion rate between stages
```

**Technical Implementation**:
- Chart.js funnel chart (custom)
- Real-time calculation from database

#### 3.9.6 Customer Support Ticket System
```
Ticket Management:
- New support requests form
- Ticket list with status (Open, In Progress, Resolved, Closed)
- Priority levels (Low, Medium, High, Urgent)
- Category (Billing, Technical, Service Quality, Other)
- Assignment to support staff
- Comments/updates thread
- SLA tracking (response time, resolution time)
- Escalation workflow
```

**Technical Implementation**:
- Database schema for tickets
- Notification system for new tickets
- Email notifications on updates
- SLA time calculation

#### 3.9.7 MailChimp Integration Dashboard
```
Features:
- Segment audience by service interest
- Create/manage email campaigns
- Automation workflow builder
- Performance metrics (open rate, click rate)
- Subscriber list management
- Send triggered emails
```

**Technical Implementation**:
- Mailchimp API integration
- OAuth for secure connection
- Sync customer data to Mailchimp
- Webhook for campaign events

#### 3.9.8 Reports & Analytics
```
Report Types:
1. Monthly Revenue Report
   - Total revenue
   - Revenue by service
   - Pending invoices
   - Average deal size

2. Conversion Funnel Report
   - Inquiry → Consultation rate
   - Consultation → Client rate
   - Overall conversion
   - Attribution by source

3. Service Performance Report
   - Most booked services
   - Service satisfaction scores
   - Revenue per service
   - Growth trends

4. Client Satisfaction Report
   - NPS (Net Promoter Score)
   - Reviews/ratings
   - Satisfaction by service
   - Comments/feedback themes

5. Traffic & Lead Source Report
   - Traffic by source (organic, direct, referral, paid)
   - Lead quality by source
   - Cost per lead
   - Traffic trends
```

**Export Options**:
- PDF download
- CSV export
- Email scheduling

**Technical Implementation**:
- Report generation service
- Chart.js for visualizations
- Dynamic date range selection
- Scheduled email reports

#### 3.9.9 A/B Testing Dashboard
```
Experiments:
- Homepage CTA button text
- Service page headlines
- Email subject lines
- Landing page variations
- Pricing display formats
```

**Metrics Tracked**:
- Variant A vs Variant B performance
- Conversion rates
- Click-through rates
- Statistical significance
- Winner determination

**Technical Implementation**:
- A/B testing library (split.io or custom)
- Variant assignment via cookies/Redux
- Analytics event tracking
- Results dashboard

#### 3.9.10 Client Retention Tracking
```
Metrics:
- Repeat client percentage
- Average customer lifetime value
- Churn rate
- Retention rate by service
- Client status timeline
```

**Cohort Analysis**:
- Retention by acquisition date
- Retention by service type
- Seasonal patterns

**Technical Implementation**:
- Cohort analysis algorithm
- Time-series data queries
- Visualization dashboard

#### 3.9.11 Invoice & Payment Processing
```
Features:
- Generate/customize invoices
- Send invoice to client email
- Payment reminders (automatic)
- Payment reconciliation
- Refund processing
- Invoice templates management
```

**Technical Implementation**:
- Invoice template editor
- Paystack API for payments
- Scheduled email reminders
- Transaction log

#### 3.9.12 Care Provider Management
```
Functions:
- Add/edit care provider profiles
- Certifications/credentials tracking
- Availability schedule management
- Performance ratings
- Workload distribution
- Document storage (certifications, background check)
```

**Technical Implementation**:
- CRUD operations
- File upload to Cloudflare R2
- Calendar integration
- Rating calculation

#### 3.9.13 Admin Security & Permissions
```
Role Levels:
- Super Admin (all access)
- Manager (clients, invoices, reports)
- Support Staff (tickets, basic client info)
- Accountant (invoices, payments, reports)
- Care Coordinator (bookings, updates)

Audit Trails**:
- All actions logged
- User, timestamp, action type
- Data changes tracked
- Export audit logs
```

**Technical Implementation**:
- Role-based middleware
- Audit log database table
- Admin action logging service

---

### 3.10 Email Newsletter Signup (Popup/Widget)

**Purpose**: Lead capture, audience building, nurture campaign funnel

#### 3.10.1 Signup Form

```
Form Fields:
- Email (required)
- Full name (optional)
- Service interested in (dropdown - optional)
- Checkbox: "I agree to receive emails"
```

**Technical Implementation**:
- Shadcn/ui form component
- Validation (email format)
- Submission to Mailchimp + database

#### 3.10.2 Value Proposition (Lead Magnet)
```
Offer options (choose 1 or combine):
- Free Download: "Home Care Checklist"
- Free Download: "Post-Stroke Recovery Guide"
- Free Download: "Family Caregiver's Handbook"
- 3-day email course: "Preparing for Home Care"
```

**Technical Implementation**:
- Downloadable PDF stored on Cloudflare R2
- Email trigger to send download link
- Mailchimp automation

#### 3.10.3 Popup Variants

**Option A: Exit-Intent Popup**
```
Trigger: When user moves mouse to leave page
Timing: Not more than once per session
Message: "Wait! Get Your Free Care Checklist"
CTA: "Download Now"
Dismiss: X button, click outside, "No thanks" button
```

**Option B: Sticky Header Banner**
```
Position: Top of page, below header
Content: "Subscribe to our weekly care tips"
Form: Inline email input + subscribe button
Dismissible: X button (remembers for session)
```

**Option C: Sidebar Widget**
```
Position: Right sidebar (desktop only)
Content: "Free Home Care Guide"
Form: Email input
Always visible (non-intrusive)
```

**Technical Implementation**:
- React modal component
- Detect exit intent (mouseleave event)
- LocalStorage for dismissal
- Redux for popup state

#### 3.10.4 Confirmation Flow
```
After Signup:
1. Immediate confirmation page
   - "Check your email!"
   - Display download button
   - Link to download PDF directly

2. Confirmation email (Mailchimp)
   - Download link
   - Introduction to Living Rite Care
   - Link to subscribe to main newsletter

3. First automation email (24 hours)
   - Welcome message
   - Case study featuring featured service
   - Invitation to book consultation
```

**Technical Implementation**:
- Mailchimp automation workflow
- Conditional logic based on service interest

#### 3.10.5 Post-Signup Campaign
```
Nurture Sequence (14 days):
- Day 1: Welcome + resources
- Day 3: Case study #1
- Day 5: Blog article (most popular)
- Day 7: Educational content
- Day 10: Service deep-dive
- Day 14: Limited-time offer or consultation CTA
```

**Technical Implementation**:
- Mailchimp automation
- Personalization tokens (name, service interest)

#### 3.10.6 Audience Segmentation
```
Segments in Mailchimp:
- By service interest
- By acquisition source
- By engagement level
- By client status (lead, client, past client)
```

**Technical Implementation**:
- Sync customer data to Mailchimp with tags
- Dynamic segmentation based on behavior

---

### 3.11 FAQ Section

**Purpose**: SEO boost, objection handling, self-service support

**Architecture**:
- FAQ page at `/faq`
- Service-specific FAQs on each service page
- Schema markup for rich snippets

#### 3.11.1 Main FAQ Page Structure

```
Sections (accordion format):
1. About Living Rite Care (5-7 questions)
2. Services & Pricing (8-10 questions)
3. Booking & Consultations (6-8 questions)
4. Client Portal & Invoices (5-6 questions)
5. Care & Quality (7-8 questions)
6. Insurance & Billing (5-6 questions)
```

**Technical Implementation**:
- Accordion UI component (Shadcn/ui)
- FAQ data in Sanity.io
- Search functionality across FAQs
- Expandable/collapsible sections

#### 3.11.2 FAQ Content Guidelines

**Example Questions**:

**About Living Rite Care**
- What is Living Rite Care's mission?
- How long has Living Rite Care been in operation?
- What certifications do your caregivers have?
- Do you operate nationwide/internationally?
- How are your caregivers trained and vetted?

**Services & Pricing**
- What services does Living Rite Care offer?
- How much do your services cost?
- Do you offer flexible payment plans?
- Can you customize services to our needs?
- What is included in a full-time care package?

**Booking & Consultations**
- How do I book a free consultation?
- What should I expect during the consultation?
- What information do I need to provide?
- Can I reschedule or cancel?
- Do you offer emergency consultations?

**Client Portal & Invoices**
- How do I access the client portal?
- What if I forget my password?
- How often are invoices issued?
- Can I view payment history online?
- Is my data secure in the portal?

**Care & Quality**
- How do you ensure quality care?
- What is your average caregiver-to-client ratio?
- How do you handle emergency situations?
- Can I request specific caregivers?
- What equipment do you provide?

**Insurance & Billing**
- Do you accept insurance?
- What payment methods do you accept?
- Is there a cancellation fee?
- Do you offer refunds?
- How are invoices calculated?

#### 3.11.3 Search & Discovery
```
Features:
- Full-text search across all FAQs
- Search suggestions
- "Most asked questions" section
- Related questions at bottom of page
```

**Technical Implementation**:
- Algolia or Meilisearch for full-text search
- Query highlighting
- Analytics on search queries

#### 3.11.4 CTA Integration
```
Within FAQ:
- "Still have questions?" → WhatsApp/contact form
- "Ready to book?" → Calendly CTA
- "Explore our services" → Link to /services
```

#### 3.11.5 SEO Optimization
```
Schema Markup (FAQPage):
- Question
- Answer
- Structured data for each Q&A
- Enables "Featured Snippets" in Google SERP

Meta Tags:
- Meta title: "Frequently Asked Questions - Living Rite Care"
- Meta description: "Find answers to common questions about home healthcare..."
- H1: "Frequently Asked Questions"
```

**Technical Implementation**:
- JSON-LD FAQPage schema
- Programmatic generation from Sanity.io data
- Next.js Head component

#### 3.11.6 Analytics
```
Track:
- Most searched questions
- Unanswered questions (queries with no results)
- Click-through rates on CTAs
- User engagement (read time, scroll depth)
```

**Technical Implementation**:
- Mixpanel/PostHog event tracking
- Search analytics dashboard

---

## 4. User Experience & Interface Design

### 4.1 Design System
- **Component Library**: Shadcn/ui (Tailwind CSS based)
- **Color Palette**: Professional healthcare aesthetic (blues, greens, whites)
- **Typography**: Clear, readable sans-serif fonts
- **Spacing**: Consistent padding/margin system (8px grid)
- **Icons**: Lucide React or Hero Icons
- **Accessibility**: WCAG 2.1 AA compliance minimum

### 4.2 Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly CTAs (minimum 48px height)
- Thumb-friendly navigation (bottom navigation on mobile)

### 4.3 Performance Optimization
- Lighthouse Score: 90+ across all metrics
- Core Web Vitals: Green on all metrics
- Image optimization (Next.js Image component)
- Code splitting and lazy loading
- Caching strategies (Redis for API responses)

---

## 5. Data Architecture

### 5.1 Database Schema (High-Level)

```
Tables/Collections:
- Users (admin, care providers, families)
- Clients (patient information)
- CareUpdates (progress notes, vital signs)
- Services (service offerings)
- Bookings (consultation bookings)
- Payments (transaction records)
- Invoices (generated invoices)
- Documents (uploaded files metadata)
- LeadCapture (newsletter signups, inquiries)
- SupportTickets (customer support)
- BlogArticles (hosted in Sanity.io)
- Testimonials (hosted in Sanity.io)
- AuditLog (all admin actions logged)
```

### 5.2 Sanity.io Content Types
```
- BlogArticle
- Service
- Testimonial
- CaseStudy
- TeamMember
- FAQ
- HomePage (configuration)
- ServicePage (configuration)
- AboutPage (configuration)
```

### 5.3 External Data Sources
```
- Mailchimp API (subscribers, campaigns)
- Calendly API (bookings, availability)
- Paystack API (transactions)
- Google Reviews API (review aggregation)
- WhatsApp Business API (messaging)
- Twilio API (SMS)
```

---

## 6. Integration Points

### 6.1 Mailchimp Integration
```
Use Cases:
- Newsletter signups → synced to Mailchimp list
- Transactional emails (confirmations, invoices)
- Automated nurture campaigns
- Admin dashboard metrics

Implementation:
- Mailchimp SDK (JavaScript)
- Webhook for sync
- Custom email templates
- Audience segmentation by service
```

### 6.2 Calendly Integration
```
Use Cases:
- Free consultation booking
- Appointment scheduling
- Availability display
- Calendar sync

Implementation:
- Calendly iframe embed
- Webhooks for booking events
- Metadata capture (service type, timezone)
- Custom branding
```

### 6.3 Sanity.io Integration
```
Use Cases:
- Blog content management
- Service descriptions
- Team profiles
- Testimonials
- FAQ management
- Site configuration

Implementation:
- Sanity CLI for content modeling
- GROQ queries from Next.js
- Webhooks for invalidation
- Real-time editing
```

### 6.4 Cloudflare R2 Integration
```
Use Cases:
- Image storage (care photos, testimonials)
- Video storage (testimonial videos)
- PDF storage (invoices, guides, case studies)
- Document management (client portal)

Implementation:
- R2 SDK
- Presigned URLs for secure downloads
- CDN acceleration
- CORS configuration
```

### 6.5 Paystack Integration
```
Use Cases:
- Payment processing
- Invoice generation
- Refund handling
- Transaction logging

Implementation:
- Paystack React library
- Server-side payment verification
- Webhook handling for payment events
- Custom receipt generation
```

### 6.6 Twilio Integration
```
Use Cases:
- SMS reminders (consultation pre-reminders)
- SMS alerts (to care providers)
- SMS confirmation (booking confirmation)

Implementation:
- Twilio SDK
- Scheduled messaging
- Message templates
- Opt-in/opt-out management
```

### 6.7 WhatsApp Business API Integration
```
Use Cases:
- Chat widget on website
- Automated messages (booking confirmations)
- Support notifications
- Appointment reminders

Implementation:
- WhatsApp Business API
- Message templates (pre-approved)
- Webhook for incoming messages
- Message routing to support team
```

### 6.8 Google Reviews Integration
```
Use Cases:
- Display customer reviews on website
- Review widget on testimonials page
- Trust building

Implementation:
- Google Business API
- Embedded widget
- Manual review curation
```

---

## 7. Security & Compliance

### 7.1 Authentication & Authorization
- NextAuth.js for user authentication
- JWT tokens with 24-hour expiration
- Refresh token rotation
- Role-based access control (RBAC)
- Two-factor authentication (2FA) for admin users

### 7.2 Data Protection
- HTTPS/TLS for all communications
- Encrypted database fields (passwords, sensitive data)
- GDPR compliance:
  - Explicit consent for data collection
  - Right to deletion
  - Data portability
  - Privacy policy on website
- PII handling (patient data, health information)
- HIPAA considerations (if applicable in jurisdiction)

### 7.3 Payment Security
- PCI DSS compliance (via Paystack)
- No sensitive payment data stored locally
- Secure API endpoints with rate limiting
- Transaction logging and audit trails

### 7.4 API Security
- CORS configuration (restrict to known origins)
- Rate limiting (prevent abuse)
- API key management
- Input validation and sanitization
- SQL injection prevention (use parameterized queries)
- XSS protection

### 7.5 Infrastructure Security
- Environment variables for secrets (.env.local)
- Cloudflare DDoS protection
- WAF (Web Application Firewall) rules
- Regular security audits
- Dependency vulnerability scanning (Dependabot)

---

## 8. Performance Metrics & KPIs

### 8.1 Technical KPIs
- Lighthouse Score: 90+
- Core Web Vitals: All green
- Page load time: < 2 seconds
- API response time: < 500ms
- Uptime: 99.9%
- Mobile user experience score: > 90

### 8.2 Business KPIs
- Inquiry-to-consultation conversion: 40%+
- Consultation-to-client conversion: 50%+
- Overall conversion rate (inquiry to client): 20%+
- Average deal size: ₦500,000+
- Customer lifetime value: ₦2,000,000+
- Churn rate: < 10%
- Net Promoter Score (NPS): > 50
- Client satisfaction: > 4.5/5.0 stars
- Newsletter subscription rate: 10%+ of visitors
- Blog traffic: 5,000+ monthly unique visitors

### 8.3 Marketing KPIs
- Click-through rate (CTA buttons): > 3%
- Email open rate: > 30%
- Email click rate: > 5%
- Social proof engagement: > 2%
- Lead magnet conversion: > 20%
- Cost per lead: < ₦5,000
- Return on ad spend (ROAS): > 3x

---

## 9. Development Roadmap

### Phase 1: MVP (Weeks 1-4)
- [ ] Homepage with hero, services preview, trust indicators
- [ ] Service pages (basic content)
- [ ] About page
- [ ] Testimonials page with reviews widget
- [ ] Calendly embedded booking
- [ ] WhatsApp chat button
- [ ] Blog index page
- [ ] FAQ page
- [ ] Newsletter signup popup
- [ ] Basic admin dashboard

### Phase 2: Enhancement (Weeks 5-8)
- [ ] Client portal (basic functionality)
- [ ] Blog articles (content creation)
- [ ] Case studies with media
- [ ] Email automation (Mailchimp)
- [ ] Payment processing (Paystack)
- [ ] Invoice generation
- [ ] Care updates system
- [ ] Admin command center (full features)

### Phase 3: Polish & Launch (Weeks 9-10)
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Security audit
- [ ] Content polish
- [ ] Testing (unit, integration, E2E)
- [ ] Staging environment
- [ ] Production deployment
- [ ] Monitoring setup

### Phase 4: Post-Launch (Ongoing)
- [ ] Analytics monitoring
- [ ] User feedback collection
- [ ] A/B testing implementation
- [ ] Continuous content updates
- [ ] Feature requests prioritization
- [ ] Performance monitoring

---

## 10. Success Criteria

### 10.1 Launch Success
- [ ] All MVP features deployed and functional
- [ ] Zero critical bugs in production
- [ ] Page load time < 2 seconds
- [ ] Mobile responsiveness verified
- [ ] Analytics tracking implemented
- [ ] Team trained on admin dashboard

### 10.2 Post-Launch (First 30 Days)
- [ ] 50+ consultation bookings via website
- [ ] 500+ newsletter subscribers
- [ ] 10+ client portal users
- [ ] Blog receiving organic traffic
- [ ] Average session duration > 3 minutes
- [ ] Bounce rate < 50%

### 10.3 3-Month Target
- [ ] 20+ active clients acquired via website
- [ ] 2,000+ newsletter subscribers
- [ ] 50+ published blog articles
- [ ] 100+ Google reviews (rating > 4.5)
- [ ] Monthly organic traffic: 10,000+ visitors
- [ ] Client satisfaction score: > 4.5/5.0

---

## 11. Technical Specifications & Deployment

### 11.1 Local Development Setup
```bash
# Clone repository
git clone <repo-url>

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env.local

# Run development server
pnpm dev

# Visit http://localhost:3000
```

### 11.2 Environment Variables (Example)
```
NEXT_PUBLIC_SITE_URL=https://example.com
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxxxx

NEXTAUTH_SECRET=xxxxx
NEXTAUTH_URL=https://example.com

MAILCHIMP_API_KEY=xxxxx
MAILCHIMP_AUDIENCE_ID=xxxxx

PAYSTACK_PUBLIC_KEY=xxxxx
PAYSTACK_SECRET_KEY=xxxxx

CALENDLY_API_KEY=xxxxx

CLOUDFLARE_R2_ACCOUNT_ID=xxxxx
CLOUDFLARE_R2_ACCESS_KEY_ID=xxxxx
CLOUDFLARE_R2_SECRET_ACCESS_KEY=xxxxx

TWILIO_ACCOUNT_SID=xxxxx
TWILIO_AUTH_TOKEN=xxxxx

WHATSAPP_BUSINESS_API_TOKEN=xxxxx
```

### 11.3 Build & Deployment
```bash
# Build for production
pnpm build

# Test production build locally
pnpm start

# Deploy to Vercel (recommended)
# Connect GitHub repository to Vercel
# Auto-deploy on push to main branch
```

### 11.4 Database Setup
```
Sanity.io:
- Create project at sanity.io
- Initialize schema (content models)
- Create API tokens
- Deploy to production dataset

PostgreSQL (optional, for custom data):
- Provision on Railway/Supabase
- Run migrations
- Setup backup strategy
```

### 11.5 CDN & Storage
```
Cloudflare:
- Add domain
- Configure DNS
- Enable R2 bucket
- Setup custom domain for R2 (cdn.example.com)

Vercel:
- Configure build settings
- Setup environment variables
- Configure deployment protections
```

---

## 12. Maintenance & Support

### 12.1 Content Management
- Blog publishing: 2x per week
- Testimonial updates: Monthly
- Service page updates: Quarterly or as needed
- FAQ updates: Monthly
- Newsletter sending: Weekly

### 12.2 Technical Maintenance
- Security updates: Weekly (dependency checks)
- Performance monitoring: Daily
- Backup strategy: Daily automated backups
- Log review: Weekly
- Uptime monitoring: 24/7 (Vercel + monitoring service)

### 12.3 Analytics Review
- Daily: Traffic spikes, errors
- Weekly: Conversion metrics, user behavior
- Monthly: KPI reviews, trend analysis
- Quarterly: Strategic reviews, optimization roadmap

### 12.4 Client Support
- Response time: < 24 hours for general inquiries
- Urgent issues: < 2 hours
- Support channels: WhatsApp, email, phone
- Support hours: Business hours + on-call for emergencies

---

## 13. Glossary

| Term | Definition |
|------|-----------|
| CTA | Call-to-Action (button or link encouraging user action) |
| MVP | Minimum Viable Product (core features for launch) |
| SERP | Search Engine Results Page (Google search results) |
| SEO | Search Engine Optimization |
| GDPR | General Data Protection Regulation (EU privacy law) |
| R2 | Cloudflare R2 (object storage service) |
| API | Application Programming Interface |
| JWT | JSON Web Token (authentication method) |
| RBAC | Role-Based Access Control |
| ISR | Incremental Static Regeneration (Next.js feature) |
| Webhook | Automated callback from external service |
| GROQ | Graph-Relational Object Queries (Sanity.io query language) |

---

## 14. Questions & Clarifications Needed

1. **Geographic Focus**: Are services primarily for Nigeria, diaspora, or both? (Affects timezone handling, currency, payment methods)
2. **Compliance**: Are HIPAA requirements needed (if serving US-based clients)?
3. **Insurance Integration**: Do any health insurance companies need integration?
4. **Video Conferencing**: Zoom, Google Meet, or custom video for consultations?
5. **Multi-language Support**: English only or additional languages needed?
6. **Social Media Integration**: Facebook, Instagram, LinkedIn pages/feeds to include?
7. **Analytics Platform**: Preference for Mixpanel, PostHog, or Google Analytics?
8. **Budget & Timeline**: Realistic constraints for development?
9. **Team Size**: How many developers, designers, content creators available?
10. **Future Features**: Planned enhancements beyond MVP (e.g., telemedicine, prescription management)?

---

## Appendix: File Structure

```
living-rite-care-landing-page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx (services hub)
│   │   └── [slug]/
│   │       └── page.tsx (individual service)
│   ├── testimonials/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── faq/
│   │   └── page.tsx
│   ├── client-portal/
│   │   ├── layout.tsx (auth required)
│   │   ├── dashboard/
│   │   ├── care-updates/
│   │   ├── documents/
│   │   ├── appointments/
│   │   └── messages/
│   ├── admin/
│   │   ├── layout.tsx (auth required)
│   │   ├── dashboard/
│   │   ├── consultations/
│   │   ├── clients/
│   │   ├── invoices/
│   │   ├── analytics/
│   │   └── settings/
│   └── api/
│       ├── auth/ (NextAuth)
│       ├── clients/
│       ├── bookings/
│       ├── payments/
│       ├── invoices/
│       ├── emails/
│       └── uploads/ (Cloudflare R2)
├── components/
│   ├── common/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── nav.tsx
│   │   ├── whatsapp-chat.tsx
│   │   ├── newsletter-popup.tsx
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── services-preview.tsx
│   │   ├── trust-indicators.tsx
│   │   ├── cta-section.tsx
│   ├── portal/
│   │   ├── sidebar.tsx
│   │   ├── care-update-form.tsx
│   │   ├── documents-list.tsx
│   ├── admin/
│   │   ├── dashboard-cards.tsx
│   │   ├── charts.tsx
│   │   ├── tables.tsx
│   └── ui/ (Shadcn components)
├── lib/
│   ├── sanity.ts
│   ├── mailchimp.ts
│   ├── paystack.ts
│   ├── cloudflare-r2.ts
│   ├── auth.ts
│   └── utils.ts
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   ├── videos/
│   └── documents/
├── .env.local (git ignored)
├── sanity/
│   ├── schemas/
│   │   ├── blog.ts
│   │   ├── service.ts
│   │   └── ...
│   └── sanity.config.ts
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── package.json
└── README.md
```

---

**Document End**

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | Dec 20, 2025 | Product Team | Initial PRD creation |

---

**Approval Sign-off:**
- [ ] Product Manager
- [ ] Tech Lead
- [ ] Design Lead
- [ ] CEO/Stakeholder
