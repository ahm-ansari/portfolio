# 🚀 Abul Hassan Mohamed Ansari — Portfolio Website

A production-ready, **SEO-optimized Next.js 14** portfolio for a Senior Data Analyst & Full-Stack Developer based in Doha, Qatar. Includes a full interactive case study page converted from a live analytics report.

---

## ✅ What's Inside

| Feature | Details |
|---|---|
| **Framework** | Next.js 14 (App Router) |
| **Styling** | Pure CSS custom properties + Tailwind utility classes |
| **Charts** | Chart.js 4.4 (CDN, case study page) |
| **Fonts** | Syne · DM Sans · DM Serif Display · JetBrains Mono |
| **Animations** | CSS keyframes — fadeUp, float, pulse-ring, typewriter |
| **SEO** | Full metadata, JSON-LD schema, OpenGraph, Twitter Cards, canonical |
| **Contact Form** | Client validation + honeypot spam trap + Nodemailer API route |
| **Case Study** | /case-study/lead-generation — 11-section analytics report |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx                     ← SEO metadata + JSON-LD Person schema
│   ├── page.jsx                       ← Homepage (assembles all sections)
│   ├── api/contact/route.js           ← Contact form API (spam-protected)
│   └── case-study/lead-generation/
│       ├── layout.jsx                 ← Case study SEO metadata
│       └── page.jsx                   ← Renders LeadGenReport component
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx                 ← Sticky, mobile hamburger
│   │   └── Footer.jsx                 ← Footer with structured data
│   └── sections/
│       ├── Hero.jsx                   ← Particle canvas + typewriter + floating cards
│       ├── About.jsx                  ← Bio, metrics, quick facts
│       ├── Services.jsx               ← 6 SEO service cards
│       ├── Skills.jsx                 ← Animated progress bars + cert badges
│       ├── Projects.jsx               ← Interactive cards + corporate steps
│       ├── Experience.jsx             ← Timeline + structured data
│       ├── Contact.jsx                ← Validated form with honeypot
│       └── LeadGenReport.jsx          ← Full 11-section analytics case study
├── styles/globals.css                 ← Design system: tokens, buttons, cards
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── .env.local.example
└── .gitignore
```

---

## 🏃 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.local.example .env.local

# 3. Run development server
npm run dev
# → http://localhost:3000
```

---

## 📄 Pages & Routes

| Route | Description |
|---|---|
| `/` | Main portfolio homepage |
| `/case-study/lead-generation` | Full analytics case study (SafeGuard Security) |
| `/api/contact` | POST — contact form endpoint |

---

## 📊 Case Study — Lead Generation Analysis

11-section analytics report converted to React:

| Section | Content |
|---|---|
| 01 | Project Overview — 6 metadata schema fields |
| 02 | Dataset Design — 14-field dictionary + ETL pipeline |
| 03 | KPI Framework — 10 executive KPI cards |
| 04 | Data Analysis — 6 Chart.js charts + ROI table + heatmap |
| 05 | SQL Queries — 4 production queries with syntax highlighting |
| 06 | Power BI Wireframe — SVG dashboard mockup + 4 DAX measures |
| 07 | Marketing Strategy — 6 strategy cards + budget allocation |
| 08 | SWOT Analysis — 2x2 colour-coded quadrant grid |
| 09 | Recommendations — 6 numbered data-driven cards |
| 10 | AI/ML Roadmap — 3 model cards + 4-phase timeline |
| 11 | Executive Summary — findings + real-world challenges |

**Live Chart.js Charts:**
Monthly trend (bar+line) · Source volume · Conversion rates · CPL bubble chart · Response time · Zone donut · Performance heatmap

---

## 📬 Contact Form Setup

**Step 1 — Gmail App Password:**
1. Enable 2FA on Gmail
2. Go to: https://myaccount.google.com/apppasswords
3. Generate App Password for "Mail"

**Step 2 — Fill `.env.local`:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ahm.ansari.m@gmail.com
SMTP_PASS=xxxx-xxxx-xxxx-xxxx
CONTACT_TO=ahm.ansari.m@gmail.com
```

**Step 3:** Uncomment the Nodemailer block in `app/api/contact/route.js`

**Alternative — Formspree:** Replace the fetch URL in `Contact.jsx` with your Formspree endpoint.

---

## 🔍 SEO Features

| Feature | Implementation |
|---|---|
| Title template | `metadata.title.template` per page |
| Meta description | Keyword-rich, <160 chars |
| Open Graph | Full OG with 1200x630 image |
| Twitter Card | summary_large_image |
| JSON-LD Schema | Person schema in `<head>` |
| Canonical URL | `alternates.canonical` |
| Geo tags | geo.region + geo.placename (Qatar) |
| Semantic HTML5 | section, article, address, nav |
| ARIA | aria-label, aria-live, aria-current throughout |
| Heading hierarchy | h1 → h2 → h3 correctly nested |

---

## 🚢 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel --prod
```

### Before deploying — checklist
- [ ] Update `metadataBase` in `app/layout.jsx` to your real domain
- [ ] Add `og-image.png` (1200x630px) to `/public/`
- [ ] Add `favicon.ico` and `apple-touch-icon.png` to `/public/`
- [ ] Fill `.env.local` with real SMTP credentials
- [ ] Uncomment Nodemailer block in `app/api/contact/route.js`
- [ ] Replace Google verification placeholder in layout

---

## 🎨 Design Tokens (CSS Custom Properties)

```css
--primary:        #1a56db   /* Main blue */
--accent:         #0ea5e9   /* Sky blue */
--accent-warm:    #f59e0b   /* Amber */
--accent-success: #10b981   /* Green */
--font-display:   'Syne', system-ui
--font-body:      'DM Sans', system-ui
--font-mono:      'JetBrains Mono', monospace
```

All animations are triggered by IntersectionObserver — no layout paint on load.

---

*Built with Next.js 14 · © 2025 Abul Hassan Mohamed Ansari · Doha, Qatar*
