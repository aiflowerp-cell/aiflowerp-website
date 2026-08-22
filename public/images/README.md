<!--
FILE: public/images/README.md
PURPOSE:
Permanent directory architecture and guidelines for client media assets and demo asset isolation.

RESPONSIBILITIES:
- Define strict separation between Master Template demo assets and client-provided assets
- Document public/images/client/ subdirectory structure
- Document integration with config/clientAssets.js manifest

DEPENDENCIES:
- config/clientAssets.js
- config/business.js
- content/siteContent.js

NOTES:
- Client media files must be placed in public/images/client/ and registered in config/clientAssets.js.
-->

# Static Image Assets Architecture

## Directory Structure

```text
public/images/
├── client/                     # APPROVED CLIENT-PROVIDED ASSETS ONLY
│   ├── logo/                   # Client brand logo (e.g. LogoColorNoText.jpeg)
│   ├── business/               # Approved office, storefront, or team photography
│   ├── products/               # Approved client product images
│   ├── services/               # Approved client service/work images
│   └── gallery/                # Approved client portfolio images
│
├── README.md                   # Asset architecture documentation
└── (demo placeholder SVGs)     # Master Template fallback/demo assets (isolated from client content)
```

## Mandatory Client Asset Rules
1. **Separation of Concerns:** All client-provided files must reside in `public/images/client/` subdirectories.
2. **Asset Manifest:** Registered in `config/clientAssets.js` and referenced by `config/business.js` and `content/siteContent.js`.
3. **Demo Asset Isolation:** Master Template demo placeholder SVGs (`hero-room.svg`, `about-room.svg`, etc.) must **NEVER** be referenced as factual client imagery.
4. **Separately Supplied Assets:** If `CLIENT_REQUIREMENT_FORM.xlsx` has a blank "Logo File / Location" field, approved files provided separately in `public/images/client/logo/` are authoritative.
