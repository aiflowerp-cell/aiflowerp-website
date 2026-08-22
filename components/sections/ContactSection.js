/*
 * FILE: components/sections/ContactSection.js
 * PURPOSE:
 * Full-width call-to-action contact banner with WhatsApp and direct call triggers.
 *
 * RESPONSIBILITIES:
 * - Render contact invitation copy from content configuration
 * - Render direct WhatsApp launch button with configured action text
 * - Render direct phone call anchor with telephone protocol
 *
 * DEPENDENCIES:
 * - @/config/business
 * - @/content/siteContent
 * - @/lib/site (telUrl, whatsappUrl)
 * - @/components/ui/Button
 *
 * NOTES:
 * - Completely client-agnostic; no hardcoded measurements or category claims.
 */

import { business } from "@/config/business";
import { content } from "@/content/siteContent";
import { telUrl, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  const banner = content.contactBanner || {};
  const eyebrow = banner.eyebrow || "Get in touch";
  const title = banner.title || "Have a project in mind?";
  const description = banner.description || "Reach out to us via phone or WhatsApp. We look forward to connecting with you.";
  const ctaText = banner.ctaText || "Start on WhatsApp";

  return (
    <section className="contact-band">
      <div className="container contact-grid">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
        <div className="contact-actions">
          {business.whatsapp && (
            <Button href={whatsappUrl(business.whatsapp)}>{ctaText}</Button>
          )}
          {business.phone && (
            <a href={telUrl(business.phone)} className="contact-phone">
              {business.phone} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
