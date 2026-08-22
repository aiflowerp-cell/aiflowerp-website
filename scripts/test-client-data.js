/*
 * FILE: scripts/test-client-data.js
 * PURPOSE:
 * CLI test runner and validation tool for the Master Website Factory XLSX ingestion system.
 *
 * RESPONSIBILITIES:
 * - Read and parse CLIENT_REQUIREMENT_FORM.xlsx
 * - Print structured summary of normalized fields
 * - Output validation diagnostics
 * - Exit with code 0 on success or code 1 on fatal error
 *
 * DEPENDENCIES:
 * - @/lib/client-data/index.js
 *
 * USAGE:
 * npm run client-data:test -- "path/to/form.xlsx"
 */

import { readClientRequirementForm, generateClientDataMappingReport } from "../lib/client-data/index.js";
import * as fs from "fs";
import * as path from "path";

// Extract target file from CLI argument or use default form
const args = process.argv.slice(2);
let targetFile = args[0];

if (!targetFile) {
  if (fs.existsSync("docs/CLIENT_REQUIREMENT_FORM.xlsx")) {
    targetFile = "docs/CLIENT_REQUIREMENT_FORM.xlsx";
  } else if (fs.existsSync("docs/CLIENT_REQUIREMENT_FORM_FINAL_v2.1.xlsx")) {
    targetFile = "docs/CLIENT_REQUIREMENT_FORM_FINAL_v2.1.xlsx";
  } else {
    targetFile = "docs/CLIENT_REQUIREMENT_FORM.xlsx";
  }
}

console.log("==================================================");
console.log("MASTER WEBSITE FACTORY — XLSX INGESTION TEST");
console.log("==================================================");
console.log(`Target Form: ${targetFile}`);

const result = readClientRequirementForm(targetFile);

if (!result.workbook) {
  console.error(`\n❌ FATAL ERROR: Failed to read workbook.`);
  console.error(result.error || "Unknown file read error");
  process.exit(1);
}

const { data, validation } = result;
const b = data.business;
const br = data.brand;
const c = data.contact;
const p = data.pages;
const f = data.features;
const h = data.hours;

console.log("\n--- 1. BUSINESS IDENTITY ---");
console.log(`  Business Name     : ${b.name || "(Blank / Not Provided)"}`);
console.log(`  Owner Name        : ${b.owner || "(Not Provided)"}`);
console.log(`  Business Category : ${b.category || "(Not Provided)"}`);
console.log(`  Business Type     : ${b.type || "(Not Provided)"}`);
console.log(`  Description       : ${b.description ? b.description.slice(0, 70) + "..." : "(Not Provided)"}`);

console.log("\n--- 2. BRAND COLOR CONFIGURATION ---");
console.log(`  Primary Brand Color   : ${br.primaryColor || "(Default Theme Fallback)"}`);
console.log(`  Secondary Brand Color : ${br.secondaryColor || "(Default Theme Fallback)"}`);
console.log(`  Brand Name Text Color : ${br.brandNameTextColor || "(Default Theme Fallback)"}`);

console.log("\n--- 3. CONTACT & LOCATION ---");
console.log(`  WhatsApp Number   : ${c.whatsapp || "(Not Provided)"}`);
console.log(`  Phone Number      : ${c.phone || "(Not Provided)"}`);
console.log(`  Email Address     : ${c.email || "(Not Provided)"}`);
console.log(`  Address           : ${c.address || "(Not Provided)"}`);
console.log(`  Working Hours     : ${h.workingHoursString || "(Not Provided)"}`);
console.log(`  Google Maps Link  : ${data.location.googleMapsUrl || "(Not Provided)"}`);

console.log("\n--- 4. PAGE CONTROLS (Deterministic Booleans) ---");
console.log(`  Services Page     : ${p.services ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Products Page     : ${p.products ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Gallery Page      : ${p.gallery ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Testimonials Sec  : ${p.testimonials ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Contact Page      : ${p.contact ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);

console.log("\n--- 5. FEATURE CONTROLS ---");
console.log(`  Google Map Embed  : ${f.googleMap ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Contact Form      : ${f.contactForm ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);
console.log(`  Social Links      : ${f.socialLinks ? "ENABLED (Yes)" : "DISABLED (No/Blank)"}`);

console.log("\n--- 6. VALIDATION DIAGNOSTICS ---");
console.log(`  Status   : ${validation.isValid ? "✅ VALID" : "❌ INVALID"}`);
console.log(`  Errors   : ${validation.errors.length}`);
validation.errors.forEach((e) => console.log(`    ❌ ${e}`));
console.log(`  Warnings : ${validation.warnings.length}`);
validation.warnings.forEach((w) => console.log(`    ⚠️  ${w}`));

console.log("\n==================================================");

// If an export markdown flag or second argument is passed, save mapping file
if (args[1] === "--write-mapping") {
  const mappingReport = generateClientDataMappingReport(data, validation);
  fs.writeFileSync("docs/CLIENT_DATA_MAPPING.md", mappingReport, "utf-8");
  console.log("Saved mapping report to docs/CLIENT_DATA_MAPPING.md");
}

if (!validation.isValid) {
  console.log("XLSX Ingestion Test: COMPLETED WITH VALIDATION ISSUES (Expected if form is blank template)");
} else {
  console.log("XLSX Ingestion Test: PASS (Clean)");
}

process.exit(0);
