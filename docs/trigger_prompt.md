<!--
FILE: docs/trigger_prompt.md
PURPOSE:
Standard, copy-paste ready AI build trigger prompt for initiating client website generation.

RESPONSIBILITIES:
- Provide standardized prompt text to trigger client website generation in fresh workspaces
- Enforce adherence to CLIENT_WEBSITE_BUILD_PROMPT.md, CLIENT_REQUIREMENT_FORM.xlsx, Master Ingestion System, and Client Media Discovery
- Specify autonomous Stage A -> Stage B workflow

DEPENDENCIES:
- docs/00_MASTER_INDEX.md
- docs/CLIENT_WEBSITE_BUILD_PROMPT.md
- docs/CLIENT_DATA_MAPPING.md
- docs/CLIENT_REQUIREMENT_FORM.xlsx
- config/clientAssets.js
- lib/client-data/index.js

NOTES:
- Reusable trigger prompt for all derived client website instances.
-->

# Master Website Factory — Client Website Build Trigger Prompt (v1.4)

यह फाइल नए क्लाइंट की वेबसाइट बनाने के लिए **Standard Trigger Prompt** है।

जब भी किसी नए क्लाइंट की वेबसाइट बनानी हो (जैसे `D:\website_aiflowerp`), तो नीचे दिए गए प्रॉम्प्ट को कॉपी करके AI एजेंट को दें।

---

## 📋 Standard Trigger Prompt (Copy & Paste Ready)

```text
Client website generation workflow शुरू करो।

1. RULES & OPERATIONAL MANUAL:
Master project documentation और docs/CLIENT_WEBSITE_BUILD_PROMPT.md को permanent workflow rules और operational manual के रूप में strictly follow करो।

2. PRIMARY FACTUAL SOURCE & DETERMINISTIC PARSER:
CLIENT_REQUIREMENT_FORM.xlsx को primary factual client source of truth मानो। Master Factory के approved SheetJS parser (npm run client-data:test) का उपयोग करके deterministic data extract करो। Excel manually guess मत करो।

3. SEPARATELY SUPPLIED CLIENT MEDIA & DEMO ISOLATION:
public/images/client/ में उपलब्ध approved client-provided media assets (जैसे client logo LogoColorNoText.jpeg) का निरीक्षण करो और config/clientAssets.js manifest बनाओ। यदि Excel में Logo File/Location खाली है लेकिन अलग से approved client logo file मौजूद है, तो उसे अधिकृत क्लाइंट लोगो मानो। Master Template के demo placeholder SVGs (hero-room.svg, about-room.svg आदि) को कभी client business imagery के रूप में प्रस्तुत मत करो।

4. CENTRALIZED BRAND THEME (MANDATORY):
CLIENT_REQUIREMENT_FORM.xlsx में दिए गए Brand Color को config/business.js के primaryColor में सेट करो। यह पूरे design system में centralized PRIMARY BRAND COLOR बनेगा। किसी demo orange, teal या brown palette को carry forward मत करो।

5. BRAND IDENTITY PRESERVATION:
CLIENT_REQUIREMENT_FORM.xlsx में दिए गए Business Name को EXACTLY use करो। उसकी spelling, capitalization, spacing, punctuation, abbreviation या wording में कोई बदलाव मत करो।

6. ABSOLUTE NO-FABRICATION RULE (CRITICAL):
Client source में जो तथ्य नहीं हैं, उन्हें कभी fabricate मत करो। Testimonials, customer names, prices, founding history, awards, addresses, contact details, map links, social links या unstated features (GST, Payroll, CRM, AI, etc.) को invent मत करो। Missing information के लिए Master Template के neutral/empty safe state का उपयोग करो।

7. CLIENT DATA MAPPING & AUTONOMOUS WORKFLOW:
Stage A में Master Parser और Media Discovery चलाकर docs/CLIENT_DATA_MAPPING.md तैयार करो। यदि कोई BLOCKING architecture issue नहीं है, तो बिना User Approval Gate के स्वतः Stage B (Implementation & Validation) शुरू करो।

8. CONFIGURATION & CONTENT FIRST:
Client-specific customization केवल approved configuration (config/business.js, config/clientAssets.js), content (content/siteContent.js) और approved asset layers (public/images/client/) के माध्यम से करो। Reusable components और pages को client-agnostic रखो।

9. MASTER PROTECTION & ESCALATION:
Master Template (D:\website_master) के architecture को client-specific requirement के लिए modify या redesign मत करो। केवल तभी STOP करो जब source unreadable हो या वास्तविक BLOCKING architectural escalation हो।

10. TARGET CLIENT INSTANCE VALIDATION:
इस client instance को तैयार करो और अंत में parser test (npm run client-data:test), lint (npm.cmd run lint), build (npm.cmd run build), asset audit, routes, contact links और visual validation पूरा करके 100% GREEN रिपोर्ट दो।
```
