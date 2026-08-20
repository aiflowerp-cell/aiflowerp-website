# Repository File Index

An architectural navigation map listing the path and short purpose of every file in the repository.

---

## 1. Documentation (`docs/` & Root Docs)
- `docs/00_MASTER_INDEX.md` — Master documentation index and quick reference.
- `docs/FIRST_PROMPT.md` — Permanent AI working contract and master engineering rules.
- `docs/ARCHITECTURE.md` — Technical system architecture, component layers, and styling system.
- `docs/FILE_INDEX.md` — Architectural navigation map of all project files.
- `docs/MASTER_PROJECT_MEMORY.md` — Permanent architectural decisions, constraints, and invariants.
- `docs/ROADMAP.md` — Phased project roadmap, current status, and upcoming milestones.
- `docs/CLIENT_REQUIREMENT_FORM.xlsx` — Primary client requirement form used to collect business, contact, location, services, products, branding, and website information.

- `docs/CLIENT_WEBSITE_BUILD_PROMPT.md` — Permanent AI-agent workflow and rules for creating a client website from the frozen Master Template.
- `AGENTS.md` — Next.js environment agent rules.
- `CLAUDE.md` — Agent prompt pointer to AGENTS.md.
- `README.md` — Standard project overview.

---

## 2. Application Routes (`app/`)
- `app/layout.js` — Global root layout with theme variables, Header, Footer, and WhatsApp button.
- `app/globals.css` — Core website stylesheet and design token definitions.
- `app/page.js` — Home landing page route.
- `app/page.module.css` — Default CSS module file.
- `app/about/page.js` — About page route.
- `app/services/page.js` — Services catalog page route.
- `app/products/page.js` — Products catalog page route.
- `app/gallery/page.js` — Portfolio gallery page route.
- `app/contact/page.js` — Contact details and studio map page route.
- `app/favicon.ico` — Browser tab favicon.

---

## 3. Components (`components/`)
### Layout Components (`components/layout/`)
- `components/layout/Header.js` — Global navigation header with responsive mobile drawer.
- `components/layout/Footer.js` — Global footer with navigation links and business info.
- `components/layout/PageIntro.js` — Reusable banner component for inner page headers.

### Section Components (`components/sections/`)
- `components/sections/Hero.js` — Main landing hero section with call-to-action buttons.
- `components/sections/AboutSection.js` — Brand story and about preview section.
- `components/sections/ServicesSection.js` — Services list section with numbered rows.
- `components/sections/ProductCard.js` — Reusable product showcase card.
- `components/sections/Gallery.js` — Multi-column image gallery grid.
- `components/sections/Testimonials.js` — Customer testimonials blockquote section.
- `components/sections/ContactSection.js` — Direct contact and WhatsApp action banner.
- `components/sections/MapSection.js` — Embedded Google map with studio address and directions.
- `components/sections/SectionHeading.js` — Reusable section heading primitive with eyebrow.
- `components/sections/WhatsAppButton.js` — Fixed floating WhatsApp chat trigger button.

### UI Primitives (`components/ui/`)
- `components/ui/Button.js` — Multi-variant button/link component (primary, light, text).
- `components/ui/Card.js` — Base card container primitive.

---

## 4. Configuration & Content (`config/`, `content/`, `lib/`)
- `config/business.js` — Business details, branding colors, contact info, and navigation items.
- `content/siteContent.js` — Centralized website copy, services, products, gallery, and reviews.
- `lib/site.js` — Helper utilities for WhatsApp and telephone URL generation.

---

## 5. Assets (`public/`)
- `public/images/README.md` — Instructions for replacing demo photography with client assets.
- `public/images/logo-mark.svg` — Brand logo mark SVG.
- `public/images/hero-room.svg` — Hero banner demo image.
- `public/images/about-room.svg` — About section demo image.
- `public/images/product-linen.svg` — Product placeholder 1.
- `public/images/product-cushion.svg` — Product placeholder 2.
- `public/images/product-rug.svg` — Product placeholder 3.
- `public/images/product-chair.svg` — Product placeholder 4.
- `public/images/gallery-01.svg` — Gallery image placeholder 1.
- `public/images/gallery-02.svg` — Gallery image placeholder 2.
- `public/images/gallery-03.svg` — Gallery image placeholder 3.
- `public/images/gallery-04.svg` — Gallery image placeholder 4.
- `public/images/gallery-05.svg` — Gallery image placeholder 5.
- `public/images/gallery-06.svg` — Gallery image placeholder 6.

---

## 6. Build & Environment Configuration
- `package.json` — NPM project metadata, dependencies (Next.js 16, React 19), and build scripts.
- `package-lock.json` — Locked dependency tree.
- `next.config.mjs` — Next.js configuration options.
- `jsconfig.json` — Path alias configuration (`@/*`).
- `eslint.config.mjs` — ESLint 9 configuration.
