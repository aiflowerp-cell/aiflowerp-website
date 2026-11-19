/*
 * FILE: components/sections/CorporateAboutSection.js
 * PURPOSE:
 * Section 7: About ai flow — Parent Technology Brand Story.
 *
 * RESPONSIBILITIES:
 * - Position ai flow as the parent technology brand behind ai flow ERP and Kinny Cart
 * - Articulate core philosophy: building software that mirrors real-world trade realities
 * - Render structured corporate pillars (Integrity, Purpose-built, Local commerce, Security)
 *
 * DEPENDENCIES:
 * - next/link
 * - @/content/siteContent
 */

import Link from "next/link";
import { content } from "@/content/siteContent";
import { BrandText } from "@/components/ui/BrandText";

export function CorporateAboutSection() {
  const { corporateAbout } = content;
  if (!corporateAbout) return null;

  const pillars = [
    {
      title: "Real-World Operational Logic",
      desc: "Designed around physical workflows—separating transit stock from physical godown inventory, and providing pre-mapped GTIN catalogs.",
    },
    {
      title: "Evidence-Backed Ledger Integrity",
      desc: "Every stock movement and financial balance is tied directly to authentic source documents with strict operator confirmation checkpoints.",
    },
    {
      title: "Empowering Local Commerce",
      desc: "Connecting traditional supply chains with digital retail, enabling neighborhood merchants to compete in the modern online economy.",
    },
    {
      title: "Enterprise Multi-Tenant Cloud",
      desc: "Cloud-native infrastructure with strict company-level isolation, financial-year protection, and sub-second execution speeds.",
    },
  ];

  return (
    <section className="section corporate-about-section">
      <div className="container">
        <div className="corporate-about-grid">
          <div className="corporate-about-left">
            {corporateAbout.eyebrow && (
              <p className="eyebrow">
                <BrandText text={corporateAbout.eyebrow} />
              </p>
            )}
            <h2 className="corporate-about-title">
              <BrandText text={corporateAbout.title} />
            </h2>
            {corporateAbout.description && (
              <p className="section-lead">
                <BrandText text={corporateAbout.description} />
              </p>
            )}

            <div className="corporate-about-paragraphs">
              {corporateAbout.paragraphs.map((para, idx) => (
                <p key={idx} className="corporate-about-p">
                  <BrandText text={para} />
                </p>
              ))}
            </div>

            <div className="corporate-about-ctas">
              <Link href="/about" className="button button-secondary">
                Read Full Story →
              </Link>
              <Link href="/contact" className="button button-text">
                Book a Demo ↗
              </Link>
            </div>
          </div>

          <div className="corporate-about-right">
            <div className="corporate-pillars-card">
              <h3 className="corporate-pillars-title">Core Engineering Principles</h3>
              <div className="corporate-pillars-list">
                {pillars.map((pil, idx) => (
                  <div key={idx} className="corporate-pillar-item">
                    <span className="corporate-pillar-number">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="corporate-pillar-heading">{pil.title}</h4>
                      <p className="corporate-pillar-desc">{pil.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
