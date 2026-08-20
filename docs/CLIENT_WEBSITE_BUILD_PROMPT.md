# CLIENT WEBSITE BUILD PROMPT — v1.0

## 1. PURPOSE

This prompt is the permanent AI-agent instruction for creating a
client-specific website from the frozen `website_master` template.

The AI agent must use:

1. The frozen `website_master` template
2. `CLIENT_REQUIREMENT_FORM.xlsx`
3. Client-provided logo and images
4. The rules defined in this document
5. Existing project documentation

The goal is to create a separate client website without damaging,
redesigning, or unnecessarily modifying the Master Template architecture.

---

# 2. MASTER TEMPLATE STATUS

The source project is:

`website_master`

Current status:

`MASTER TEMPLATE v1.0 — FROZEN`

The Master Template is reusable and client-agnostic.

The following principle is mandatory:

> Client customization must happen through configuration,
> content, and approved assets — not by redesigning the Master Template.

---

# 3. SOURCE OF TRUTH

The AI agent must treat the following sources in this priority order:

### Priority 1 — Master Template Architecture

Existing source code and frozen project documentation.

### Priority 2 — Client Requirement Form

`CLIENT_REQUIREMENT_FORM.xlsx`

This contains the client's business information, contact information,
location, services, products, branding preferences, website requirements,
and other client-provided information.

### Priority 3 — Client Assets

Client-provided:

- Logo
- Business photos
- Product photos
- Service photos
- Gallery photos
- Other approved visual assets

### Priority 4 — AI Interpretation

AI may improve, organize, or rewrite client information when necessary,
but must not invent important business facts.

---

### Brand Identity Preservation

The Business Name provided in CLIENT_REQUIREMENT_FORM.xlsx must be treated as the official Business/Brand Name.

Use the Business Name exactly as provided by the client. Do not change its spelling, capitalization, spacing, punctuation, abbreviation, or wording.

AI must not create, normalize, stylize, or suggest an alternative Business/Brand Name.

If a Business (Brand) Name Color is provided in the Client Requirement Form, use it for the official Business/Brand Name where supported by the existing Master Template architecture.

If the client writes "AI Suggest" for the Brand Name Color, AI may suggest a suitable color.

### Client Content Handling

Use client-provided information as the factual source.

AI may improve grammar, structure, clarity, and presentation of client-provided content for website use, but must not change the meaning or invent facts.

Business Name and other exact identity fields must follow their specific preservation rules.

# 4. MASTER TEMPLATE ARCHITECTURE

The existing architecture must be preserved.

```text
website_master
│
├── app/
│   ├── page.js
│   ├── about/page.js
│   ├── services/page.js
│   ├── products/page.js
│   ├── gallery/page.js
│   └── contact/page.js
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
│
├── config/
│   └── business.js
│
├── content/
│   └── siteContent.js
│
├── lib/
│   └── site.js
│
├── public/
│   └── images/
│
└── docs/