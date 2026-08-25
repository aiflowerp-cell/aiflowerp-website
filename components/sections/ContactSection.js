/*
 * FILE: components/sections/ContactSection.js
 * PURPOSE:
 * Full-width call-to-action banner for scheduling a demo or reaching out.
 *
 * RESPONSIBILITIES:
 * - Render demo invitation copy from content configuration
 * - Render primary 'Book a Demo' CTA linking to contact page
 * - Render direct email contact link
 * - Safely handle WhatsApp placeholder without linking to unverified numbers
 *
 * DEPENDENCIES:
 * - @/config/business
 * - @/content/siteContent
 * - @/components/ui/Button
 * - @/components/ui/BrandText
 *
 * NOTES:
 * - Clean Light SaaS visual presentation with verified conversion actions.
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions.
 */

import { business } from "@/config/business";
import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";
import { BrandText } from "@/components/ui/BrandText";

export function ContactSection() {
  const banner = content.contactBanner || {};

  const eyebrow = banner.eyebrow || "Schedule a Walkthrough";

  const title =
    banner.title ||
    "Ready to see how ai flow manages your cement operations?";

  const description =
    banner.description ||
    "Schedule a walkthrough of the platform and see how document-based workflows bring clarity to your business.";

  const ctaText = banner.ctaText || "Book a Demo";

  return (
    <section className="contact-band">
      <div className="container contact-grid">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}

          {title && (
            <h2>
              <BrandText text={title} />
            </h2>
          )}

          {description && (
            <p>
              <BrandText text={description} />
            </p>
          )}
        </div>

        <div className="contact-actions">
          <Button href="/contact">
            {ctaText} →
          </Button>

          {business.email && (
            <a
              href={`mailto:${business.email}`}
              style={{
                color: "var(--muted)",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              or email us at{" "}
              <span
                style={{
                  color: "var(--primary)",
                }}
              >
                {business.email}
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}