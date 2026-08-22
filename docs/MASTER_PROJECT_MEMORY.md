<!--
FILE: docs/MASTER_PROJECT_MEMORY.md
PURPOSE:
Permanent repository memory recording non-negotiable architectural, governance, theme, ingestion, media, and workflow invariants.

RESPONSIBILITIES:
- Document permanent project invariants that must never be reversed
- Enforce Master Template baseline protection against single-client divergence
- Record Centralized Brand Theming and No-Fabrication invariants
- Record Pinned SheetJS 0.20.3 Ingestion System and Deterministic Parsing Invariants
- Record Client Media Discovery and Demo Asset Isolation Invariants
- Record Autonomous Stage A -> Stage B workflow invariants

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/FIRST_PROMPT.md
- config/clientAssets.js
- lib/client-data/index.js

NOTES:
- Immutable governance baseline for website_master v1.4.
-->

# Master Project Memory & Invariant Decisions

## Status: MASTER WEBSITE FACTORY v1.4 — FROZEN (Enterprise Factory Baseline)

This document records long-term architectural, design, governance, theming, ingestion, media, and operational decisions for **website_master**. Future AI agents and developers must strictly respect these constraints.

---

## 1. Master Website Factory Governance (Permanent Invariants)
- **Reusable Master Factory:** `website_master` is the canonical, reusable Master Website Factory. New client websites are derived from this template via fresh workspace copies, never by developing directly inside the master.
- **Master Template Protection:** The master template must **NEVER** be modified, refactored, or redesigned to accommodate the one-off requirements of a single client.
- **Client Data Separation:**
  - All client-specific business identity, contact numbers, WhatsApp URLs, email, address, operating hours, brand theme colors, logo path, tagline, location tagline, and map information belong strictly in `config/business.js`.
  - All approved client media assets belong in `public/images/client/` and are registered in `config/clientAssets.js`.
  - All client-specific website copy, headings, descriptions, hero CTAs, service lists, product catalogs, gallery items, testimonials, contact banners, and footer copy belong strictly in `content/siteContent.js`.
- **Client-Agnostic UI:** Reusable UI components (`components/ui/`, `components/layout/`, `components/sections/`) and routes (`app/`) must remain strictly client-agnostic and consume data via props or imports.
- **Safe Optional Data Handling:** Reusable components must safely guard optional data (e.g. returning null for empty testimonials, omitting map iframe when embedUrl is absent, omitting badges when foundedYear is absent, omitting demo images when client photography is absent).

---

## 2. Permanent Client Asset Ingestion & Demo Isolation Invariants (v1.4 Mandatory)
- **Separate Authoritative Inputs:** Client factual data and client media assets are separate authoritative inputs. Excel (`CLIENT_REQUIREMENT_FORM.xlsx`) is authoritative for client facts; explicitly supplied and approved client files in `public/images/client/` are authoritative for client media.
- **Separately Supplied Assets Supported:** A blank "Logo File / Location" field in Excel does **NOT** mean "no logo exists". If the client provides an approved logo file separately (e.g. `LogoColorNoText.jpeg`), it is mapped via `config/clientAssets.js` to `config/business.js -> logo`.
- **Demo Asset Isolation:** Master Template demo placeholder SVGs (`hero-room.svg`, `about-room.svg`, `product-*.svg`, `gallery-*.svg`, `logo-mark.svg`) must **NEVER** be presented as client business imagery.
- **Logo vs Brand Text:** The logo image and the Business Name text are distinct concepts. The header displays the approved logo image and the exact Business Name string in the designated Brand Name Text Color.

---

## 3. Permanent XLSX Ingestion System Invariants
- **Approved Pinned Dependency:** Master Website Factory uses **SheetJS Community Edition 0.20.3**, pinned and vendored locally at `vendor/xlsx-0.20.3.tgz`.
- **No Alternative XLSX Libraries:** AI agents and developers must **NEVER** install or use `exceljs`, `read-excel-file`, `xlsx-populate`, or any alternative spreadsheet libraries.
- **Deterministic Parser Module:** All AI agents must process `CLIENT_REQUIREMENT_FORM.xlsx` through:
  - `lib/client-data/xlsxReader.js`
  - `lib/client-data/clientFormParser.js`
  - `lib/client-data/clientDataSchema.js`
  - `lib/client-data/index.js` (`readClientRequirementForm`)
- **No Manual Interpretation:** AI agents must not guess row offsets, guess column numbers, or invent cell values.
- **CLI Verification Standard:** Every client build starts with `npm run client-data:test`.

---

## 4. Centralized Client Brand Theme Invariants
- **Primary Brand Color Centralization:** When a client provides a Brand Color in `CLIENT_REQUIREMENT_FORM.xlsx`, that color must become the centralized `PRIMARY BRAND COLOR` (`config/business.js -> primaryColor`).
- **Zero Demo Color Carry-Forward:** Demo orange (`#b85c38`), demo teal (`#173b3f`), and demo brown palettes must NEVER be carried forward into client instances.
- **System-Wide Design Token Recolor:** Centralized CSS variables apply the primary brand color to primary buttons, text action links, section eyebrows, numbers, and navigation hover states automatically.

---

## 5. Brand Identity & No-Fabrication Invariants
- **Business Name Preservation:** The Business Name provided in `CLIENT_REQUIREMENT_FORM.xlsx` is the official Business/Brand Name and must be used **exactly** as provided by the client. Its spelling, capitalization, spacing, punctuation, abbreviation, and wording must not be changed, normalized, stylized, or replaced.
- **Absolute No-Fabrication Rule:** AI must never invent facts, testimonials, client reviews, customer names, prices, founding history, awards, locations, contact numbers, or unstated features (GST, Payroll, CRM, AI).

---

## 6. Autonomous Stage A → Stage B Workflow
- **Mandatory Mapping Artifact:** Stage A produces `docs/CLIENT_DATA_MAPPING.md` before implementation.
- **Autonomous Transition:** Stage A is an informational readiness phase. If no BLOCKING architectural issue exists, AI automatically transitions to Stage B (Implementation & Validation) without blocking for user approval gates.