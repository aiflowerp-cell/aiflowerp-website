<!--
FILE: docs/00_MASTER_INDEX.md
PURPOSE:
Central index, navigation portal, and architectural overview of the project documentation system.

RESPONSIBILITIES:
- Provide an overview of all core documentation files
- Display the visual documentation hierarchy tree
- Serve as the primary entry point for developers and AI agents

DEPENDENCIES:
- docs/FIRST_PROMPT.md
- docs/ARCHITECTURE.md
- docs/FILE_INDEX.md
- docs/MASTER_PROJECT_MEMORY.md
- docs/ROADMAP.md
- docs/CLIENT_DATA_MAPPING.md
- docs/CLIENT_WEBSITE_BUILD_PROMPT.md
- docs/trigger_prompt.md
- docs/CLIENT_REQUIREMENT_FORM.xlsx

NOTES:
- Maintained for Master Website Factory v1.4.
-->

# Master Project Documentation Index

Welcome to the **website_master** Master Website Factory documentation system.

This project is a **Reusable Next.js Master Website Factory v1.4** designed to generate production-ready client websites through centralized configuration, client content, navigation, deterministic XLSX ingestion, client media discovery, and approved assets without altering the protected Master architecture.

---

# Core Documentation Files

| Document | Description |
| :--- | :--- |
| `FIRST_PROMPT.md` | **Permanent AI Working Contract** — Master Factory working rules, engineering standards, change control, documentation discipline, and validation rules. |
| `ARCHITECTURE.md` | **Technical Architecture** — technology stack, architectural layers, centralized data flow, component hierarchy, routing, styling, design tokens, XLSX ingestion, and client media architecture. |
| `MASTER_PROJECT_MEMORY.md` | **Project Decisions & Invariants** — permanent architectural, workflow, theme, ingestion, media, and design decisions that must be preserved. |
| `FILE_INDEX.md` | **Repository Navigation Map** — important project files and their short purposes. |
| `ROADMAP.md` | **Project Roadmap** — current progress, completed work, frozen baseline, and future development. |
| `CLIENT_REQUIREMENT_FORM.xlsx` | **Client Requirement Form** — primary client intake source for factual business information, preferences, requirements, and approved content. |
| `CLIENT_DATA_MAPPING.md` | **Client Data Mapping Template** — standardized factual and media mapping artifact for traceable Stage A extraction. |
| `CLIENT_WEBSITE_BUILD_PROMPT.md` | **Client Website Build Manual** — permanent rules, media discovery, and autonomous workflow for generating client websites from the frozen Master Template. |
| `trigger_prompt.md` | **Standard Client Build Trigger** — ready-to-use prompt for starting a new client website generation workflow. |

---

# Documentation System Hierarchy

```text
docs/00_MASTER_INDEX.md
(Central Documentation Index)
        │
        ├── FIRST_PROMPT.md
        │   → Master Factory AI Working Contract
        │
        ├── ARCHITECTURE.md
        │   → Technical Architecture, Tokens, XLSX Ingestion & Media Layers
        │
        ├── MASTER_PROJECT_MEMORY.md
        │   → Permanent Project Decisions & Invariants
        │
        ├── FILE_INDEX.md
        │   → Repository Navigation Map
        │
        ├── ROADMAP.md
        │   → Project Progress & Milestone Freezes
        │
        ├── CLIENT_REQUIREMENT_FORM.xlsx
        │   → Primary Client Factual Source of Truth
        │
        ├── CLIENT_DATA_MAPPING.md
        │   → Standardized Factual & Media Mapping Specification
        │
        ├── CLIENT_WEBSITE_BUILD_PROMPT.md
        │   → Client Website Generation Rules & Autonomous Workflow
        │
        └── trigger_prompt.md
            → Standard Client Website Build Trigger
```