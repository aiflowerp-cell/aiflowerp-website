/*
 * FILE: lib/client-data/clientFormParser.js
 * PURPOSE:
 * Deterministic parser converting raw XLSX workbook sheets into canonical client data.
 *
 * RESPONSIBILITIES:
 * - Match form field labels against CLIENT_REQUIREMENT_FORM.xlsx structure
 * - Preserve exact Business Name, casing, punctuation, and brand color values
 * - Enforce strict Yes / No / Blank boolean evaluation (Blank is always false)
 * - Map hours, contact channels, social links, and optional section toggles
 * - Prevent data fabrication or category-based assumptions
 *
 * DEPENDENCIES:
 * - @/lib/client-data/clientDataSchema
 *
 * NOTES:
 * - Deterministic, agent-independent client intake parser.
 */

import { createDefaultClientData } from "./clientDataSchema.js";

/**
 * Deterministically parses a Yes/No/Blank response.
 * @param {any} val - Raw cell value
 * @returns {boolean} True if explicit Yes, False otherwise
 */
function parseYesNo(val) {
  if (val === null || val === undefined) return false;
  if (typeof val === "boolean") return val;
  const str = String(val).trim().toLowerCase();
  return str === "yes" || str === "y" || str === "true" || str === "1" || str === "हाँ" || str === "हा";
}

/**
 * Deterministically parses an optional Yes/No/Blank response with tri-state support.
 * @param {any} val - Raw cell value
 * @returns {boolean|null} True for Yes, False for No, Null for blank
 */
function parseTriState(val) {
  if (val === null || val === undefined) return null;
  const str = String(val).trim().toLowerCase();
  if (!str) return null;
  if (str === "yes" || str === "y" || str === "true" || str === "1" || str === "हाँ" || str === "हा") return true;
  if (str === "no" || str === "n" || str === "false" || str === "0" || str === "नहीं") return false;
  return null;
}

/**
 * Cleans string value, returning null if empty or non-existent.
 * @param {any} val - Raw cell value
 * @returns {string|null} Clean string or null
 */
function cleanString(val) {
  if (val === null || val === undefined) return null;
  const str = String(val).trim();
  return str.length > 0 ? str : null;
}

/**
 * Normalizes field label for fuzzy/trimmed matching.
 * @param {string} label - Raw field label
 * @returns {string} Normalized label key
 */
function normalizeLabel(label) {
  if (!label) return "";
  return String(label)
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ");
}

/**
 * Parses raw workbook rows into canonical client data structure.
 * @param {object} workbook - Structured workbook from xlsxReader
 * @returns {object} Canonical normalized client data object
 */
export function parseClientForm(workbook) {
  const data = createDefaultClientData();

  if (!workbook || !workbook.sheets) {
    throw new Error("Parser Error: Invalid or empty workbook provided.");
  }

  // Find the primary client requirement form sheet
  const formSheetName = workbook.sheetNames.find((name) =>
    /client\s*requirement/i.test(name) || /form/i.test(name)
  ) || workbook.sheetNames[0];

  const sheet = workbook.sheets[formSheetName];
  if (!sheet || !sheet.rows) {
    throw new Error(`Parser Error: Sheet '${formSheetName}' has no data rows.`);
  }

  const rows = sheet.rows;
  let headerRowIndex = -1;
  let labelCol = 1; // Default Column B
  let responseCol = 3; // Default Column D

  // Detect header row containing 'Information Needed' or 'Section'
  for (let i = 0; i < Math.min(10, rows.length); i++) {
    const row = rows[i] || [];
    const rowStr = row.map((c) => String(c || "").toLowerCase()).join(" ");
    if (rowStr.includes("information needed") || (rowStr.includes("section") && rowStr.includes("response"))) {
      headerRowIndex = i;
      // Identify column indices from header
      row.forEach((cell, colIdx) => {
        const c = String(cell || "").toLowerCase();
        if (c.includes("information needed") || c.includes("field")) labelCol = colIdx;
        if (c.includes("your response") || c.includes("response") || c.includes("client response")) responseCol = colIdx;
      });
      break;
    }
  }

  const startRow = headerRowIndex >= 0 ? headerRowIndex + 1 : 0;

  for (let i = startRow; i < rows.length; i++) {
    const row = rows[i] || [];
    const sectionName = cleanString(row[0]);
    const fieldLabel = cleanString(row[labelCol]);
    const responseValue = cleanString(row[responseCol]);

    // Handle section-only rows with response (e.g. Additional Requirements)
    if (!fieldLabel && sectionName && responseValue) {
      const normSection = normalizeLabel(sectionName);
      if (normSection.includes("additional requirement") || normSection.includes("special instruction")) {
        data.additionalRequirements = responseValue;
        data.rawResponses["Additional Requirements"] = responseValue;
      }
    }

    if (!fieldLabel) continue;

    const normKey = normalizeLabel(fieldLabel);
    data.rawResponses[fieldLabel] = responseValue;

    // Field Matching Logic against CLIENT_REQUIREMENT_FORM.xlsx
    if (normKey === "business name") {
      data.business.name = responseValue; // Exact string preserved
    } else if (normKey === "owner name" || normKey === "owner") {
      data.business.owner = responseValue;
    } else if (normKey === "business category") {
      data.business.category = responseValue;
    } else if (normKey === "business type") {
      data.business.type = responseValue;
    } else if (normKey === "basic business description" || normKey === "business description" || normKey === "description") {
      data.business.description = responseValue;
    } else if (normKey.includes("mobile number")) {
      data.contact.phone = responseValue;
    } else if (normKey === "whatsapp number") {
      data.contact.whatsapp = responseValue;
    } else if (normKey.includes("whatsapp same as mobile")) {
      data.contact.whatsappSameAsMobile = parseTriState(responseValue);
    } else if (normKey === "email address" || normKey === "email") {
      data.contact.email = responseValue;
    } else if (normKey.includes("google maps link") || normKey.includes("google map link") || normKey.includes("map link")) {
      data.location.googleMapsUrl = responseValue;
    } else if (normKey.includes("address") || normKey.includes("shop business address")) {
      data.location.address = responseValue;
      data.contact.address = responseValue;
    } else if (normKey === "products") {
      data.catalog.productsRaw = responseValue;
    } else if (normKey.includes("services offered") || normKey === "services") {
      data.catalog.servicesRaw = responseValue;
    } else if (normKey === "opening time") {
      data.hours.openingTime = responseValue;
    } else if (normKey === "closing time") {
      data.hours.closingTime = responseValue;
    } else if (normKey === "weekly closing day") {
      data.hours.weeklyClosingDay = responseValue;
    } else if (normKey.includes("business claims") || normKey.includes("special facts")) {
      data.business.claims = responseValue;
    } else if (normKey.includes("actual customer reviews") || normKey.includes("testimonials")) {
      data.catalog.testimonialsRaw = responseValue;
    } else if (normKey.includes("logo file") || normKey.includes("logo location")) {
      data.assets.logoLocation = responseValue;
    } else if (normKey.includes("shop photos") || normKey.includes("business photos")) {
      data.assets.shopPhotosLocation = responseValue;
    } else if (normKey.includes("product photos")) {
      data.assets.productPhotosLocation = responseValue;
    } else if (normKey.includes("service photos")) {
      data.assets.servicePhotosLocation = responseValue;
    } else if (normKey === "primary brand color") {
      data.brand.primaryColor = responseValue; // Exact color preserved
    } else if (normKey === "secondary brand color") {
      data.brand.secondaryColor = responseValue;
    } else if (normKey === "brand name text color") {
      data.brand.brandNameTextColor = responseValue;
    } else if (normKey.includes("services page") || normKey.includes("services section")) {
      data.pages.services = parseYesNo(responseValue);
    } else if (normKey.includes("products page") || normKey.includes("products section")) {
      data.pages.products = parseYesNo(responseValue);
    } else if (normKey.includes("gallery page") || normKey.includes("gallery section")) {
      data.pages.gallery = parseYesNo(responseValue);
    } else if (normKey.includes("customer reviews") || normKey.includes("testimonials section")) {
      data.pages.testimonials = parseYesNo(responseValue);
    } else if (normKey.includes("contact page") || normKey.includes("contact section")) {
      data.pages.contact = parseYesNo(responseValue);
    } else if (normKey.includes("other required page")) {
      data.pages.other = responseValue;
    } else if (normKey === "google map") {
      data.features.googleMap = parseYesNo(responseValue);
    } else if (normKey === "contact form") {
      data.features.contactForm = parseYesNo(responseValue);
    } else if (normKey === "social media links") {
      data.features.socialLinks = parseYesNo(responseValue);
    } else if (normKey.includes("other website feature")) {
      data.features.other = responseValue;
    } else if (normKey === "facebook") {
      data.social.facebook = responseValue;
    } else if (normKey === "youtube") {
      data.social.youtube = responseValue;
    } else if (normKey.includes("other social") || normKey.includes("online link")) {
      data.social.other = responseValue;
    } else if (normKey === "existing website") {
      data.social.existingWebsite = responseValue;
    } else if (normKey === "reference website") {
      data.style.referenceWebsite = responseValue;
    } else if (normKey.includes("special instructions") || normKey.includes("additional requirements")) {
      data.additionalRequirements = responseValue;
    } else if (normKey === "date") {
      data.confirmation.date = responseValue;
    } else if (normKey === "client confirmation") {
      data.confirmation.confirmed = parseTriState(responseValue);
    } else if (normKey.includes("signature")) {
      data.confirmation.signature = responseValue;
    }
  }

  // Derive phone from WhatsApp if WhatsApp same as Mobile is true and phone is null
  if (!data.contact.phone && data.contact.whatsapp && data.contact.whatsappSameAsMobile === true) {
    data.contact.phone = data.contact.whatsapp;
  }

  // Format composite working hours string if hours are present
  const { openingTime, closingTime, weeklyClosingDay } = data.hours;
  if (openingTime && closingTime) {
    let hrs = `${openingTime} - ${closingTime}`;
    if (weeklyClosingDay) {
      hrs += ` (Closed: ${weeklyClosingDay})`;
    }
    data.hours.workingHoursString = hrs;
  }

  return data;
}
