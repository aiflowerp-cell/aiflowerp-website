# Current System Architecture

## 1. Technology Stack
- **Framework:** Next.js 16.3.1 (App Router)
- **Library:** React 19.2.8 / React DOM 19.2.8
- **Styling:** Pure CSS with Custom Properties (`app/globals.css`)
- **Linting:** ESLint 9 with `eslint-config-next`
- **Module System:** ES Modules (ESM) with `@/*` root alias configured in `jsconfig.json`

---

## 2. Architectural Layers

```
┌─────────────────────────────────────────────────────────┐
│                    1. CONFIG LAYER                      │
│   config/business.js (Business details, colors, links)  │
└───────────────────────────┬─────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────┐
│                    2. CONTENT LAYER                     │
│   content/siteContent.js (Hero, About, Services, etc.)  │
└───────────────────────────┬─────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────┐
│                 3. UTILITY / HELPER LAYER               │
│   lib/site.js (whatsappUrl, telUrl)                     │
└───────────────────────────┬─────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────┐
│                  4. UI & COMPONENT LAYER                │
│   components/ui/       → Button, Card                   │
│   components/layout/   → Header, Footer, PageIntro      │
│   components/sections/ → Hero, About, Services,         │
│                          Gallery, Testimonials, Map     │
└───────────────────────────┬─────────────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────┐
│                5. APP ROUTING & SHELL LAYER             │
│   app/layout.js        → Root Layout, CSS theme inject  │
│   app/**/page.js       → Route Pages                    │
└─────────────────────────────────────────────────────────┘
```

---

## 3. Directory Breakdown & Responsibilities

### `config/`
- **Purpose:** Stores client identity and global operational configuration.
- **Key Files:**
  - `config/business.js`: Contains business name, short name, owner name, phone, WhatsApp number, email, physical address, working hours, logo path, primary and secondary brand colors, social links, Google Maps embed & directions URLs, and top-level navigation items.

### `content/`
- **Purpose:** Central repository for all presentation text and editorial copy.
- **Key Files:**
  - `content/siteContent.js`: Home hero copy, About story paragraphs, Services list array, Products array, Gallery items with categories, and Testimonials reviews.

### `components/`
- **`components/ui/`**: Small, reusable primitives (`Button.js`, `Card.js`).
- **`components/layout/`**: Global shell structure (`Header.js` with mobile menu state, `Footer.js`, `PageIntro.js`).
- **`components/sections/`**: Modular page sections (`Hero.js`, `AboutSection.js`, `ServicesSection.js`, `ProductCard.js`, `Gallery.js`, `Testimonials.js`, `ContactSection.js`, `MapSection.js`, `SectionHeading.js`, `WhatsAppButton.js`).

### `app/` (Next.js App Router)
- **`app/layout.js`**: Root layout wrapping all pages with `Header`, `<main>`, `Footer`, `WhatsAppButton`, and dynamic theme variables (`--primary`, `--secondary`) injected via inline style on `<body>`.
- **`app/page.js`**: Home landing page composing sections (Hero, About preview, Services preview, Products preview, Testimonials, Contact).
- **`app/about/page.js`**: Dedicated About page.
- **`app/services/page.js`**: Dedicated Services catalog page.
- **`app/products/page.js`**: Dedicated Products showcase page.
- **`app/gallery/page.js`**: Dedicated Portfolio/Gallery page.
- **`app/contact/page.js`**: Studio address, phone, WhatsApp action, and embedded Map.

### `lib/`
- **`lib/site.js`**: Reusable URL generator helpers for WhatsApp direct chat (`whatsappUrl`) and telephone dialer (`telUrl`).

### `public/`
- **`public/images/`**: SVG assets for hero banners, about room previews, product placeholders, and gallery items.

---

## 4. Styling & Theme Engine
- Styling is implemented centrally in `app/globals.css`.
- Uses CSS custom properties:
  - Color Tokens: `--paper`, `--ink`, `--muted`, `--line`, `--accent`, `--gold`, `--cream`.
  - Dynamic Client Tokens: `--primary` and `--secondary` configured in `config/business.js` and set directly on `body` in `app/layout.js`.
- Responsive media queries are configured at breakpoints `800px` (tablets/small screens) and `480px` (mobile phones).
