/*
 * FILE: components/sections/WhatsAppButton.js
 * PURPOSE:
 * Floating WhatsApp action button fixed to the bottom corner of the viewport.
 *
 * RESPONSIBILITIES:
 * - Render fixed WhatsApp chat launcher
 * - Generate direct wa.me URL using business whatsapp number
 *
 * DEPENDENCIES:
 * - @/config/business
 * - @/lib/site (whatsappUrl)
 *
 * NOTES:
 * - Rendered in app/layout.js across all pages.
 */

import { business } from "@/config/business";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href={whatsappUrl(business.whatsapp)} aria-label="Chat with us on WhatsApp">
      <span aria-hidden="true">◌</span> WhatsApp
    </a>
  );
}
