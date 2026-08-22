<!--
FILE: docs/ARCHITECTURE.md
PURPOSE:
Technical system architecture, architectural layers, centralized design token system, XLSX ingestion, and client media architecture.

RESPONSIBILITIES:
- Document framework, runtime, and styling technology stack
- Define permanent XLSX Ingestion System architecture (SheetJS Community Edition 0.20.3)
- Define permanent Client Media Discovery and Demo Asset Isolation architecture
- Define separation between configuration, editorial content, reusable UI, and routes
- Document component hierarchy, design token system, and optional data guards
- Specify Master Template protection invariants

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/FIRST_PROMPT.md
- config/business.js
- config/clientAssets.js
- content/siteContent.js
- app/globals.css
- lib/client-data/index.js

NOTES:
- Documents the hardened architecture of website_master v1.4.
-->

# Current System Architecture — v1.4

## 1. Technology Stack
- **Framework:** Next.js 16.3.1 (App Router)
- **Runtime / UI Library:** React 19.2.8 / React DOM 19.2.8
- **Styling Engine:** Pure Vanilla CSS with Dynamic CSS Custom Properties (`app/globals.css`)
- **XLSX Ingestion Engine:** Pinned SheetJS Community Edition 0.20.3 (`vendor/xlsx-0.20.3.tgz`)
- **Media Asset Registry:** Centralized Manifest (`config/clientAssets.js` & `public/images/client/`)
- **Linting & Code Quality:** ESLint 9 with `eslint-config-next`
- **Module System:** ECMAScript Modules (ESM) with `"type": "module"`
- **Path Alias:** `@/*` mapped to root `./*` in `jsconfig.json`

---

## 2. Complementary Client Intake Architecture

Client intake processes two complementary authoritative input channels:

```text
┌───────────────────────────────┐     ┌───────────────────────────────┐
│     CLIENT FACTUAL DATA       │     │      CLIENT MEDIA ASSETS      │
│  CLIENT_REQUIREMENT_FORM.xlsx │     │     public/images/client/     │
└───────────────┬───────────────┘     └───────────────┬───────────────┘
                │                                     │
                ↓                                     ↓
┌───────────────────────────────┐     ┌───────────────────────────────┐
│ Master Factory SheetJS Parser │     │ Approved Client Media Ingest  │
│      (lib/client-data/)       │     │     (config/clientAssets.js)  │
└───────────────┬───────────────┘     └───────────────┬───────────────┘
                │                                     │
                ↓                                     ↓
┌───────────────────────────────┐     ┌───────────────────────────────┐
│     Normalized Client Data    │     │ Approved Client Media Manifest│
└───────────────┬───────────────┘     └───────────────┬───────────────┘
                │                                     │
                └──────────────────┬──────────────────┘
                                   ↓
                   ┌───────────────────────────────┐
                   │    docs/CLIENT_DATA_MAPPING   │
                   └───────────────┬───────────────┘
                                   ↓
                   ┌───────────────────────────────┐
                   │   config/business.js          │
                   │   content/siteContent.js      │
                   └───────────────┬───────────────┘
                                   ↓
                   ┌───────────────────────────────┐
                   │   Next.js Production Website  │
                   └───────────────────────────────┘
```

### Key Ingestion Invariants:
1. **Separation of Media and Facts:** Binary image assets are not forced into the Excel parser; approved media files in `public/images/client/` are authoritative for imagery.
2. **Deterministic Yes/No/Blank:** Blank is always `false`/disabled in factual controls.
3. **Master Template Demo Asset Isolation:** Demo room SVGs and placeholder graphics are isolated from client-facing routes.

---

## 3. Master Factory Architectural Layers
The project implements a strict, decoupled multi-layer architecture:

```text
┌─────────────────────────────────────────────────────────────┐
│                 Master Website Factory v1.4                 │
├──────────────────────────────┬──────────────────────────────┤
│  0. Client Ingestion Layer   │  lib/client-data/            │
│     - xlsxReader.js          │  - clientFormParser.js       │
│     - clientDataSchema.js    │  - index.js & CLI test       │
├──────────────────────────────┼──────────────────────────────┤
│  1. Media Manifest Layer     │  config/clientAssets.js      │
│     - Approved client logo   │  - Business/service photos   │
├──────────────────────────────┼──────────────────────────────┤
│  2. Configuration Layer      │  config/business.js          │
│     - Business identity      │  - Brand colors, logo path   │
│     - Contact, hours, city   │  - Navigation & header CTA   │
│     - Tagline, SEO desc      │  - WhatsApp default msg      │
├──────────────────────────────┼──────────────────────────────┤
│  3. Editorial Content Layer  │  content/siteContent.js      │
│     - Page headlines & copy  │  - Services & products       │
│     - Hero notes & CTAs      │  - Contact & map banners     │
│     - Gallery & testimonials │  - Footer labels & copy      │
├──────────────────────────────┼──────────────────────────────┤
│  4. Asset Layer              │  public/images/              │
│     - public/images/client/  │  - Approved client media     │
│     - Root SVGs (isolated)   │  - Demo fallbacks only       │
├──────────────────────────────┼──────────────────────────────┤
│  5. UI Primitives & Sections │  components/                 │
│     - ui/ (Button, Card)     │  - layout/ (Header, Footer)  │
│     - sections/ (Hero, etc.) │  - Client-agnostic renderers │
│     - Centralized Theme      │  - Safe null/empty returns   │
├──────────────────────────────┼──────────────────────────────┤
│  6. Route Composers          │  app/                        │
│     - layout.js (Root Shell) │  - /about, /services, etc.   │
│     - globals.css (Tokens)   │  - Static pre-rendering      │
│     - Dynamic Theme Inject   │  - Safe empty section states │
└──────────────────────────────┴──────────────────────────────┘
```

---

## 4. Component Hierarchy & Optional Data Guards
Components are organized into three distinct tiers with safe conditional rendering:

1. **`components/ui/` (Atomic Primitives):**
   - [`Button.js`](file:///D:/website_master/components/ui/Button.js) — Polymorphic button and link element supporting `primary`, `light`, and `text` variants.
   - [`Card.js`](file:///D:/website_master/components/ui/Card.js) — Semantic `<article>` container wrapper.

2. **`components/layout/` (Global Shell):**
   - [`Header.js`](file:///D:/website_master/components/layout/Header.js) — Global site header rendering approved client logo image (`objectFit: contain`), brand name text in `brandNameTextColor`, dynamic tagline, navigation, and configurable header CTA.
   - [`Footer.js`](file:///D:/website_master/components/layout/Footer.js) — Global footer with dynamic tagline, configurable exploration links, location tagline, and contact info.
   - [`PageIntro.js`](file:///D:/website_master/components/layout/PageIntro.js) — Standard inner-page hero banner.

3. **`components/sections/` (Modular Sections with Safe Guards):**
   - [`Hero.js`](file:///D:/website_master/components/sections/Hero.js) — Landing banner rendering configurable `heroCtas` and optional `heroNote`. Safely renders clean gradient background when `heroImage` is null.
   - [`AboutSection.js`](file:///D:/website_master/components/sections/AboutSection.js) — Story section with optional badge and heading toggle. Safely renders centered single-column layout (`.about-no-image`) when `image` is null.
   - [`ServicesSection.js`](file:///D:/website_master/components/sections/ServicesSection.js) — Numbered offerings list; returns `null` if services array is empty.
   - [`ProductCard.js`](file:///D:/website_master/components/sections/ProductCard.js) — Product card; conditionally renders category tag, image, and price.
   - [`Gallery.js`](file:///D:/website_master/components/sections/Gallery.js) — Multi-column portfolio; returns `null` if gallery array is empty.
   - [`Testimonials.js`](file:///D:/website_master/components/sections/Testimonials.js) — Blockquote review grid; returns `null` if testimonials array is empty.
   - [`ContactSection.js`](file:///D:/website_master/components/sections/ContactSection.js) — Direct WhatsApp & phone call band with configurable banner copy.
   - [`MapSection.js`](file:///D:/website_master/components/sections/MapSection.js) — Configurable map section; safely renders address fallback or returns `null` when map is absent.
   - [`SectionHeading.js`](file:///D:/website_master/components/sections/SectionHeading.js) — Section eyebrow and title primitive.
   - [`WhatsAppButton.js`](file:///D:/website_master/components/sections/WhatsAppButton.js) — Fixed bottom floating chat action.

---

## 5. Application Routes (`app/`)
All pages are server-rendered as static content (`○ Static` in Turbopack build):
- **`/` (`app/page.js`):** Home landing page.
- **`/about` (`app/about/page.js`):** About story page.
- **`/services` (`app/services/page.js`):** Services catalog page.
- **`/products` (`app/products/page.js`):** Products showcase page.
- **`/gallery` (`app/gallery/page.js`):** Portfolio gallery.
- **`/contact` (`app/contact/page.js`):** Contact details.