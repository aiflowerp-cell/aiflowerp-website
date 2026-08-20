# Master Project Memory & Invariant Decisions

## Status: MASTER TEMPLATE v1.0 — FROZEN

This document records long-term architectural, design, and governance decisions for **website_master**. Future AI agents and developers must strictly respect these constraints.

---

## 1. Master Template Governance (Permanent Invariants)
- **Reusable Master Template:** `website_master` is the canonical, reusable Master Website Template.
- **Client Website Generation:** New client websites are to be derived from this template by modifying configuration and content layers, never by rewriting core architecture.
- **Business Data Separation:** All client-specific business identity, contact numbers, WhatsApp URLs, email, address, operating hours, brand colors, logo path, and map information belong strictly in `config/business.js`.
- **Content Data Separation:** All client-specific website copy, headings, descriptions, service lists, product catalogs, gallery items, and testimonials belong strictly in `content/siteContent.js`.
- **Client-Agnostic UI:** Reusable UI components (`components/ui/`, `components/layout/`, `components/sections/`) must remain strictly client-agnostic and consume data via props.
- **No Single-Client Divergence in Master:** The master template must never be modified to satisfy the one-off requirements of a single client.
- **Versioned Upgrades:** If a future improvement is beneficial for all derived client sites, it must be formally designed and evaluated as a new Master Template version (e.g. Master Template v2.0).

---

## 2. Technical Stack & Layout Invariants
- **Framework:** Next.js 16 (App Router) using standard ES modules.
- **Styling Architecture:** Pure CSS custom properties (`app/globals.css`). No heavy utility-first CSS frameworks (e.g. Tailwind, Bootstrap) are to be introduced unless explicitly requested by the project owner.
- **Dynamic Theme Injection:** Brand colors (`--primary`, `--secondary`) are injected dynamically in `app/layout.js` onto `<body>` from `config/business.js`.

---

## 3. Component Hierarchy Invariants
- **Three-Tier Component Separation:**
  - `components/ui/` — Atomic primitives (`Button`, `Card`).
  - `components/layout/` — Global shell elements (`Header`, `Footer`, `PageIntro`).
  - `components/sections/` — Modular, self-contained visual sections (`Hero`, `AboutSection`, `ServicesSection`, `ProductCard`, `Gallery`, `Testimonials`, `ContactSection`, `MapSection`, `WhatsAppButton`).
- **Composition over Inheritance:** Pages in `app/**/page.js` act solely as lightweight composers that pass structured data into section components.

---

## 4. Communication & Workflow Standards
- **Beginner-Friendly Explanations:** All communication with the project owner must include clear, simple Hindi explanations alongside technical summaries.
- **One Logical Step at a Time:** Every change must follow the cycle: Understand → Propose/Explain → Implement approved step only → Validate (lint + build) → Report → Await next instruction.
- **Header Documentation Standard:** Every important source file must maintain the standard file header comment format at the top of the file.
- **Index Maintenance:** Any file creation, modification, move, or deletion must be immediately reflected in `docs/FILE_INDEX.md`.
