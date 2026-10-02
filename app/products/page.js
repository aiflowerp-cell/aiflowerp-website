/*
 * FILE: app/products/page.js
 * PURPOSE:
 * Platform architecture and core workflow page route for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with platform positioning
 * - Render evidence-driven processing workflow ('From Business Document to Verified Transaction')
 * - Render platform architecture pillars (structured data, verification gates, ledger posting, etc.)
 * - Render ContactSection CTA
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (EvidenceSection, ContactSection)
 * - UI primitives (Card)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Explains ai flow enterprise architecture for cement businesses.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export default function PlatformPage() {
  const platform = content.platformPage || {};
  const pillars = platform.pillars || [];
  const systems = platform.systems || [];

  return (
    <>
      <PageIntro
        eyebrow={platform.eyebrow}
        title={platform.title}
        description={platform.description}
      />
      {systems.length > 0 && (
        <section className="section platform-systems-section">
          <div className="container">
            <div className="section-heading">
              {platform.systemsEyebrow && <p className="eyebrow">{platform.systemsEyebrow}</p>}
              {platform.systemsTitle && <h2>{platform.systemsTitle}</h2>}
              {platform.systemsDescription && (
                <p className="section-lead">{platform.systemsDescription}</p>
              )}
            </div>
            <div className="platform-systems-grid">
              {systems.map((sys) => {
                const targetUrl = business[sys.urlKey] || sys.url;
                return (
                  <Card className="pillar-card system-card" key={sys.id || sys.title}>
                    {sys.badge && <span className="pillar-number">{sys.badge}</span>}
                    <h3 style={{ fontSize: "20px", marginTop: "4px" }}>{sys.title}</h3>
                    <p style={{ fontWeight: "600", color: "var(--primary)", fontSize: "14px" }}>
                      {sys.tagline}
                    </p>
                    <p style={{ marginTop: "4px", lineHeight: "1.6" }}>{sys.description}</p>
                    <div style={{ marginTop: "auto", paddingTop: "18px" }}>
                      <Button
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant={sys.id === "erp" ? "primary" : "secondary"}
                      >
                        {sys.ctaLabel} →
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <EvidenceSection />
      {pillars.length > 0 && (
        <section className="section platform-pillars-section">
          <div className="container">
            <div className="section-heading">
              {platform.pillarsEyebrow && <p className="eyebrow">{platform.pillarsEyebrow}</p>}
              {platform.pillarsTitle && <h2>{platform.pillarsTitle}</h2>}
              {platform.pillarsDescription && (
                <p className="section-lead">{platform.pillarsDescription}</p>
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

