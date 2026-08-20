# MASTER FIRST PROMPT & AI WORKING CONTRACT

## Project Root
`D:\website_master`

## Project Purpose
This project is a reusable, production-ready **Next.js Master Website Template**.

The goal is **NOT** to build only a single client website. Instead, this project serves as a master template from which distinct client websites can be derived by updating business data, content, photography, branding, navigation, and configuration without rewriting core architecture.

---

## 1. Working Style & Communication
- **Beginner-Friendly Explanation:** The project owner is a beginner in coding. Explain all key decisions, file changes, and updates in simple Hindi.
- **One Logical Step at a Time:** Never perform bulk unapproved modifications across multiple modules at once.
- **Explicit Change Control:** Before any major implementation, explain:
  - **WHAT:** What will change.
  - **WHY:** Why it is necessary.
  - **FILES:** Exactly which files will be affected.
  - **RISK:** Potential side effects or risks.
- **Wait for Approval:** Do not proceed to subsequent implementation steps without user review.
- **Prefer Complete, Clean Files:** When editing a file with substantial changes, provide clean and maintainable code rather than scattered fragments.

---

## 2. Master Template Separation Principle
All client customizations must strictly adhere to this separation:

```
MASTER TEMPLATE ARCHITECTURE
         ↓
Client Requirements
         ↓
Business Configuration & Content Layer (config/ & content/)
         ↓
Client-Specific Website Instance
         ↓
Deployment
```

Client-specific details (business name, owner, phone, WhatsApp, email, address, working hours, social links, colors, logo, navigation links, services, products, gallery items, testimonials, and copy) **must reside in centralized configuration/content files**, never hard-coded inside reusable components or page routes.

### Brand Identity Rule

The Business Name provided in `CLIENT_REQUIREMENT_FORM.xlsx` must be used exactly as provided by the client as the official Business/Brand Name. Do not change its spelling, capitalization, spacing, punctuation, abbreviation, or wording. If a Business (Brand) Name Color is provided, use it where supported by the existing Master Template architecture.

---

## 3. File Documentation Standard
Every important source file created or substantially modified must include a concise and structured header at the top of the file:

```javascript
/*
 * FILE: components/layout/Header.js
 * PURPOSE:
 * Main reusable website header and navigation component.
 *
 * RESPONSIBILITIES:
 * - Render site branding
 * - Render primary navigation
 * - Handle mobile navigation state
 *
 * DEPENDENCIES:
 * - Business configuration
 * - Navigation configuration
 *
 * NOTES:
 * - Must remain reusable across client websites.
 * - Client-specific data must not be hard-coded here.
 */
```

---

## 4. Component Architecture Standards
Components must follow a clean three-tier separation:
- `components/ui/`: Atomic interface primitives (Button, Card, Badge, etc.).
- `components/layout/`: Global shell components (Header, Footer, PageIntro).
- `components/sections/`: Reusable page sections (Hero, AboutSection, ServicesSection, ProductCard, Gallery, Testimonials, ContactSection, MapSection, WhatsAppButton).

Avoid creating one-off or overly specific components when a generic configurable component can fulfill the requirement.

---

## 5. UI, Styling, and Asset Rules
- **Pure CSS Custom Properties:** The design system uses vanilla CSS variables (`globals.css`) for palettes (`--paper`, `--ink`, `--muted`, `--accent`, `--gold`, `--cream`, `--primary`, `--secondary`), typography, and spacing.
- **Responsive & Accessible:** Ensure semantic HTML, proper contrast, ARIA attributes, and smooth mobile responsiveness across all viewports.
- **Centralized Asset Management:** Organize static media predictably in `public/images/` and reference image paths through `config/` or `content/`.

---

## 6. Documentation Maintenance
Whenever an important file is created, modified, renamed, moved, or deleted:
1. Update [FILE_INDEX.md](file:///D:/website_master/docs/FILE_INDEX.md) in the same session.
2. Record any permanent architectural or design decisions in [MASTER_PROJECT_MEMORY.md](file:///D:/website_master/docs/MASTER_PROJECT_MEMORY.md).
3. Track progress and next phases in [ROADMAP.md](file:///D:/website_master/docs/ROADMAP.md).

---

## 7. Validation & Verification Rules
After any code change:
1. Run linting (`npm.cmd run lint`).
2. Run build verification (`npm.cmd run build`).
3. Verify affected page routes and UI responsiveness.
4. Resolve all errors and warnings before concluding the step.
