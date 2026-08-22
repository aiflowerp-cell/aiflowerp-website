<!--
FILE: docs/FILE_INDEX.md
PURPOSE:
Architectural navigation map listing the path and short purpose of every file in the repository.

RESPONSIBILITIES:
- Maintain an accurate inventory of documentation, route, component, config, ingestion, and asset files
- Guide AI agents and developers to appropriate file locations

DEPENDENCIES:
- docs/00_MASTER_INDEX.md

NOTES:
- Maintained for Master Website Factory v1.4.
-->

# Repository File Index

Architectural navigation map listing the important files in the `website_master` Master Website Factory and their short purposes.

---

# 1. Documentation

## `docs/`

- `docs/00_MASTER_INDEX.md` — Central documentation index and quick reference.
- `docs/FIRST_PROMPT.md` — Permanent AI working contract and Master Factory engineering rules.
- `docs/ARCHITECTURE.md` — Technical architecture, system layers, data flow, components, routing, design tokens, styling, XLSX ingestion, and client media architecture.
- `docs/FILE_INDEX.md` — Repository navigation map and file purposes.
- `docs/MASTER_PROJECT_MEMORY.md` — Permanent project decisions, constraints, theme invariants, ingestion invariants, and media invariants.
- `docs/ROADMAP.md` — Project development status, completed phases, frozen baseline, and future versions.
- `docs/CLIENT_REQUIREMENT_FORM.xlsx` — Primary client requirement and factual intake form.
- `docs/CLIENT_DATA_MAPPING.md` — Standardized factual and media mapping specification and template for client builds.
- `docs/CLIENT_WEBSITE_BUILD_PROMPT.md` — Permanent client website generation manual, brand theming rules, parser usage, media discovery, and autonomous workflow.
- `docs/trigger_prompt.md` — Standard trigger prompt for starting a client website generation workflow.

---

# 2. Project-Level Agent & Overview Files

- `AGENTS.md` — Next.js environment and agent-specific project rules.
- `CLAUDE.md` — Agent prompt pointer/reference to `AGENTS.md`.
- `README.md` — General project overview and usage information.

---

# 3. Application Routes & Styling

## `app/`

- `app/layout.js` — Global root layout containing the application shell, dynamic theme variables, Header, Footer, and WhatsApp button.
- `app/globals.css` — Global stylesheet, design tokens, centralized theme variables, and responsive styling.
- `app/page.js` — Home landing page with conditional product preview.
- `app/page.module.css` — Page-specific CSS module where applicable.
- `app/about/page.js` — About page with duplicate heading suppression.
- `app/about/page.module.css` — About page specific CSS module.
- `app/services/page.js` — Services catalog page.
- `app/products/page.js` — Products showcase page with safe empty state.
- `app/gallery/page.js` — Gallery showcase page with safe empty state.
- `app/contact/page.js` — Contact page with optional contact details and map safety.
- `app/favicon.ico` — Browser favicon.

---

# 4. Layout Components

## `components/layout/`

- `components/layout/Header.js` — Global responsive navigation header with approved client logo image, dynamic tagline, brand text coloring, and configurable CTA.
- `components/layout/Footer.js` — Global footer with dynamic tagline, configurable links, and location badge.
- `components/layout/PageIntro.js` — Reusable inner-page introduction/banner component.

---

# 5. Reusable Section Components

## `components/sections/`

- `components/sections/Hero.js` — Main landing hero section with configurable hero CTAs and clean gradient fallback when no photo is provided.
- `components/sections/AboutSection.js` — Reusable About story section with optional badge and clean single-column fallback (`.about-no-image`) when no photo is provided.
- `components/sections/ServicesSection.js` — Reusable services listing section with empty guard.
- `components/sections/ProductCard.js` — Reusable product card with safe optional price/category tags.
- `components/sections/Gallery.js` — Reusable image gallery grid with empty guard.
- `components/sections/Testimonials.js` — Reusable customer testimonial section with empty guard.
- `components/sections/ContactSection.js` — Reusable contact and WhatsApp action section with configurable copy.
- `components/sections/MapSection.js` — Reusable map and location section with iframe safety and fallback.
- `components/sections/SectionHeading.js` — Reusable section heading component.
- `components/sections/WhatsAppButton.js` — Floating WhatsApp contact button.

---

# 6. UI Components

## `components/ui/`

- `components/ui/Button.js` — Reusable button/link component with supported variants.
- `components/ui/Card.js` — Reusable card/container primitive.

---

# 7. Configuration, Content & Utilities

## `config/`

- `config/business.js` — Centralized business identity, contact details, brand theme colors, approved logo path, navigation, and global configuration.
- `config/clientAssets.js` — Centralized manifest registering approved client media assets (logo, business, product, service, and gallery photography).

## `content/`

- `content/siteContent.js` — Centralized client-facing website content such as hero, About, services, products, gallery, testimonials, and section copy.

## `lib/`

- `lib/site.js` — Reusable helper utilities for WhatsApp and telephone URL generation with neutral fallback.

---

# 8. Permanent Client-Data Ingestion System

## `lib/client-data/`

- `lib/client-data/xlsxReader.js` — Low-level XLSX reader using approved SheetJS dependency.
- `lib/client-data/clientFormParser.js` — Deterministic client requirement form parser with exact field matching.
- `lib/client-data/clientDataSchema.js` — Canonical Client Data Schema definition and validation diagnostics.
- `lib/client-data/index.js` — Public unified client-data API and mapping generator.

## `scripts/`

- `scripts/test-client-data.js` — CLI test runner and validation command for XLSX forms (`npm run client-data:test`).

## `vendor/`

- `vendor/xlsx-0.20.3.tgz` — Vendored, pinned SheetJS Community Edition 0.20.3 tarball.

---

# 9. Public Assets

## `public/`

### `public/images/`

- `public/images/README.md` — Asset directory architecture and guidelines.
- `public/images/client/` — Directory reserved strictly for approved client-provided media.
- `public/images/client/logo/LogoColorNoText.jpeg` — Approved client brand logo.
- `public/images/client/business/` — Approved client business photography directory.
- `public/images/client/products/` — Approved client product photography directory.
- `public/images/client/services/` — Approved client service photography directory.
- `public/images/client/gallery/` — Approved client gallery photography directory.
- `public/images/logo-mark.svg` — Master Template demo logo mark.
- `public/images/hero-room.svg` — Master Template demo hero drawing (isolated).
- `public/images/about-room.svg` — Master Template demo About drawing (isolated).
- `public/images/product-linen.svg` — Product demo/placeholder image (isolated).
- `public/images/product-cushion.svg` — Product demo/placeholder image (isolated).
- `public/images/product-rug.svg` — Product demo/placeholder image (isolated).
- `public/images/product-chair.svg` — Product demo/placeholder image (isolated).
- `public/images/gallery-01.svg` — Gallery demo/placeholder image (isolated).
- `public/images/gallery-02.svg` — Gallery demo/placeholder image (isolated).
- `public/images/gallery-03.svg` — Gallery demo/placeholder image (isolated).
- `public/images/gallery-04.svg` — Gallery demo/placeholder image (isolated).
- `public/images/gallery-05.svg` — Gallery demo/placeholder image (isolated).
- `public/images/gallery-06.svg` — Gallery demo/placeholder image (isolated).

---

# 10. Build & Environment Configuration

- `package.json` — Project metadata, dependencies (with pinned SheetJS), scripts, and `"type": "module"`.
- `package-lock.json` — Locked dependency tree.
- `next.config.mjs` — Next.js configuration.
- `jsconfig.json` — JavaScript path alias configuration, including `@/*`.
- `eslint.config.mjs` — ESLint configuration.

---

# 11. File Index Maintenance Rule

Whenever an important source, configuration, documentation, workflow, asset, API, or architecture file is created, modified, renamed, moved, or deleted, update `docs/FILE_INDEX.md` in the same session.