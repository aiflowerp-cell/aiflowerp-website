/*
 * FILE: config/business.js
 * PURPOSE:
 * Central business identity, contact information, branding, and navigation configuration.
 *
 * RESPONSIBILITIES:
 * - Define business name, short name, tagline, description, and contact metadata
 * - Define primary and secondary brand colors and approved logo path
 * - Define primary website navigation links and header call-to-action
 * - Provide complete, factual business profile for 'ai flow'
 *
 * DEPENDENCIES:
 * - @/config/clientAssets
 *
 * NOTES:
 * - Official brand name: 'ai flow' (strictly lowercase in customer-facing UI).
 * - Brand blue: '#2563eb' matching the live ai flow ERP web application.
 * - Application boundary: Public website (www.aiflowerp.in) ↔ ERP application (erp.aiflowerp.in).
 */

import { clientAssets } from "./clientAssets.js";

export const business = {
  name: "ai flow",
  shortName: "ai flow",
  tagline: "Accounting-First ERP Software",
  description: "ai flow is an accounting-first ERP platform designed for structured business management, document-based processing, verification, inventory control, and auditability.",
  owner: null,
  foundedYear: null,
  locationTagline: null,
  phone: null,
  whatsapp: "910000000000",
  whatsappDefaultMessage: "Hello, I would like to inquire about the ai flow ERP platform.",
  email: "aiflowerp@gmail.com",
  address: null,
  workingHours: null,
  logo: clientAssets.logo || "/images/client/logo/LogoColorNoText.jpeg",
  primaryColor: "#2563eb",
  secondaryColor: "#0f172a",
  brandNameTextColor: "#2563eb",
  appUrl: "https://erp.aiflowerp.in",
  headerCta: {
    label: "Open ERP",
    href: "https://erp.aiflowerp.in",
  },
  socialLinks: {},
  map: {
    embedUrl: null,
    directionsUrl: null,
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Platform", href: "/products" },
  { label: "Contact", href: "/contact" },
];