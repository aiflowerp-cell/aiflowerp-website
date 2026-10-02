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
 * - WhatsApp number '910000000000' is an unconfigured configuration placeholder.
 */

import { clientAssets } from "./clientAssets.js";

const isDev = process.env.NODE_ENV === "development";

export const business = {
  name: "ai flow",
  shortName: "ai flow",
  tagline: "Cement Dealer ERP",
  description: "ai flow is an ERP designed around the real workflow of a cement business, managing company billing, transit stock, lifting, physical stock, sales, customer balances, and accounting.",
  owner: null,
  foundedYear: null,
  locationTagline: null,
  phone: null,
  whatsapp: "910000000000",
  whatsappIsPlaceholder: true,
  whatsappDefaultMessage: "Hello, I would like to inquire about the ai flow Cement Dealer ERP.",
  email: "aiflowerp@gmail.com",
  address: null,
  workingHours: null,
  logo: clientAssets.logo || "/images/client/logo/LogoColorNoText-Transparent-Background.png",
  primaryColor: "#2563eb",
  secondaryColor: "#111827",
  brandNameTextColor: "#2563eb",
  erpUrl: process.env.NEXT_PUBLIC_ERP_URL || (isDev ? "http://localhost:3100" : "https://erp.aiflowerp.in"),
  shoppingUrl: process.env.NEXT_PUBLIC_SHOPPING_URL || (isDev ? "http://localhost:3200" : "https://shop.aiflowerp.in"),
  appUrl: process.env.NEXT_PUBLIC_ERP_URL || (isDev ? "http://localhost:3100" : "https://erp.aiflowerp.in"),
  headerCta: {
    label: "Book a Demo",
    href: "/contact",
  },
  socialLinks: {},
  map: {
    embedUrl: null,
    directionsUrl: null,
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Capabilities", href: "/services" },
  { label: "Platform", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];