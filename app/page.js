/*
 * FILE: app/page.js
 * PURPOSE:
 * Landing home page route for the ai flow Cement Dealer ERP marketing website.
 *
 * RESPONSIBILITIES:
 * - Compose top-level sections answering the 6 core business questions in sequential order:
 *   1. Is this for my cement business? (Hero)
 *   2. What does it manage? (Hero scope)
 *   3. What specific problems does it solve? (RealitySection)
 *   4. How does the cement business workflow work? (WorkflowSection)
 *   5. What does the actual ERP look like? (ErpShowcaseSection)
 *   6. What are the verified capabilities? (ServicesSection)
 *   7. How does it handle transactions reliably? (EvidenceSection)
 *   8. Why should I book a demo? (ContactSection)
 *
 * DEPENDENCIES:
 * - @/components/sections/Hero
 * - @/components/sections/RealitySection
 * - @/components/sections/WorkflowSection
 * - @/components/sections/ErpShowcaseSection
 * - @/components/sections/ServicesSection
 * - @/components/sections/EvidenceSection
 * - @/components/sections/ContactSection
 *
 * NOTES:
 * - Modern Light SaaS visual direction, business-first positioning, zero fabrication.
 */

import { Hero } from "@/components/sections/Hero";
import { RealitySection } from "@/components/sections/RealitySection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ErpShowcaseSection } from "@/components/sections/ErpShowcaseSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <RealitySection />
      <WorkflowSection cta />
      <ErpShowcaseSection />
      <ServicesSection preview={false} />
      <EvidenceSection />
      <ContactSection />
    </>
  );
}

