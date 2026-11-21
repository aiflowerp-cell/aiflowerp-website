/*
 * FILE: app/page.js
 * PURPOSE:
 * Landing homepage route for the ai flow corporate website.
 *
 * RESPONSIBILITIES:
 * - Compose corporate homepage sections in the exact required order:
 *   1. Existing Header / Navigation (in RootLayout)
 *   2. New Corporate Hero Section (Hero)
 *   3. Our Two Products — ai flow ERP and Kinny Cart (TwoProductsSection)
 *   4. Why ai flow — Key Technology Advantages (WhyAiFlowSection)
 *   5. Who We Serve — Dealers, Distributors, Merchants and Customers (WhoWeServeSection)
 *   6. Product Screenshots / Platform Preview (PlatformPreviewSection)
 *   7. About ai flow (CorporateAboutSection)
 *   8. Contact / Book a Demo (ContactSection)
 *   9. Professional Footer with both product links (in RootLayout)
 *
 * DEPENDENCIES:
 * - @/components/sections/Hero
 * - @/components/sections/TwoProductsSection
 * - @/components/sections/WhyAiFlowSection
 * - @/components/sections/WhoWeServeSection
 * - @/components/sections/PlatformPreviewSection
 * - @/components/sections/CorporateAboutSection
 * - @/components/sections/ContactSection
 */

import { Hero } from "@/components/sections/Hero";
import { TwoProductsSection } from "@/components/sections/TwoProductsSection";
import { RealitySection } from "@/components/sections/RealitySection";
import { WhyAiFlowSection } from "@/components/sections/WhyAiFlowSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { PlatformPreviewSection } from "@/components/sections/PlatformPreviewSection";
import { KinnyCartSection } from "@/components/sections/KinnyCartSection";
import { CorporateAboutSection } from "@/components/sections/CorporateAboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      {/* 2. Corporate Hero Section */}
      <Hero />

      {/* 3. Our Two Products — ai flow ERP and kinny cart */}
      <TwoProductsSection />

      {/* 4. Industrial Supply Chain Reality — Railway Rake Logistics to Software */}
      <RealitySection />

      {/* 5. Why ai flow — Key Technology Advantages */}
      <WhyAiFlowSection />

      {/* 6. Who We Serve — Dealers, Distributors, Merchants and Customers */}
      <WhoWeServeSection />

      {/* 7. Product Screenshots / Platform Preview (ai flow ERP) */}
      <PlatformPreviewSection />

      {/* 8. Dedicated KinnyCart Product Section */}
      <KinnyCartSection />

      {/* 9. About ai flow — Parent Technology Brand Story */}
      <CorporateAboutSection />

      {/* 9. Contact / Book a Demo */}
      <ContactSection />
    </>
  );
}
