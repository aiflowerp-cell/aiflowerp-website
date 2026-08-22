/*
 * FILE: lib/site.js
 * PURPOSE:
 * Reusable utility and helper functions for URL generation and formatting.
 *
 * RESPONSIBILITIES:
 * - Generate direct WhatsApp chat URL with configured or neutral initial greeting
 * - Generate tel: dialer link from formatted phone number
 *
 * DEPENDENCIES:
 * - @/config/business
 *
 * NOTES:
 * - Used across layout, sections, and contact page components.
 */

import { business } from "@/config/business";

export function whatsappUrl(number, message) {
  const defaultMsg = business.whatsappDefaultMessage || "Hello, I would like to know more about your business.";
  const text = message || defaultMsg;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function telUrl(phone) {
  return `tel:${phone ? phone.replace(/\s/g, "") : ""}`;
}
