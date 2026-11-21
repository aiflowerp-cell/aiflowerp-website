/*
 * FILE: app/contact/page.js
 * PURPOSE:
 * Contact information, verified email, and demo booking channels for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with contact copy
 * - Render verified contact channels (email, demo booking) safely
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
import { ContactEnquirySection } from "@/components/sections/ContactEnquirySection";
import { MapSection } from "@/components/sections/MapSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export const metadata = {
  title: "Contact & Book a Demo — ai flow",
  description:
    "Schedule a demonstration of ai flow ERP for enterprise operations or connect with our commerce team for KinnyCart merchant onboarding.",
};

export default function ContactPage() {
  const contactPage = content.contactPage || {};

  return (
    <>
      <PageIntro
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        description={contactPage.description}
      />
      <ContactEnquirySection />
      <MapSection />
      <ContactSection />
    </>
  );
}

