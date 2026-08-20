/*
 * FILE: app/contact/page.js
 * PURPOSE:
 * Contact information, studio details, and interactive map page route.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with contact copy
 * - Render studio address, hours, and direct call/WhatsApp actions
 * - Render MapSection with embedded Google Map
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
 * - Client data is consumed from config/business.js and content/siteContent.js.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { MapSection } from "@/components/sections/MapSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";
import { telUrl, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const { contactPage } = content;

  return (
    <>
      <PageIntro
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        description={contactPage.description}
      />
      <section className="section">
        <div className="container contact-details">
          <div>
            <p className="eyebrow">{contactPage.details.eyebrow}</p>
            <h2>{contactPage.details.title}</h2>
          </div>
          <div>
            <p>{business.address}</p>
            <p>{business.workingHours}</p>
            <div className="button-row">
              <Button href={telUrl(business.phone)}>Call {business.phone}</Button>
              <Button href={whatsappUrl(business.whatsapp)} variant="text">WhatsApp us ↗</Button>
            </div>
          </div>
        </div>
      </section>
      <MapSection />
      <ContactSection />
    </>
  );
}
