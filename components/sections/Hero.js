/*
 * FILE: components/sections/Hero.js
 * PURPOSE:
 * Dual-Product Corporate Hero Section for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render corporate dual-product positioning:
 *   - Eyebrow: ONE PLATFORM · TWO POWERFUL SYSTEMS
 *   - Main Heading: Complete Business & Commerce Solutions
 *   - Subheading: Run your business, manage operations and connect with customers through intelligent digital solutions.
 *   - Supporting Hindi text: व्यापार प्रबंधन से लेकर डिजिटल खरीदारी तक — एक ही टेक्नोलॉजी प्लेटफॉर्म पर।
 *   - Primary CTA: Explore Our Products
 *   - Secondary CTA: Book a Demo
 * - Render an interactive dual-system browser frame presenting authentic screenshots for:
 *   1. ai flow ERP (Business Management System)
 *   2. Kinny Cart (Digital Commerce Platform)
 * - Provide direct launch pills to both live production applications
 *
 * DEPENDENCIES:
 * - react (useState)
 * - next/image
 * - @/components/ui/Button
 * - @/config/business
 * - @/content/siteContent
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BrandText } from "@/components/ui/BrandText";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export function Hero() {
  const { home } = content;
  const ctas = home.heroCtas || [];
  const [activeSystem, setActiveSystem] = useState("erp"); // 'erp' | 'kinny'

  const systems = [
    {
      id: "erp",
      label: "ai flow ERP",
      category: "Business Management System",
      image: home.heroErpImage || "/images/erp/dashboard.png",
      alt: "ai flow ERP Executive Dashboard",
      url: business.erpUrl || "https://erp.aiflowerp.in/",
      tag: "Cement & Distribution ERP",
      ctaText: "Open ai flow ERP ↗",
      isKinny: false,
    },
    {
      id: "kinny",
      label: "Kinny Cart",
      category: "Digital Commerce Platform",
      image: home.heroShoppingImage || "/images/shopping/shopping-hero.png",
      alt: "Kinny Cart Digital Commerce Platform",
      url: business.shoppingUrl || "https://shop.aiflowerp.in/",
      tag: "Kinny Cart Online Store",
      ctaText: "Launch Kinny Cart ↗",
      isKinny: true,
    },
  ];

  const currentSystem = systems.find((s) => s.id === activeSystem) || systems[0];

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

          {home.hindiText && (
            <div className="hero-hindi">
              <span className="hero-hindi-accent" aria-hidden="true">“</span>
              <p>{home.hindiText}</p>
            </div>
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
                  {cta.variant === "primary" ? " ↓" : ""}
                </Button>
              ))}
            </div>
          )}

          <div className="hero-trust-row">
            <span className="hero-trust-item">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span>Two Independent Live Systems</span>
            </span>
            <span className="hero-trust-divider">•</span>
            <span className="hero-trust-item">Enterprise Grade</span>
            <span className="hero-trust-divider">•</span>
            <span className="hero-trust-item">Verified Production</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-dual-frame erp-preview-frame">
            <div className="erp-frame-header hero-system-switcher-header">
              <div className="erp-dots" aria-hidden="true">
                <span className="erp-dot" />
                <span className="erp-dot" />
                <span className="erp-dot" />
              </div>

              <div className="hero-system-toggle-group" role="tablist" aria-label="Product Showcase Selector">
                {systems.map((sys) => (
                  <button
                    key={sys.id}
                    type="button"
                    role="tab"
                    aria-selected={activeSystem === sys.id}
                    className={`hero-system-tab ${activeSystem === sys.id ? "is-active" : ""}`}
                    onClick={() => setActiveSystem(sys.id)}
                  >
                    <span className="hero-tab-bullet" />
                    <span><BrandText text={sys.label} /></span>
                  </button>
                ))}
              </div>

              <a
                href={currentSystem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-frame-external-link"
                title={`Open ${currentSystem.label} in new tab`}
              >
                {currentSystem.id === "erp" ? "Launch ERP ↗" : "Launch Kinny Cart ↗"}
              </a>
            </div>

            <div className="erp-frame-body hero-preview-body">
              <div className="hero-image-wrapper">
                <Image
                  key={currentSystem.id}
                  src={currentSystem.image}
                  alt={currentSystem.alt}
                  width={1200}
                  height={760}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "8px",
                  }}
                />
              </div>

              <div className="hero-frame-caption">
                <div className="hero-caption-left">
                  <span className="hero-caption-category">{currentSystem.category}</span>
                  <span className="hero-caption-tag"><BrandText text={currentSystem.tag} /></span>
                </div>
                <a
                  href={currentSystem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hero-caption-cta ${currentSystem.isKinny ? "is-kinny" : ""}`}
                >
                  <BrandText text={currentSystem.ctaText} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
