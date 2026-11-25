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
  tagline: "Complete Business & Commerce Solutions",
  description: "ai flow is a technology platform offering two distinct business solutions: ai flow ERP for complete enterprise operations and cement distribution, and KinniCart for digital commerce.",
  owner: null,
  foundedYear: null,
  locationTagline: null,
  phone: null,
  whatsapp: "910000000000",
  whatsappIsPlaceholder: true,
  whatsappDefaultMessage: "Hello, I would like to inquire about ai flow business solutions.",
  email: "aiflowerp@gmail.com",
  address: null,
  workingHours: null,
  logo: clientAssets.logo || "/images/client/logo/LogoColorNoText-Transparent-Background.png",
  primaryColor: "#2563eb",
  secondaryColor: "#111827",
  brandNameTextColor: "#2563eb",
  erpUrl: process.env.NEXT_PUBLIC_ERP_URL || "https://erp.aiflowerp.in/",
  shoppingUrl: process.env.NEXT_PUBLIC_SHOPPING_URL || "https://shop.aiflowerp.in/",
  appUrl: process.env.NEXT_PUBLIC_ERP_URL || "https://erp.aiflowerp.in/",
  headerCta: {
    label: "Open KinniCart ↗",
    href: process.env.NEXT_PUBLIC_SHOPPING_URL || "https://shop.aiflowerp.in/",
  },
  socialLinks: {},
  map: {
    embedUrl: null,
    directionsUrl: null,
  },
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Platform", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];