/*
 * FILE: app/contact/page.js
 * PURPOSE:
 * Contact information, direct WhatsApp, phone, and email communication channels.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with contact copy
 * - Render verified contact channels (phone, WhatsApp, email) safely
 * - Render MapSection if map embed exists
 * - Render ContactSection CTA banner
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (MapSection, ContactSection)
 * - UI primitives (Button)
 * - Business configuration (@/config/business)
 * - Central content layer (@/content/siteContent)
 * - Helper utilities (@/lib/site)
 *
 * NOTES:
 * - Fully client-agnostic; safely handles verified contact channels without fabrication.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { MapSection } from "@/components/sections/MapSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";
import { telUrl, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const contactPage = content.contactPage || {};
  const details = contactPage.details || {};

  return (
    <>
      <PageIntro
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        description={contactPage.description}
      />
      {(business.address || business.phone || business.whatsapp || business.email) && (
        <section className="section">
          <div className="container contact-details">
            <div>
              {details.eyebrow && <p className="eyebrow">{details.eyebrow}</p>}
              {details.title && <h2>{details.title}</h2>}
            </div>
            <div>
              {business.address && <p>{business.address}</p>}
              {business.workingHours && <p>{business.workingHours}</p>}
              {business.email && (
                <p style={{ marginTop: "12px", fontSize: "16px" }}>
                  <strong>Email: </strong>
                  <a href={`mailto:${business.email}`} style={{ color: "var(--primary)" }}>
                    {business.email}
                  </a>
                </p>
              )}
              <div className="button-row" style={{ marginTop: "24px" }}>
                {business.phone && (
                  <Button href={telUrl(business.phone)}>Call {business.phone}</Button>
                )}
                {business.whatsapp && (
                  <Button href={whatsappUrl(business.whatsapp)} variant="text">
                    WhatsApp us ↗
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      <MapSection />
      <ContactSection />
    </>
  );
}
