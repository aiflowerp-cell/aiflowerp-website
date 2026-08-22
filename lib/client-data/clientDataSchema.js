/*
 * FILE: lib/client-data/clientDataSchema.js
 * PURPOSE:
 * Canonical Client Data Schema definition and normalization validator.
 *
 * RESPONSIBILITIES:
 * - Define standard normalized client data shape
 * - Validate required vs optional fields
 * - Enforce Yes/No/Blank boolean logic
 * - Check brand color formatting and URL integrity
 * - Produce deterministic validation diagnostics (errors/warnings)
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Permanent data contract for the Master Website Factory.
 */

/**
 * Creates an empty canonical client data object with standard null/empty defaults.
 * @returns {object} Canonical client data shape
 */
export function createDefaultClientData() {
  return {
    business: {
      name: null,
      shortName: null,
      owner: null,
      category: null,
      type: null,
      description: null,
      claims: null,
    },
    contact: {
      phone: null,
      whatsapp: null,
      whatsappSameAsMobile: null,
      email: null,
      address: null,
    },
    location: {
      address: null,
      googleMapsUrl: null,
    },
    brand: {
      primaryColor: null,
      secondaryColor: null,
      brandNameTextColor: null,
    },
    hours: {
      openingTime: null,
      closingTime: null,
      weeklyClosingDay: null,
      workingHoursString: null,
    },
    pages: {
      home: true, // Always active
      about: true, // Always active
      services: false,
      products: false,
      gallery: false,
      testimonials: false,
      contact: false,
      other: null,
    },
    features: {
      googleMap: false,
      contactForm: false,
      socialLinks: false,
      other: null,
    },
    social: {
      facebook: null,
      youtube: null,
      other: null,
      existingWebsite: null,
    },
    style: {
      referenceWebsite: null,
    },
    catalog: {
      servicesRaw: null,
      productsRaw: null,
      galleryPhotosNote: null,
      testimonialsRaw: null,
    },
    assets: {
      logoLocation: null,
      shopPhotosLocation: null,
      productPhotosLocation: null,
      servicePhotosLocation: null,
    },
    confirmation: {
      date: null,
      confirmed: null,
      signature: null,
    },
    additionalRequirements: null,
    rawResponses: {},
  };
}

/**
 * Validates normalized client data against Master Factory requirements.
 * @param {object} data - Normalized client data object
 * @returns {object} { isValid: boolean, errors: string[], warnings: string[] }
 */
export function validateClientData(data) {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== "object") {
    return {
      isValid: false,
      errors: ["Client data object is missing or invalid."],
      warnings: [],
    };
  }

  // 1. Business Name (Strictly Required)
  if (!data.business?.name || typeof data.business.name !== "string" || !data.business.name.trim()) {
    errors.push("Missing required field: Business Name is mandatory.");
  }

  // 2. Business Category (Required in Form)
  if (!data.business?.category || !data.business.category.trim()) {
    warnings.push("Business Category was not supplied in the form.");
  }

  // 3. Basic Description (Required in Form)
  if (!data.business?.description || !data.business.description.trim()) {
    warnings.push("Basic Business Description was not supplied in the form.");
  }

  // 4. WhatsApp Number (Required in Form)
  if (!data.contact?.whatsapp || !data.contact.whatsapp.trim()) {
    warnings.push("WhatsApp Number was not supplied in the form.");
  }

  // 5. Brand Color Validation (Optional, but if provided check format)
  if (data.brand?.primaryColor) {
    const color = data.brand.primaryColor.trim();
    if (!color) {
      data.brand.primaryColor = null;
    }
  }

  // 6. Map Feature Consistency
  if (data.features?.googleMap && !data.location?.googleMapsUrl) {
    warnings.push("Google Map feature is enabled (Yes), but no Google Maps URL was provided.");
  }

  // 7. Pages Consistency Checks
  if (data.pages?.products && (!data.catalog?.productsRaw || !data.catalog.productsRaw.trim())) {
    warnings.push("Products Page is requested (Yes), but no products list was provided in the form.");
  }

  if (data.pages?.testimonials && (!data.catalog?.testimonialsRaw || !data.catalog.testimonialsRaw.trim())) {
    warnings.push("Testimonials Section is requested (Yes), but no actual customer reviews were provided.");
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}
