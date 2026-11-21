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
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Card } from "@/components/ui/Card";
import { BrandText } from "@/components/ui/BrandText";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export const metadata = {
  title: "Platform Architecture — ai flow ERP & KinnyCart",
  description:
    "Explore the enterprise architecture powering ai flow ERP and KinnyCart across multi-tenant isolation, OCR ingestion, accounting integrity, and digital commerce.",
};

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
                const isKinny = sys.id === "kinny-cart" || sys.id === "shopping";
                return (
                  <Card className={`pillar-card system-card ${isKinny ? "is-kinny" : ""}`} key={sys.id || sys.title}>
                    {sys.badge && (
                      <span className={`pillar-number ${isKinny ? "is-kinny-badge" : ""}`}>
                        {sys.badge}
                      </span>
                    )}
                    <h3 style={{ fontSize: "20px", marginTop: "6px" }}>
                      <BrandText text={sys.title} />
                    </h3>
                    <p
                      style={{
                        fontWeight: "600",
                        color: isKinny ? "var(--brand-commerce-red, #dc2626)" : "var(--primary)",
                        fontSize: "14px",
                        marginTop: "2px",
                      }}
                    >
                      {sys.tagline}
                    </p>
                    <p style={{ marginTop: "8px", lineHeight: "1.6" }}>{sys.description}</p>
                    <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                      <a
                        href={targetUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`button ${isKinny ? "button-kinny" : "button-primary"}`}
                      >
                        <BrandText text={sys.ctaLabel} />
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Shared and Product-Specific Architectural Capabilities */}
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
              {pillars.map((pillar, index) => {
                const isKinnyPillar =
                  pillar.category === "KinnyCart" ||
                  pillar.category === "kinny cart" ||
                  pillar.category === "Kinny Cart";
                const isErpPillar = pillar.category === "ai flow ERP";
                return (
                  <Card className="pillar-card" key={pillar.title || index}>
                    <div className="pillar-card-top-row">
                      <span className="pillar-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {pillar.category && (
                        <span
                          className={`pillar-tag ${
                            isKinnyPillar
                              ? "is-kinny-tag"
                              : isErpPillar
                              ? "is-erp-tag"
                              : "is-shared-tag"
                          }`}
                        >
                          <BrandText text={pillar.category} />
                        </span>
                      )}
                    </div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Evidence-Driven Document Processing Workflow */}
      <EvidenceSection />

      {/* Real-World Operational Workflow Grounding */}
      <WorkflowSection cta={false} />

      <ContactSection />
    </>
  );
}

