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
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow={content.about.eyebrow}
        title={content.about.title}
        description={content.about.description}
      />
      <AboutSection showHeading={false} />
      <Testimonials />
      <ContactSection />
    </>
  );
}
