# Master Project Documentation Index

Welcome to the **website_master** documentation system.

This project is a reusable, production-ready Next.js master website template designed to generate client websites quickly by modifying configuration, content, and branding without altering core architecture.

---

## Core Documentation Files

| Document | Description |
| :--- | :--- |
| [FIRST_PROMPT.md](file:///D:/website_master/docs/FIRST_PROMPT.md) | **Permanent AI Working Contract** & master engineering rules. Must be read before any session. |
| [ARCHITECTURE.md](file:///D:/website_master/docs/ARCHITECTURE.md) | **Technical Architecture** — current layers, data flow, component hierarchy, and styling system. |
| [FILE_INDEX.md](file:///D:/website_master/docs/FILE_INDEX.md) | **Architectural Navigation Map** — path and short purpose of every file in the repository. |
| [MASTER_PROJECT_MEMORY.md](file:///D:/website_master/docs/MASTER_PROJECT_MEMORY.md) | **Project Decisions & Constraints** — permanent decisions that must never be reversed. |
| [ROADMAP.md](file:///D:/website_master/docs/ROADMAP.md) | **Project Roadmap** — current completion status and future implementation phases. |
| [CLIENT_WEBSITE_BUILD_PROMPT.md](CLIENT_WEBSITE_BUILD_PROMPT.md) | **Client Website Build Prompt** — AI agent के लिए client website बनाने का permanent workflow और customization rules. |

| [CLIENT_REQUIREMENT_FORM.xlsx](CLIENT_REQUIREMENT_FORM.xlsx) | **Client Requirement Form** — नए client से business information, services, products, branding, contact details और website requirements लेने का primary form. |

---

## Quick Reference Rules

1. **One Step at a Time:** Never perform multi-step or unapproved changes.
2. **Beginner-Friendly Communication:** Always explain key decisions and updates in simple Hindi.
3. **Configuration-First:** Never hard-code client business data inside components.
4. **Validation Required:** Always run lint and build verification before concluding any coding step.
5. **Master Template Frozen:** `website_master v1.0` is frozen. Client-specific requirements must not directly modify the Master Template architecture.

6. **Client Data Source:** `CLIENT_REQUIREMENT_FORM.xlsx` is the primary source for client business information and website requirements.

7. **AI Build Contract:** `CLIENT_WEBSITE_BUILD_PROMPT.md` defines the permanent workflow and rules for creating a client website from the Master Template.

8. **Configuration & Content Separation:** Business information belongs in `config/business.js`; website copy and client-facing content belong in `content/siteContent.js`.

9. **Client Assets:** Client-provided logo, photographs, and other approved assets must be used where appropriate.

10. **No Fabrication:** AI must not invent client facts, prices, testimonials, business history, contact information, or other important claims.

11. **Demo Content Audit:** Before completing a client website, all unintended Master Template demo content must be identified and removed.

12. **Validation:** Every client website must pass lint, build, route, contact-link, and visual validation before being considered ready.

13. **Architecture Escalation:** If a client requirement cannot be fulfilled using existing configuration, content, and approved assets, stop and report that a Master Template architecture change may be required.

14. **Version Discipline:** Any reusable architectural improvement must be evaluated as a future Master Template version rather than silently changing the frozen template.
00_MASTER_INDEX.md
        │
        ├── FIRST_PROMPT.md
        │      ↓
        │   AI के permanent working rules
        │
        ├── ARCHITECTURE.md
        │      ↓
        │   Website कैसे बनी है
        │
        ├── MASTER_PROJECT_MEMORY.md
        │      ↓
        │   Permanent decisions
        │
        ├── FILE_INDEX.md
        │      ↓
        │   कौन सी file कहाँ है
        │
        ├── ROADMAP.md
        │      ↓
        │   Project कहाँ तक पहुँचा
        │
        ├── CLIENT_REQUIREMENT_FORM.xlsx
        │      ↓
        │   Client से जानकारी लेना
        │
        └── CLIENT_WEBSITE_BUILD_PROMPT.md
               ↓
            AI को बताना
            client website कैसे बनानी है