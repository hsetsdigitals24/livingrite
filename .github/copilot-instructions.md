# LivingRite Care - AI Coding Agent Instructions

## Project Overview
**LivingRite Care** is a Next.js 14 healthcare web platform for home-based care services in Nigeria. It includes a public-facing website (homepage, service pages) for lead generation, a Sanity-powered blog with moderated comments system, and testimonials section.

**Key Tech Stack:**
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS with Shadcn/ui components
- CMS: Sanity.io (blogs, testimonials, comments with admin moderation)
- State: TBD (Redux recommended per PRD but not yet implemented)
- Icons: Lucide-react
- Animation: Framer Motion
- Backend: API routes for comments, NextAuth.js (auth), Cloudflare R2 (storage planned)

---

## Architecture & Key Patterns

### Component Organization
- **`components/`** - Reusable Shadcn/ui primitives and custom components
- **`components/[service]/`** - Domain-specific components (physiotherapy/, post-stroke/, post-icu/, end-of-life-care/)
- **`components/ui/`** - Shadcn/ui library (auto-generated, do not edit)
- **`components/services/`** - Service discovery components (grid, detail, FAQ, process)
- **`components/blog/`** - Blog-specific components (posts, comments, filtering, testimonials, newsletter)
- **`app/`** - Next.js App Router pages (layout.tsx, page.tsx) organized by route

### Page Routing Pattern
```
app/page.tsx                    → Homepage
app/services/page.tsx           → Services listing
app/services/[slug]/page.tsx    → Individual service detail
app/blogs/page.tsx              → Blog listing with filters
app/blogs/[slug]/page.tsx       → Individual blog post with comments
app/testimonials/page.tsx       → Testimonials/case studies
app/about/page.tsx              → About page
app/faqs/page.tsx               → FAQ page
app/search/page.tsx             → Search functionality
```

### Styling & Theme
- **CSS Variables:** oklch() color system in `app/globals.css` (light/dark modes)
- **Primary brand color:** Calming teal (`--primary: oklch(0.5 0.08 215)`)
- **Secondary/Accent:** Warm orange (`--accent: oklch(0.75 0.12 60)`)
- **Utility function:** Use `cn()` from `@/lib/utils` to merge classNames (clsx + tailwind-merge)
- **Responsive design:** Use Tailwind breakpoints (mobile-first approach)

Example:
```tsx
import { cn } from "@/lib/utils"
className={cn("base-class", condition && "conditional-class")}
```

### Component Composition Pattern
Homepage follows a **vertical section stack** pattern:
```tsx
<Header /> → <HeroSection /> → <TrustIndicators /> → <ServicesSection /> 
→ <AboutSection /> → <TestimonialsSection /> → <CTABanner /> → <Footer />
```

Each section is self-contained, imports Shadcn/ui components, and uses inline data objects (not APIs yet).

---

## Critical Developer Workflows

### Development
```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Adding a New Service Page
1. Create route directory: `app/[service-name]/page.tsx`
2. Create domain components: `components/[service-name]/[component-name].tsx`
3. Import Shadcn/ui primitives and domain components into page
4. Use service configuration objects for dynamic data (e.g., features, testimonials)

### Adding UI Components
Run: `npx shadcn-ui@latest add [component-name]` (generates to `components/ui/`)

---

## Project-Specific Conventions

### Configuration Choices
- **`next.config.mjs`:** Sets `ignoreBuildErrors: true` and `unoptimized: true` (builds may ignore TS errors; verify intentional)
- **Aliases:** `@/` resolves to root, `@/components`, `@/lib`, `@/hooks`, `@/ui`
- **TypeScript:** Strict mode enabled; use types from Radix/Shadcn
- **Font:** Inter (base) + Poppins (branded headings) from Google Fonts

## Integration Points & Dependencies

### Sanity.io Setup & Studio
- **Studio location:** `app/studio/[[...tool]]/page.tsx` mounts Sanity Studio at `/studio` route
- **Schema types:** All document types defined in `sanity/schemaTypes/` (post.ts, comments.ts, testimonials.ts, etc.)
- **Structure:** `sanity/structure.ts` organizes studio interface (not yet customized for complex workflows)
- **Vision plugin:** Enabled for GROQ query testing within studio at `/studio`
- **API versioning:** Set to `2025-12-29` in `sanity/env.ts`

### External Services (Planned, per PRD)
- **NextAuth.js:** Authentication for client portal (dependency present, not yet integrated)
- **Cloudflare R2:** File/image storage (planned)
- **Paystack/Stripe:** Payment processing (planned)
- **Mailchimp:** Email/newsletters (planned)
- **Sentry:** Error tracking (planned)
- **Vercel Analytics:** Already integrated in layout

### Shadcn/ui Component Usage
- Wrap content with `<Card><CardContent>` for sections
- Use `<Button>` for CTAs with variants: `variant="default" | "outline" | "ghost"`
- Form handling: TBD (dependency already added: `@hookform/resolvers`)
- For lists/menus: Use `<Select>`, `<Dropdown>`, or custom grids

---

## Common Pitfalls & Solutions

1. **Typography hierarchy:** Always define page headings as h1 (Poppins font), subheadings as h2/h3 (Poppins)
2. **Responsive images:** Use Next.js `<Image>` component (already configured with unoptimized flag)
3. **Theme switching:** Use `next-themes` provider (already in layout); theme state changes require `'use client'`
4. **Build errors:** Check `next.config.mjs`—TypeScript errors are ignored; verify these are intentional
5. **Service slugs:** Dynamic routes use `[slug]`; ensure data mapping aligns between route params and component data

---

## Quick References

- **Main config files:** `tsconfig.json`, `next.config.mjs`, `components.json` (Shadcn config)
- **Color/theme reference:** `app/globals.css` (CSS variables) and `components.json` (baseColor: neutral)
- **Key components to study:** `app/page.tsx` (page composition), `components/services-section.tsx` (data + UI pattern)
- **Package manager:** pnpm (lockfile: `pnpm-lock.yaml`)

---

## Essential Data Flows & Patterns

### Server vs Client Components
- **Server Components (default):** Use for data fetching from Sanity (e.g., `app/blogs/[slug]/page.tsx`)
- **Client Components:** Mark with `'use client'` only when needed (event handlers, state, hooks). Example: `blog-comments.tsx` uses `'use client'` for form submission and like handling
- **Pattern:** Server fetch → pass data as props to client component (avoid double-fetching)

### GROQ Query Patterns
- **Fetch all posts:** `*[_type == "post"] | order(publishedAt desc)`
- **Fetch by slug:** `*[_type == "post" && slug.current == $slug][0]`
- **Filter approved comments:** `*[_type == "comment" && post._ref == $postId && isApproved == true] | order(timestamp desc)`
- **Dereference author:** Use `author->` to fetch nested author object in post queries
- **Reference filtering:** Use `post._ref == $postId` to match reference fields
- **Ordering:** Use `order()` not `sort()` for GROQ queries

### API Route Patterns
- **GET:** Fetch filtered/approved data before sending to client
- **POST:** Validate input (email, content length), create Sanity document, update related arrays
- **PUT:** Handle non-idempotent updates (likes) with proper error handling
- **Error responses:** Use `NextResponse.json({ error: "message" }, { status: 400 })`

## When Stuck or Adding Features

- **New blog features:** Study `app/blogs/[slug]/page.tsx` (server fetch) and `components/blog/blog-comments.tsx` (client submission)
- **New Sanity content:** Define schema in `sanity/schemaTypes/`, write GROQ query in `lib/queries.ts` or page component, create API route if mutation needed
- **API with Sanity:** Reference `app/api/comments/route.ts` for full CRUD pattern with validation and error handling
- **Styling questions:** Check `app/globals.css` for color system; test in browser DevTools
- **Build/lint issues:** Run `pnpm lint` to identify issues before asking
