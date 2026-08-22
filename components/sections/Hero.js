/*
 * FILE: components/sections/Hero.js
 * PURPOSE:
 * Left-aligned two-column B2B SaaS landing hero section for ai flow with balanced visual density.
 *
 * RESPONSIBILITIES:
 * - Render left-aligned cement dealer eyebrow, headline, description, and action CTAs
 * - Render right-column framed ERP dashboard preview and reserved screenshot requirement slot
 * - Maintain Apple-inspired modern Light SaaS visual hierarchy with balanced proportions
 *
 * DEPENDENCIES:
 * - @/components/ui/Button
 * - @/content/siteContent
 *
 * NOTES:
 * - Two-column desktop grid with natural single-column mobile collapse.
 */

import { Button } from "@/components/ui/Button";
import { content } from "@/content/siteContent";

export function Hero() {
  const { home } = content;
  const ctas = home.heroCtas || [];

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          {home.eyebrow && <p className="eyebrow hero-eyebrow">{home.eyebrow}</p>}
          {home.title && <h1 className="hero-title">{home.title}</h1>}
          {home.description && <p className="hero-copy">{home.description}</p>}
          {ctas.length > 0 && (
            <div className="button-row hero-cta-row">
              {ctas.map((cta) => (
                <Button key={cta.label} href={cta.href} variant={cta.variant || "primary"}>
                  {cta.label} {cta.variant === "primary" ? "→" : ""}
                </Button>
              ))}
            </div>
          )}
        </div>
        <div className="hero-right">
          <div className="erp-preview-frame hero-preview-card">
            <div className="erp-frame-header">
              <div className="erp-dots">
                <span className="erp-dot" />
                <span className="erp-dot" />
                <span className="erp-dot" />
              </div>
              <span className="erp-frame-title">ai flow ERP — Executive Dashboard</span>
              <span style={{ width: "36px" }} />
            </div>
            <div className="erp-frame-body hero-preview-body">
              <div className="erp-placeholder-box hero-placeholder-box">
                <span className="erp-placeholder-tag">Real ERP Screenshot Requirement</span>
                <h3 className="erp-placeholder-title">Executive Operations Dashboard</h3>
                <p className="erp-placeholder-desc">
                  Dashboard KPIs, daily sales overview, stock position, and verified operational summaries from the running <span className="brand-blue">ai flow</span> ERP.
                </p>
                <code className="erp-placeholder-req">
                  Slot: Live screenshot of Dashboard KPIs & operational summaries
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



