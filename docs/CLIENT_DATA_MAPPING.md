<!--
FILE: docs/CLIENT_DATA_MAPPING.md
PURPOSE:
Canonical factual and media mapping artifact specification and template for client website builds.

RESPONSIBILITIES:
- Define standardized Stage A mapping table structure
- Map XLSX fields and approved client media to target config/content keys
- Record validation diagnostics, missing data handling, and claim safety checks

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/CLIENT_REQUIREMENT_FORM.xlsx
- config/business.js
- config/clientAssets.js
- content/siteContent.js

NOTES:
- Generated during Stage A of the ai flow client website build.
-->

# CLIENT DATA MAPPING — FACTUAL SOURCE-OF-TRUTH ARTIFACT

## Client Project Information
- **Business Name:** ai flow
- **Business Category:** Accounting-First ERP Software
- **Business Type:** B2B Software / ERP Platform
- **Ingestion Status:** VALIDATED (Deterministic Parser & Client Media Discovery)

---

## 1. Primary Business Identity Mapping

| Field | Source Value (XLSX) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **Business Name** | `ai flow` | `config/business.js -> name` | Exact Identity Preserved |
| **Owner / Founder** | *(Not Provided)* | `config/business.js -> owner` | Omitted Safely |
| **Business Category** | `Accounting-First ERP Software` | `config/business.js -> tagline` | Mapped |
| **Business Type** | `B2B Software / ERP Platform` | System Routing Classification | Classified |
| **Description** | `ai flow is an accounting-first ERP platform designed to support business management, accounting workflows, document-based data entry, verification, inventory and operational workflows. The system is being developed with a focus on structured business data, evidence-driven processing, verification, approval and auditability.` | `config/business.js -> description` | Mapped Factual Copy |

---

## 2. Branding & Theme Configuration

| Field | Source Value (XLSX / Media) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **Primary Brand Color** | *(Fallback Theme: `#2563eb`)* | `config/business.js -> primaryColor` | Centralized Theme Token |
| **Secondary Brand Color** | *(Fallback Theme: `#0f172a`)* | `config/business.js -> secondaryColor` | Centralized Theme Token |
| **Brand Name Text Color** | *(Fallback Theme: `#0f172a`)* | `config/business.js -> brandNameTextColor` | Centralized Text Token |
| **Logo Asset** | `public/images/client/logo/LogoColorNoText.jpeg` | `config/clientAssets.js -> logo` | Approved Client Media |

> **IMPORTANT ASSET RULE:** In `CLIENT_REQUIREMENT_FORM.xlsx`, the "Logo File / Location" field is optional because the form explicitly allows the client to supply the logo file separately. A blank Excel field does NOT mean "no logo exists". Approved client logo file `public/images/client/logo/LogoColorNoText.jpeg` is authoritative.

---

## 3. Contact & Location Information

| Field | Source Value (XLSX) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **WhatsApp Number** | `9955889812` | `config/business.js -> whatsapp` | Active (`919955889812`) |
| **Phone Number** | `9955889812` | `config/business.js -> phone` | Active (`9955889812`) |
| **Email Address** | `aiflowerp@gmail.com` | `config/business.js -> email` | Active |
| **Working Hours** | *(Not Provided)* | `config/business.js -> workingHours` | Omitted Safely |
| **Google Maps URL** | *(Not Provided / Disabled)* | `config/business.js -> map.embedUrl` | Omitted Safely |

---

## 4. Page & Feature Controls (Deterministic Yes / No / Blank)

| Page / Feature | Form Setting | Effective State | Target Route / Component |
| :--- | :--- | :--- | :--- |
| **Services** | `Yes` | ENABLED | `/services` & ServicesSection |
| **Products** | `Yes` | ENABLED | `/products` & ProductPreview |
| **Gallery** | `No` | DISABLED | Excluded from Navigation & Home |
| **Testimonials** | `No` | DISABLED | Testimonials Section Omitted (Empty array) |
| **Contact Page** | `Yes` | ENABLED | `/contact` & Main Nav Link |
| **Google Map Feature** | `No` | DISABLED | MapSection Omitted Safely |
| **Contact Form** | `Yes` | ENABLED | Contact Section CTA & Direct Actions |
| **Social Media Links** | `No` | DISABLED | Social Links Omitted |

---

## 5. Client Media Manifest (`config/clientAssets.js`)

| Asset Category | Approved Client File | Target Destination |
| :--- | :--- | :--- |
| **Brand Logo** | `LogoColorNoText.jpeg` | `public/images/client/logo/LogoColorNoText.jpeg` |
| **Business Photos** | *(None Supplied)* | `public/images/client/business/` (Safe null/empty layout) |
| **Product Photos** | *(None Supplied)* | `public/images/client/products/` (Safe null/empty layout) |
| **Service Photos** | *(None Supplied)* | `public/images/client/services/` (Safe null/empty layout) |
| **Gallery Photos** | *(None Supplied)* | `public/images/client/gallery/` (Safe null/empty layout) |

---

## 6. Confirmed Claims & Capabilities (No-Fabrication Matrix)

| Claim / Capability | Source Evidence | Included in Copy? |
| :--- | :--- | :--- |
| **Accounting-First ERP Architecture** | Explicit in XLSX Claims | Yes |
| **Multi-Tenant ERP** | Explicit in XLSX Claims | Yes |
| **OCR-Assisted Document Workflows** | Explicit in XLSX Claims | Yes |
| **Buyer Verification** | Explicit in XLSX Claims | Yes |
| **Supplier Matching** | Explicit in XLSX Claims | Yes |
| **Product Matching** | Explicit in XLSX Claims | Yes |
| **Purchase Draft & Posting Workflows** | Explicit in XLSX Claims | Yes |
| **Lifting Challan OCR & Draft Creation**| Explicit in XLSX Claims | Yes |
| **Transit Stock Tracking** | Explicit in XLSX Claims | Yes |
| **Physical Stock Verification** | Explicit in XLSX Claims | Yes |
| **Inventory Balance** | Explicit in XLSX Claims | Yes |
| **Sales & Collection Workflows** | Explicit in XLSX Claims | Yes |
| **Financial-Year-Aware Reporting/Dashboard** | Explicit in XLSX Claims | Yes |
| **Evidence-Driven Processing** | Explicit in XLSX Claims | Yes |
| **Audit-Oriented Workflow Design** | Explicit in XLSX Claims | Yes |
| **GST / Payroll / CRM / AI Claims** | NOT in XLSX | **STRICTLY EXCLUDED (0% Fabrication)** |

---

## 7. Validation Diagnostics

- **Errors (0):**
  - *(None — Ingestion Passed Cleanly)*

- **Warnings (0):**
  - *(None — All required and configured fields validated)*
