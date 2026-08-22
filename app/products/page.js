/*
 * FILE: app/products/page.js
 * PURPOSE:
 * Platform architecture and core workflow page route for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with platform positioning
 * - Render conceptual workflow pipeline ('How ai flow Works')
 * - Render platform architecture pillars (structured data, verification gates, ledger posting, etc.)
 * - Render ContactSection CTA
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (WorkflowSection, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Explains ai flow as an accounting-first ERP platform rather than a generic product catalog.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/Card";
import { content } from "@/content/siteContent";

export default function PlatformPage() {
  const platform = content.platformPage || {};
  const pillars = platform.pillars || [];

  return (
    <>
      <PageIntro
        eyebrow={platform.eyebrow}
        title={platform.title}
        description={platform.description}
      />
      <WorkflowSection />
      {pillars.length > 0 && (
        <section className="section platform-pillars-section">
          <div className="container">
            <div className="section-heading">
              {platform.pillarsEyebrow && <p className="eyebrow">{platform.pillarsEyebrow}</p>}
              {platform.pillarsTitle && <h2>{platform.pillarsTitle}</h2>}
              {platform.pillarsDescription && (
                <p className="platform-lead">{platform.pillarsDescription}</p>
              )}
            </div>
            <div className="platform-pillars-grid">
              {pillars.map((pillar, index) => (
                <Card className="pillar-card" key={pillar.title || index}>
                  <span className="pillar-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
      <ContactSection />
    </>
  );
}
