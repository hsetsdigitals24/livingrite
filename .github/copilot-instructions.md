# LivingRite Care - AI Coding Agent Instructions

## Project Overview
**LivingRite Care** is a Next.js 14 healthcare web platform for home-based care services in Nigeria. It consists of a public-facing website (homepage, service pages) for lead generation and brand presence. The app uses Shadcn/ui components, Tailwind CSS, and TypeScript.

**Key Tech Stack:**
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS with Shadcn/ui
- State: TBD (Redux recommended per PRD but not yet implemented)
- Icons: Lucide-react
- Backend: Sanity.io (CMS), NextAuth.js (auth), Cloudflare R2 (storage)

---

## Architecture & Key Patterns

### Component Organization
- **`components/`** - Reusable Shadcn/ui primitives and custom components
- **`components/[service]/`** - Domain-specific components (physiotherapy/, post-stroke/, post-icu/)
- **`components/ui/`** - Shadcn/ui library (auto-generated, do not edit)
- **`components/services/`** - Service discovery components (grid, detail, FAQ, process)
- **`app/`** - Next.js App Router pages (layout.tsx, page.tsx) organized by route

### Page Routing Pattern
Routes match service areas with dedicated page components:
```
app/page.tsx                    → Homepage (homepage sections)
app/services/page.tsx           → Services listing
app/services/[slug]/page.tsx    → Individual service detail
app/post-stroke-care/page.tsx   → Post-stroke service page
app/post-icu-care/page.tsx      → Post-ICU service page
app/physiotherapy/page.tsx      → Physiotherapy service page
```

Each service page imports domain-specific components (e.g., `post-stroke-hero`, `post-stroke-features`).

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

### Data Patterns
- **Static data:** Hardcoded objects in components (e.g., services array in `services-section.tsx`)
- **No database queries yet:** All content is frontend-only; Sanity.io integration pending
- **Icons:** Use Lucide-react (`import { IconName } from "lucide-react"`)

### Accessibility & Metadata
- Each page needs metadata export in `app/[route]/page.tsx`
- Homepage uses keywords like "home healthcare Nigeria, post-stroke care, physiotherapy"
- Icons support light/dark mode detection in metadata

---

## Integration Points & Dependencies

### External Services (Planned, per PRD)
- **Sanity.io:** Blog, testimonials, case studies
- **NextAuth.js:** Authentication for client portal
- **Cloudflare R2:** File/image storage
- **Paystack/Stripe:** Payment processing
- **Mailchimp:** Email/newsletters
- **Sentry:** Error tracking
- **Vercel Analytics:** Already integrated

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

## When Stuck or Adding Features

- **New pages:** Reference `app/post-stroke-care/page.tsx` structure
- **New UI:** Import from `@/components/ui/[primitive]` (Shadcn)
- **New business logic:** Post-stroke/ICU/physio components show domain patterns
- **Styling questions:** Check `app/globals.css` for color system; test in browser DevTools
- **Build/lint issues:** Run `pnpm lint` to identify issues before asking
