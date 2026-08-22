<!--
FILE: docs/FIRST_PROMPT.md

PURPOSE:
Permanent AI working contract and master engineering rules for the Master Website Factory.

RESPONSIBILITIES:
- Define AI working style, change control protocols, and beginner-friendly communication
- Define Master Factory separation principles and protected architecture constraints
- Enforce strict Brand Identity, Absolute No-Fabrication, and Demo Asset Isolation rules
- Mandate deterministic XLSX ingestion via Master Factory Reader and Client Form Parser
- Mandate authoritative Client Media Discovery (separating factual Excel from media assets)
- Define client website workflow authority and autonomous execution boundaries
- Define centralized business, content, theme, asset, and component rules
- Define file documentation, indexing, styling, and validation standards

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/ARCHITECTURE.md
- docs/CLIENT_WEBSITE_BUILD_PROMPT.md
- docs/CLIENT_DATA_MAPPING.md
- docs/MASTER_PROJECT_MEMORY.md
- docs/ROADMAP.md
- config/clientAssets.js
- lib/client-data/index.js

NOTES:
- Must be read before any AI session on this codebase.
- This document is the permanent AI working contract for website_master.
-->

# MASTER FIRST PROMPT & AI WORKING CONTRACT

## Project Root

`D:\website_master`

## Project Purpose

This project is a reusable, production-ready **Next.js Master Website Factory**.

The goal is **NOT** to build a single client website directly in this repository.

Instead, this project serves as a permanent Master Template from which separate client websites can be derived by configuring business data, editorial content, navigation, approved assets, and other supported client-specific values without altering the protected Master architecture.

---

# 1. Working Style & Communication

## 1.1 Beginner-Friendly Communication

The project owner is a beginner in coding.

Therefore:

- Explain important technical decisions in simple Hindi.
- Clearly explain what is being changed and why.
- Avoid unnecessary technical complexity.
- Do not assume that the project owner understands implementation details.
- When providing code changes, clearly identify the affected file.

## 1.2 One Logical Step at a Time

For normal development and maintenance work:

- Do not perform bulk unapproved modifications across unrelated modules.
- Work in one logical step at a time.
- Complete and validate the current step before proceeding to another unrelated step.

## 1.3 Explicit Change Control

Before any major implementation or architecture change, explain:

- **WHAT:** What will change.
- **WHY:** Why the change is necessary.
- **FILES:** Exactly which files will be affected.
- **RISK:** Potential side effects or risks.

For substantial file changes, prefer a complete clean file replacement over scattered fragments.

---

# 2. Master Factory Client-Data & Asset Ingestion Contract

## 2.1 Two Complementary Authoritative Inputs

```text
[1] CLIENT FACTUAL DATA
    CLIENT_REQUIREMENT_FORM.xlsx
            ↓
    Approved SheetJS 0.20.3 & lib/client-data/
            ↓
    Normalized Factual Data (Business, Hours, Contact, Pages, Features)

[2] CLIENT MEDIA ASSETS
    public/images/client/ (Approved Files: Logo, Photos)
            ↓
    config/clientAssets.js (Authoritative Manifest)

            ↓ (COMBINED VIA CENTRAL CONFIG)
config/business.js & content/siteContent.js
```

## 2.2 Client Media & Demo Asset Isolation Rules

1. **Separately Supplied Media:** If "Logo File / Location" in Excel is blank, but an approved client logo exists in `public/images/client/logo/`, that media file is authoritative. A blank Excel field does NOT mean "no logo exists".
2. **Demo Asset Isolation:** Master Template demo placeholder SVGs (`hero-room.svg`, `about-room.svg`, `product-*.svg`, `gallery-*.svg`, `logo-mark.svg`) must **NEVER** be presented as client business imagery.
3. **Reusable Component Consumption:** Reusable components must consume asset paths strictly through `config/business.js`, `config/clientAssets.js`, or `content/siteContent.js`. Zero hardcoded image paths in UI components.

---

# 3. Client Website Factory Autonomous Workflow

The Client Website Factory has a separate deterministic workflow defined by:

- `docs/CLIENT_WEBSITE_BUILD_PROMPT.md`
- `docs/CLIENT_DATA_MAPPING.md`
- `docs/trigger_prompt.md`

When a fresh client website workspace is started using the Master Website Factory trigger:

```text
Stage A — Data Extraction via Master Parser & Media Discovery
        ↓
Blocking Issue Check
        ↓
No Blocking Architecture Issue
        ↓ (AUTONOMOUS TRANSITION)
Stage B — Implementation & Validation
```