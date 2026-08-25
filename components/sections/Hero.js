/*
 * FILE: components/sections/Hero.js
 * PURPOSE:
 * Premium B2B SaaS landing hero section for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render left-aligned cement dealer eyebrow, headline, description and CTAs
 * - Render a premium ERP/product visual area on the right
 * - Use a real configured hero image when available
 * - Keep a safe fallback when no image has been configured yet
 * - Preserve centralized content configuration
 *
 * DEPENDENCIES:
 * - next/image
 * - @/components/ui/Button
 * - @/content/siteContent
 *
 * NOTES:
 * - Image source is intentionally read from content.home.heroImage.
 * - No image path is hard-coded in this component.
 * - This allows the actual website image to be configured centrally later.
 */

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/siteContent";

export function Hero() {
  const { home } = content;
  const ctas = home.heroCtas || [];
  const heroImage = home.heroImage || null;

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          {home.eyebrow && (
            <p className="eyebrow hero-eyebrow">
              {home.eyebrow}
            </p>
          )}

          {home.title && (
            <h1 className="hero-title">
              {home.title}
            </h1>
          )}

          {home.description && (
            <p className="hero-copy">
              {home.description}
            </p>
          )}

          {ctas.length > 0 && (
            <div className="button-row hero-cta-row">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant || "primary"}
                >
                  {cta.label}
                  {cta.variant === "primary" ? " →" : ""}
                </Button>
              ))}
            </div>
          )}
        </div>

        <div className="hero-right">
          <div className="erp-preview-frame hero-preview-card">
            <div className="erp-frame-header">
              <div className="erp-dots" aria-hidden="true">
                <span className="erp-dot" />
                <span className="erp-dot" />
                <span className="erp-dot" />
              </div>

              <span className="erp-frame-title">
  <span className="brand-blue">ai flow</span>
  <span> ERP — Executive Dashboard</span>
</span>

              <span
                aria-hidden="true"
                style={{ width: "36px" }}
              />
            </div>

            <div className="erp-frame-body hero-preview-body">
              {heroImage ? (
                <div className="hero-image-wrapper">
                  <Image
                    src={heroImage}
                    alt="ai flow ERP dashboard"
                    width={1200}
                    height={760}
                    priority
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ) : (
                <div className="erp-placeholder-box hero-placeholder-box">
                  <span className="erp-placeholder-tag">
                    ERP Visual Preview
                  </span>

                  <h3 className="erp-placeholder-title">
                    Executive Operations Dashboard
                  </h3>

                  <p className="erp-placeholder-desc">
                    A real ai flow ERP screen will appear here.
                    The image will be connected through the central
                    website content configuration.
                  </p>

                  <code className="erp-placeholder-req">
                    Configuration: content.home.heroImage
                  </code>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}