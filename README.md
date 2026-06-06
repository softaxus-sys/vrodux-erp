# Vrodux ERP — Marketing Website

Enterprise-grade SaaS ERP marketing website for Vrodux ERP by SoftAxis Technologies LLC.

Built with Next.js 15, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Database**: PostgreSQL + Prisma ORM
- **Email**: Resend
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics + Google Analytics 4
- **Deployment**: Vercel (recommended)

---

## Pages

| Page | Route |
|------|-------|
| Homepage | `/` |
| Features | `/features` |
| Solutions | `/solutions` |
| Industries | `/industries` |
| Pricing | `/pricing` |
| About | `/about` |
| Contact | `/contact` |
| Book Demo | `/book-demo` |
| Blog | `/blog` |
| Blog Post | `/blog/[slug]` |
| Careers | `/careers` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| Security | `/security` |
| Partners | `/partners` |
| Implementation | `/implementation` |
| Case Studies | `/case-studies` |
| FAQ | `/faq` |
| Admin Dashboard | `/admin` |
| Admin Contacts | `/admin/contacts` |
| Admin Demos | `/admin/demos` |
| Admin Blog | `/admin/blog` |

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values.

### 3. Set up the database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Or run migrations
npm run db:migrate
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Recommended |
| `FROM_EMAIL` | Sender email address | Yes |
| `CONTACT_EMAIL` | Email to receive contact form submissions | Yes |
| `DEMO_EMAIL` | Email to receive demo requests | Yes |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | Yes |
| `NEXT_PUBLIC_APP_URL` | ERP app URL | Yes |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 ID | Optional |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager ID | Optional |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity ID | Optional |
| `NEXT_PUBLIC_CALENDLY_URL` | Calendly booking URL | Optional |

---

## Deployment to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Vrodux ERP website"
git remote add origin https://github.com/your-org/vrodux-erp.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Visit [vercel.com](https://vercel.com) and import your repository
2. Add all environment variables in Vercel dashboard
3. Deploy!

### 3. Connect PostgreSQL

Use Vercel Postgres, Supabase, Neon, or any PostgreSQL provider. Add the connection string as `DATABASE_URL`.

---

## Database Setup

The Prisma schema includes these models:

- **Lead** — Contact form submissions tracked as leads
- **DemoBooking** — Demo request bookings
- **NewsletterSubscriber** — Email newsletter subscribers
- **BlogPost** — Blog articles (CMS)
- **ContactMessage** — Contact form messages

---

## Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Add and verify your domain (e.g., `vrodux.com`)
3. Create an API key
4. Add to `.env.local` as `RESEND_API_KEY`
5. Set `FROM_EMAIL` to `noreply@vrodux.com`

---

## Calendly Integration

1. Create a Calendly account at [calendly.com](https://calendly.com)
2. Create an event type (e.g., "30 min Vrodux Demo")
3. Copy your booking URL
4. Add to `.env.local` as `NEXT_PUBLIC_CALENDLY_URL`

---

## Analytics Setup

### Google Analytics 4
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXX)
3. Add as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

### Google Tag Manager
1. Create a GTM container at [tagmanager.google.com](https://tagmanager.google.com)
2. Get your container ID (GTM-XXXXXXX)
3. Add as `NEXT_PUBLIC_GTM_ID`

### Microsoft Clarity
1. Sign up at [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create a project and get your project ID
3. Add as `NEXT_PUBLIC_CLARITY_ID`

---

## Customization

### Brand Colors
Edit `tailwind.config.ts` — the `brand` color palette uses Indigo shades by default.

### Company Info
Update these files for your company details:
- `src/lib/seo.ts` — SEO metadata
- `src/components/layout/footer.tsx` — Footer content
- `src/components/layout/navbar.tsx` — Navigation

### Content
All page content is in the respective page files under `src/app/`.

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/              # API routes
│   ├── admin/            # Admin dashboard
│   ├── blog/             # Blog pages
│   └── [pages]/          # All other pages
├── components/
│   ├── ui/               # ShadCN UI components
│   ├── layout/           # Navbar, Footer, ThemeProvider
│   ├── sections/         # Homepage sections
│   └── shared/           # Shared components
├── lib/                  # Utilities, email, validation
├── types/                # TypeScript types
└── hooks/                # Custom hooks
```

---

## Performance

- Server Components used wherever possible
- Image optimization with Next.js Image
- Code splitting via Next.js
- Lazy loading of heavy components
- Optimized fonts with `next/font`
- Edge-ready (Vercel Edge Network)

---

## SEO Features

- Dynamic metadata per page
- Open Graph & Twitter Cards
- JSON-LD structured data
- XML Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Canonical URLs
- Web Manifest

---

## Security Features

- Rate limiting on all API endpoints
- Input validation with Zod
- Security headers (CSP, HSTS, X-Frame-Options)
- No sensitive data in client bundle
- SQL injection prevention via Prisma

---

## License

Copyright © 2025 SoftAxis Technologies LLC. All rights reserved.

Built with ❤️ in Dubai, UAE.
