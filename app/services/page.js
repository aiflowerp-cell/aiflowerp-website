/*
 * FILE: app/services/page.js
 * PURPOSE:
 * Services catalog page route showcasing available services and consultations.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with services copy
 * - Render ServicesSection list
 * - Render ContactSection CTA
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (ServicesSection, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Page intro copy is supplied via content/siteContent.js.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export const metadata = {
  title: "Verified Capabilities — ai flow ERP",
  description:
    "Explore the verified operational modules and accounting capabilities that power the ai flow ERP platform.",
};

export default function ServicesPage() {
  const { servicesPage } = content;

  return (
    <>
      <PageIntro
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.title}
        description={servicesPage.description}
      />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
