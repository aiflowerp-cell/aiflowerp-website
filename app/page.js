/*
 * FILE: app/page.js
 * PURPOSE:
 * Landing home page route for the ai flow marketing website.
 *
 * RESPONSIBILITIES:
 * - Compose top-level sections (Hero, About preview, Workflow pipeline, Capabilities preview, Contact CTA)
 * - Safely render optional sections conditionally
 *
 * DEPENDENCIES:
 * - Section components (Hero, AboutSection, WorkflowSection, ServicesSection, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Communicates ai flow positioning: what it is, who it is for, conceptual workflow, and verified capabilities.
 */

import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection preview />
      <WorkflowSection cta />
      <ServicesSection preview />
      <ContactSection />
    </>
  );
}
