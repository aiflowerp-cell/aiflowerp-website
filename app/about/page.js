/*
 * FILE: app/about/page.js
 * PURPOSE:
 * About Us page route presenting brand story, testimonials, and contact CTA.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with About metadata
 * - Render AboutSection story (with showHeading={false} to avoid duplication)
 * - Render Testimonials and ContactSection
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (AboutSection, Testimonials, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Content is consumed from content/siteContent.js.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { AboutSection } from "@/components/sections/AboutSection";
import { AboutProductsOverview } from "@/components/sections/AboutProductsOverview";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export const metadata = {
  title: "About ai flow — Engineering Intelligent Systems for Modern Trade",
  description:
    "Learn about ai flow, the corporate technology brand behind two specialized platforms: ai flow ERP for business operations and Kinny Cart for digital local commerce.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
      />
      <AboutSection showHeading={false} />
      <AboutProductsOverview />
      <ContactSection />
    </>
  );
}
