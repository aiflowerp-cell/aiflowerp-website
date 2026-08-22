/*
 * FILE: lib/client-data/index.js
 * PURPOSE:
 * Public API facade for the Master Website Factory client-data ingestion system.
 *
 * RESPONSIBILITIES:
 * - Expose unified readClientRequirementForm(filePath) function
 * - Expose generateClientDataMappingReport(clientData, validation) helper
 * - Encapsulate SheetJS, low-level workbook reader, and parser internals
 *
 * DEPENDENCIES:
 * - @/lib/client-data/xlsxReader
 * - @/lib/client-data/clientFormParser
 * - @/lib/client-data/clientDataSchema
 *
 * NOTES:
 * - All external tools and AI agents consume client intake data through this module.
 */

import { readWorkbook } from "./xlsxReader.js";
import { parseClientForm } from "./clientFormParser.js";
import { validateClientData, createDefaultClientData } from "./clientDataSchema.js";

/**
 * Public function to read, parse, and validate a client requirement form XLSX file.
 * @param {string} filePath - Path to the CLIENT_REQUIREMENT_FORM.xlsx file
 * @returns {object} { success: boolean, data: object, validation: object, workbook: object }
 */
export function readClientRequirementForm(filePath) {
  try {
    const workbook = readWorkbook(filePath);
    const clientData = parseClientForm(workbook);
    const validation = validateClientData(clientData);

    return {
      success: validation.isValid,
      data: clientData,
      validation,
      workbook,
    };
  } catch (error) {
    return {
      success: false,
      data: createDefaultClientData(),
      validation: {
        isValid: false,
        errors: [error.message],
        warnings: [],
      },
      error: error.message,
    };
  }
}

/**
 * Generates structured Markdown text suitable for docs/CLIENT_DATA_MAPPING.md.
 * @param {object} data - Normalized client data object
 * @param {object} validation - Validation results object
 * @returns {string} Formatted Markdown mapping artifact
 */
export function generateClientDataMappingReport(data, validation = { isValid: true, errors: [], warnings: [] }) {
  const b = data.business || {};
  const c = data.contact || {};
  const br = data.brand || {};
  const p = data.pages || {};
  const f = data.features || {};
  const h = data.hours || {};

  return `# CLIENT DATA MAPPING — FACTUAL SOURCE-OF-TRUTH ARTIFACT

## Client Project Information
- **Business Name:** ${b.name || "*(Not Provided / Blank)*"}
- **Business Category:** ${b.category || "*(Not Provided)*"}
- **Business Type:** ${b.type || "*(Not Provided)*"}
- **Ingestion Status:** ${validation.isValid ? "VALIDATED (Deterministic Parser)" : "VALIDATION ISSUES"}

---

## 1. Primary Business Identity Mapping

| Field | Source Value (XLSX) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **Business Name** | ${b.name || "*(Blank)*"} | \`config/business.js -> name\` | ${b.name ? "Exact Identity" : "MISSING"} |
| **Owner / Founder** | ${b.owner || "*(Not Provided)*"} | \`config/business.js -> owner\` | Optional |
| **Business Category** | ${b.category || "*(Not Provided)*"} | \`config/business.js -> tagline\` | Classified |
| **Business Type** | ${b.type || "*(Not Provided)*"} | System Routing Classification | Classified |
| **Description** | ${b.description || "*(Not Provided)*"} | \`config/business.js -> description\` | Mapped |

---

## 2. Branding & Theme Configuration

| Field | Source Value (XLSX) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **Primary Brand Color** | ${br.primaryColor || "*(Default / Fixed Fallback)*"} | \`config/business.js -> primaryColor\` | ${br.primaryColor ? "Centralized Theme" : "Default"} |
| **Secondary Brand Color** | ${br.secondaryColor || "*(Default / Fixed Fallback)*"} | \`config/business.js -> secondaryColor\` | ${br.secondaryColor ? "Centralized Theme" : "Default"} |
| **Brand Name Text Color** | ${br.brandNameTextColor || "*(Default / Fixed Fallback)*"} | \`config/business.js -> brandNameTextColor\` | ${br.brandNameTextColor ? "Custom" : "Default"} |

---

## 3. Contact & Location Information

| Field | Source Value (XLSX) | Target File / Key | Status |
| :--- | :--- | :--- | :--- |
| **WhatsApp Number** | ${c.whatsapp || "*(Not Provided)*"} | \`config/business.js -> whatsapp\` | ${c.whatsapp ? "Active" : "Omitted"} |
| **Phone Number** | ${c.phone || "*(Not Provided)*"} | \`config/business.js -> phone\` | ${c.phone ? "Active" : "Omitted"} |
| **Email Address** | ${c.email || "*(Not Provided)*"} | \`config/business.js -> email\` | ${c.email ? "Active" : "Omitted"} |
| **Working Hours** | ${h.workingHoursString || "*(Not Provided)*"} | \`config/business.js -> workingHours\` | ${h.workingHoursString ? "Active" : "Omitted"} |
| **Google Maps URL** | ${data.location?.googleMapsUrl || "*(Not Provided)*"} | \`config/business.js -> map.embedUrl\` | ${data.location?.googleMapsUrl ? "Active" : "Omitted"} |

---

## 4. Page & Feature Controls (Deterministic Yes / No / Blank)

| Page / Feature | Form Setting | Effective State | Target Route / Component |
| :--- | :--- | :--- | :--- |
| **Services** | ${p.services ? "Yes" : "No / Blank"} | ${p.services ? "ENABLED" : "DISABLED"} | \`/services\` & ServicesSection |
| **Products** | ${p.products ? "Yes" : "No / Blank"} | ${p.products ? "ENABLED" : "DISABLED"} | \`/products\` & ProductPreview |
| **Gallery** | ${p.gallery ? "Yes" : "No / Blank"} | ${p.gallery ? "ENABLED" : "DISABLED"} | \`/gallery\` & GallerySection |
| **Testimonials** | ${p.testimonials ? "Yes" : "No / Blank"} | ${p.testimonials ? "ENABLED" : "DISABLED"} | Testimonials Section |
| **Contact Page** | ${p.contact ? "Yes" : "No / Blank"} | ${p.contact ? "ENABLED" : "DISABLED"} | \`/contact\` |
| **Google Map Feature** | ${f.googleMap ? "Yes" : "No / Blank"} | ${f.googleMap ? "ENABLED" : "DISABLED"} | MapSection |
| **Contact Form** | ${f.contactForm ? "Yes" : "No / Blank"} | ${f.contactForm ? "ENABLED" : "DISABLED"} | ContactForm |
| **Social Media Links** | ${f.socialLinks ? "Yes" : "No / Blank"} | ${f.socialLinks ? "ENABLED" : "DISABLED"} | Footer Social Links |

---

## 5. Validation Diagnostics

- **Errors (${validation.errors.length}):**
${validation.errors.length > 0 ? validation.errors.map((e) => `  - ❌ ${e}`).join("\n") : "  - *(None)*"}

- **Warnings (${validation.warnings.length}):**
${validation.warnings.length > 0 ? validation.warnings.map((w) => `  - ⚠️ ${w}`).join("\n") : "  - *(None)*"}
`;
}

export { validateClientData, createDefaultClientData };
