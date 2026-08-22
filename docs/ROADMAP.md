<!--
FILE: docs/ROADMAP.md
PURPOSE:
Project roadmap tracking development milestones, completed phases, and frozen baseline status.

RESPONSIBILITIES:
- Record development, stabilization, hardening, workflow, XLSX, asset isolation, and full demo restoration phases (Phases 1 to 10)
- Document the frozen baseline state of Master Website Factory v1.5
- Outline the roadmap for future template versions (v2.0)

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/MASTER_PROJECT_MEMORY.md

NOTES:
- Updated upon phase completion and baseline milestone freezes.
-->

# Master Template Roadmap

## Status: MASTER WEBSITE FACTORY v1.5 — FROZEN (Full Master Demo Baseline)

This document records the completed development, stabilization, workflow operationalization, theme centralization, permanent deterministic XLSX Ingestion System, Client Media Discovery & Demo Asset Isolation, and Full Master Demo Website Restoration of **website_master v1.5**.

---

## Phase Status Summary

| Phase | Description | Status |
| :--- | :--- | :--- |
| **Phase 1** | Initial Project Audit & Documentation System | **Completed** |
| **Phase 2** | Codebase Stabilization & Syntax Bug Fixes | **Completed** |
| **Phase 3** | Content Centralization & File Headers Standardization | **Completed** |
| **Phase 4** | Master Template Final Validation (100% Green Build) | **Completed** |
| **Phase 5** | Master Website Factory & 10-Stage Client Build Workflow | **Completed** |
| **Phase 6** | Controlled Architecture Hardening & Optional Data Guards (v1.1) | **Completed** |
| **Phase 7** | Final Architecture Hardening & Centralized Theming (v1.2) | **Completed** |
| **Phase 8** | Permanent XLSX Ingestion System & Pinned SheetJS (v1.3) | **Completed** |
| **Phase 9** | Client Media Ingestion & Demo Asset Isolation Architecture (v1.4) | **Completed** |
| **Phase 10**| Full Master Demo Website Restoration & Canonical Baseline (v1.5) | **Completed** |
| **Freeze** | **MASTER WEBSITE FACTORY v1.5 — FROZEN FULL MASTER DEMO BASELINE**| **FROZEN** |

---

## Completed Phases

### Phase 1: Initial Project Audit & Documentation System
- [x] Complete codebase audit across all routes, components, configs, and assets.
- [x] Identify build errors and hard-coded values.
- [x] Establish `docs/00_MASTER_INDEX.md`.
- [x] Establish `docs/FIRST_PROMPT.md` as the permanent AI working contract.
- [x] Establish `docs/ARCHITECTURE.md` documenting current technical stack and layers.
- [x] Establish `docs/FILE_INDEX.md` as the architectural navigation map.
- [x] Establish `docs/MASTER_PROJECT_MEMORY.md` recording invariant decisions.
- [x] Establish `docs/ROADMAP.md` tracking development phases.

---

### Phase 2: Codebase Stabilization & Syntax Bug Fixes
- [x] Fix syntax parsing error in [`components/sections/Testimonials.js`](file:///D:/website_master/components/sections/Testimonials.js).
- [x] Run `npm.cmd run lint` to verify all ESLint rules pass.
- [x] Run `npm.cmd run build` to confirm clean production Turbopack compilation.

---

### Phase 3: Content Centralization & Header Standardization
- [x] Move hard-coded strings from `app/services/page.js`, `app/products/page.js`, `app/gallery/page.js`, `app/contact/page.js`, and `app/page.js` into `content/siteContent.js`.
- [x] Add standardized file documentation headers at the top of all modified source files.

---

### Phase 4: Master Template Final Validation
- [x] Verify complete directory structure and separation of concerns (`config`, `content`, `components`, `app`, `lib`, `docs`).
- [x] Validate route compilation and static page pre-rendering across all 6 main routes.
- [x] Validate internal consistency of all documentation files.

---

### Phase 5: Master Website Factory & Workflow Operationalization
- [x] Define Master Website Factory end-to-end generation workflow.
- [x] Establish permanent 10-Stage Client Build Workflow in `docs/CLIENT_WEBSITE_BUILD_PROMPT.md`.
- [x] Establish strict No-Fabrication rules and Brand Identity preservation rules.
- [x] Establish Standard Trigger Prompt in `docs/trigger_prompt.md`.

---

### Phase 6: Controlled Architecture Hardening (v1.1)
- [x] Remove all remaining hard-coded demo strings from reusable components.
- [x] Centralize tagline, description, locationTagline, whatsappDefaultMessage, and headerCta in `config/business.js`.
- [x] Centralize heroCtas, heroNote, servicesSection, testimonialsSection, contactBanner, and mapSection in `content/siteContent.js`.
- [x] Add safe conditional rendering and null guards for optional data.

---

### Phase 7: Final Architecture Hardening & Centralized Theming (v1.2)
- [x] Eliminate all hardcoded demo color hexes (`#b85c38`, `#173b3f`, `#dcae77`, `#102e31`) from components and CSS classes.
- [x] Centralize Design Token Architecture in `app/globals.css` dynamically derived from `var(--primary)` and `var(--secondary)`.
- [x] Inject `--primary`, `--secondary`, and `--accent` dynamically in `app/layout.js` from `config/business.js`.

---

### Phase 8: Permanent XLSX Ingestion System (v1.3)
- [x] Pin and vendor **SheetJS Community Edition 0.20.3** locally in `vendor/xlsx-0.20.3.tgz`.
- [x] Implement low-level `lib/client-data/xlsxReader.js` workbook matrix reader.
- [x] Implement deterministic `lib/client-data/clientFormParser.js` with exact field matching.
- [x] Implement `lib/client-data/clientDataSchema.js` canonical schema and validation diagnostics.
- [x] Implement public API facade `lib/client-data/index.js` and mapping report generator.
- [x] Implement CLI test command `npm run client-data:test` via `scripts/test-client-data.js`.

---

### Phase 9: Client Media Ingestion & Demo Asset Isolation Architecture (v1.4)
- [x] Support separately supplied approved client media in `public/images/client/` when Excel logo field is blank.
- [x] Implement centralized media manifest `config/clientAssets.js`.
- [x] Isolate Master Template demo SVGs (`hero-room.svg`, `about-room.svg`, etc.) from factual client rendering.
- [x] Implement clean neutral visual fallbacks for Hero and AboutSection (`.about-no-image`) when client photos are absent.

---

### Phase 10: Full Master Demo Website Restoration (v1.5)
- [x] Restore canonical Master Demo identity in `config/business.js` (`Studio Master`, `#b85c38` / `#173b3f`, complete 6-link navigation).
- [x] Restore complete demo content in `content/siteContent.js` (Hero image, About story & badge, 4 Services, 4 Products, 6 Gallery projects, 3 Testimonials, Map & Studio details).
- [x] Establish canonical blank `docs/CLIENT_REQUIREMENT_FORM.xlsx` and separate filled test form `docs/CLIENT_REQUIREMENT_FORM_SHARMA_ELECTRICALS_FILLED.xlsx`.
- [x] Verify all 6 pages render full, rich demo UI out-of-the-box on localhost.

---

### Master Website Factory v1.5 — Frozen Full Master Demo Baseline
- [x] Master architecture hardened, client-agnostic, brand-theme centralized, XLSX ingestion automated, client media discovery enabled, demo assets isolated, complete demo content populated, and permanently frozen.
- [x] Ready for autonomous generation of any client website instance by all major AI coding agents.