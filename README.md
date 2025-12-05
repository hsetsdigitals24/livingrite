# LivingRite Care Platform - Boilerplate Setup

This is a comprehensive Next.js 14+ healthcare platform with client portal, admin dashboard, booking system, and payment integration.

## ✅ Project Setup Complete

### What's Included

#### Core Framework
- ✅ Next.js 14 with App Router
- ✅ TypeScript with strict type safety
- ✅ Tailwind CSS for styling
- ✅ ESLint for code quality

#### State Management & Data
- ✅ Redux Toolkit with slices for auth, booking, and portal
- ✅ RTK Query for API calls
- ✅ React Hook Form for form handling
- ✅ Zod for schema validation
- ✅ SWR for client-side data fetching

#### Backend & Database
- ✅ Next.js API Routes
- ✅ Prisma ORM configured
- ✅ PostgreSQL schema with all models
- ✅ NextAuth.js setup for authentication

#### Content Management
- ✅ Sanity.io schema for blog, services, testimonials, team
- ✅ Sanity client configured
- ✅ Image URL builder

#### UI Components
- ✅ Button component (multiple variants)
- ✅ Card component (with header/body/footer)
- ✅ Input component with validation
- ✅ Badge component
- ✅ Alert component

## 📁 Project Structure

```
livingrite/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React components
│   ├── lib/                    # Core utilities
│   ├── store/                  # Redux store
│   ├── types/                  # TypeScript types
│   ├── hooks/                  # Custom hooks
│   └── utils/                  # Utilities
├── prisma/
│   └── schema.prisma           # Database schema
├── sanity/
│   ├── schemas/                # Sanity schemas
│   └── sanity.config.ts
└── .env.local                  # Environment variables
```

## 🚀 Getting Started

### 1. Environment Setup

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Update with your credentials.

### 2. Database Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🔌 Third-Party Integrations

- **Database**: PostgreSQL (Neon, Supabase, Railway)
- **CMS**: Sanity.io
- **Payments**: Paystack, Stripe
- **Email**: Mailchimp
- **Storage**: Cloudflare R2
- **Authentication**: NextAuth.js

## 📝 Available Scripts

```bash
npm run dev          # Development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run linter
npx prisma studio  # Open Prisma Studio
```

## 📦 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit, RTK Query
- **Database**: Prisma, PostgreSQL
- **Authentication**: NextAuth.js
- **CMS**: Sanity.io
- **Payments**: Paystack, Stripe
- **Deployment**: Vercel

---

**Happy coding! 🚀**
