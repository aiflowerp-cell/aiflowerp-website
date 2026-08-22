<!--
FILE: docs/CLIENT_WEBSITE_BUILD_PROMPT.md
PURPOSE:
Master Website Factory client website generation manual, 10-stage build workflow, and operational rules.

RESPONSIBILITIES:
- Define priority order of truth for client website generation (Factual Excel + Approved Media Assets)
- Enforce mandatory Centralized Client Brand Theme rules
- Enforce strict Brand Identity and Absolute No-Fabrication rules
- Specify deterministic XLSX extraction via Master Factory SheetJS 0.20.3 Ingestion System
- Specify deterministic Client Media Discovery and Master Demo Asset Isolation
- Define autonomous Stage A -> Stage B workflow (no user approval gate)
- Provide final validation checklist for client website completion

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/FIRST_PROMPT.md
- docs/MASTER_PROJECT_MEMORY.md
- docs/CLIENT_DATA_MAPPING.md
- docs/trigger_prompt.md
- docs/CLIENT_REQUIREMENT_FORM.xlsx
- config/clientAssets.js
- lib/client-data/index.js

NOTES:
- Permanent operational instruction manual for AI agents generating client websites.
-->

# CLIENT WEBSITE BUILD PROMPT — v1.4
## Master Website Factory — Autonomous Client Website Generation System

---

## 1. PURPOSE & MASTER FACTORY OBJECTIVE

This document is the **permanent AI-agent operational manual** for generating a client-specific website instance from the frozen `website_master` template.

`website_master` is **NOT** a one-off website for a single client. It is a **Reusable Master Website Factory** designed to produce separate client websites through controlled configuration, factual content population, centralized brand theming, and approved asset integration without altering the frozen Master Template architecture.

### The Master Factory Workflow:
```text
D:\website_master (Frozen Master Template)
        ↓ COPY + RENAME
New Client Website Instance Workspace
        ↓
docs/trigger_prompt.md
        ↓
[1] CLIENT_REQUIREMENT_FORM.xlsx (Factual Source of Truth)
[2] Approved Client Media in public/images/client/ (Authoritative Media Source)
        ↓
Master Factory Ingestion Engine (SheetJS 0.20.3 in vendor/xlsx-0.20.3.tgz)
        ↓
config/clientAssets.js (Approved Client Media Manifest)
        ↓
docs/CLIENT_DATA_MAPPING.md (Stage A Factual & Media Artifact)
        ↓
Autonomous Stage A → Stage B Transition
        ↓
config/business.js (Central Business Config, Brand Colors, Client Logo)
content/siteContent.js (Factual Editorial Content, Zero Demo Imagery)
public/images/client/ (Approved Brand Logo & Photography)
        ↓
Client Website Instance
        ↓
Validation Suite (npm run client-data:test + npm run lint + npm run build + asset audit)
```

---

## 2. MASTER TEMPLATE PROTECTION PRINCIPLE

1. **Master Repository Immobility:** During client website generation, `D:\website_master` must **NEVER** be modified. All work happens inside the fresh client copy workspace.
2. **Configuration-First Customization:** All client customizations must occur strictly through:
   - `config/business.js` (Business metadata, contact details, brand theme colors, approved logo path, navigation)
   - `config/clientAssets.js` (Authoritative registry of approved client media files)
   - `content/siteContent.js` (Editorial copy, headings, descriptions, service items, products, reviews)
   - `public/images/client/` (Client-provided logos and photography)
3. **Client-Agnostic Components:** Reusable components in `components/` and routes in `app/` must remain client-agnostic and consume data via props/imports.

---

## 3. PERMANENT CLIENT ASSET INGESTION & DEMO ISOLATION

Client factual data and client media assets are **separate authoritative inputs**:

```text
CLIENT FACTS:
CLIENT_REQUIREMENT_FORM.xlsx (Primary source for text, facts, contacts, numbers)

CLIENT MEDIA:
Approved separately supplied client assets in public/images/client/ (Primary source for images & logos)
```

### Key Asset Rules:
1. **Separately Supplied Assets Allowed:** In `CLIENT_REQUIREMENT_FORM.xlsx`, the "Logo File / Location" field may be blank because the client provided the logo file separately as an approved image. A blank field does **NOT** mean "no logo exists".
2. **Deterministic Client Media Manifest:** All approved client media must be registered in `config/clientAssets.js` under `public/images/client/logo/`, `business/`, `products/`, `services/`, or `gallery/`.
3. **Master Template Demo Asset Isolation:** Demo placeholder SVGs (`hero-room.svg`, `about-room.svg`, `product-*.svg`, `gallery-*.svg`, `logo-mark.svg`) must **NEVER** be presented as client business imagery.
4. **Missing Image Behavior:** If the client did not supply a hero or about photo, the website renders a clean, neutral theme layout without rendering demo room SVGs.
5. **No Image Invention:** Never search the web or generate random AI stock images to fill image slots without explicit client approval.

---

## 4. MANDATORY CENTRALIZED CLIENT BRAND THEME

When a client provides a Brand Color in `CLIENT_REQUIREMENT_FORM.xlsx`:
1. **Primary Brand Theme:** That color becomes the centralized **PRIMARY BRAND COLOR** (`config/business.js -> primaryColor`).
2. **Zero Demo Color Carry-Forward:** Demo orange (`#b85c38`), demo teal (`#173b3f`), and demo brown colors must be completely replaced by the client's theme tokens.
3. **Automatic System Recoloring:** The centralized design token system automatically themes:
   - Brand name and logo accents
   - Primary buttons (`.button-primary`)
   - Text action links and arrows (`.button-text`, `.service-arrow`)
   - Section eyebrows and numbered tags (`.eyebrow`, `.service-number`)
   - Navigation hover/active states
   - Card highlights, borders, and footer shell (`.site-footer`)
4. **Natural Color Harmony:** Primary brand color is applied to interactive, accent, and brand-facing elements. Body text, neutral canvases (`--paper`), and line dividers (`--line`) maintain readability.

---

## 5. PERMANENT APPROVED XLSX INGESTION SYSTEM

`CLIENT_REQUIREMENT_FORM.xlsx` is the **PRIMARY FACTUAL SOURCE OF TRUTH**.
All AI agents must extract data through the Master Factory's built-in parser:

1. **Approved Pinned Dependency:**
   - **SheetJS Community Edition 0.20.3** vendored locally at `vendor/xlsx-0.20.3.tgz`.
   - Referenced in `package.json` as `"xlsx": "file:vendor/xlsx-0.20.3.tgz"`.
   - **NO ALTERNATIVE LIBRARIES:** Never install or use `exceljs`, `read-excel-file`, `xlsx-populate`, or other spreadsheet packages.
2. **Deterministic Extraction API:**
   - Run CLI validation:
     ```bash
     npm run client-data:test -- "docs/CLIENT_REQUIREMENT_FORM.xlsx"
     ```
   - Or import `@/lib/client-data/index.js` (`readClientRequirementForm`).
3. **Zero Manual Interpretation / Guessing:** AI agents must not guess row offsets or extrapolate cell values. All extraction is handled by `clientFormParser.js`.
4. **Field Traceability:** Every extracted field maps directly to a verified response in the form.

---

## 6. ABSOLUTE NO-FABRICATION & CLAIM SAFETY RULE

AI must **NEVER** introduce capabilities, features, claims, or data not explicitly supported by the client form.

### What AI Must NEVER Invent:
- ❌ **Unstated Features:** If client form specifies "accounting, sales, inventory, transit stock", AI must NOT add GST, Payroll, CRM, AI, e-invoicing, or vendor management.
- ❌ **Customer Testimonials & Reviews:** Never invent customer quotes, reviewer names, or residential locations.
- ❌ **Pricing & Fees:** Never invent prices or discounts.
- ❌ **Awards & Certifications:** Never invent recognitions or guarantees.
- ❌ **Locations & Map Links:** Never invent physical addresses or fake Google Maps URLs.
- ❌ **Contact Information:** Never invent phone numbers, emails, or social handles.
- ❌ **Business History:** Never invent founding years or establishment claims.

---

## 7. AUTONOMOUS STAGE A → STAGE B EXECUTION WORKFLOW

Stage A is an **informational readiness phase**, NOT a blocking user approval gate:

```text
STAGE A: Inspection & Mapping
├── 1. Read Master Documentation
├── 2. Run deterministic XLSX parser: npm run client-data:test
├── 3. Discover Approved Client Media in public/images/client/
├── 4. Generate config/clientAssets.js manifest
├── 5. Generate docs/CLIENT_DATA_MAPPING.md
├── 6. Verify Claim Safety & Missing Data
└── 7. Verify Architecture Fit

IF NO BLOCKING ARCHITECTURAL ISSUE:
        ↓ (AUTOMATIC TRANSITION — DO NOT ASK FOR APPROVAL)
STAGE B: Implementation & Validation
├── 8. Update config/business.js (Identity, Contact, Brand Color, Logo, Nav)
├── 9. Update content/siteContent.js (Factual Copy, Services, Zero Demo SVGs)
├── 10. Audit to verify zero demo content & image leakage
├── 11. Run npm.cmd run lint (0 errors required)
├── 12. Run npm.cmd run build (Turbopack static pre-rendering required)
└── 13. Deliver Final Green Report with Live Routes & Diff
```

---

## 8. FINAL VALIDATION CHECKLIST

Before concluding any client build, verify:
- [ ] `npm run client-data:test` parsed client form cleanly.
- [ ] Approved client logo in `public/images/client/logo/` is mapped to `business.logo`.
- [ ] Business Name matches `CLIENT_REQUIREMENT_FORM.xlsx` exactly (zero spelling/casing changes).
- [ ] Primary Brand Color is applied centrally without leftover demo orange/teal.
- [ ] Demo SVGs (`hero-room.svg`, `about-room.svg`, etc.) are isolated and NOT rendered as client imagery.
- [ ] Zero fabricated features, claims, testimonials, or prices exist.
- [ ] `config/business.js` and `content/siteContent.js` contain 100% client-specific data.
- [ ] All unintended demo strings ("Sharma", "Jaipur", "1998", etc.) are completely removed.
- [ ] Unused sections (e.g. Testimonials, Map, Products) are safely hidden without broken UI.
- [ ] `npm.cmd run lint` returns 0 errors.
- [ ] `npm.cmd run build` pre-renders all active routes with exit code 0.
