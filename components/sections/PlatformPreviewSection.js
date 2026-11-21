/*
 * FILE: components/sections/PlatformPreviewSection.js
 * PURPOSE:
 * Section 6: AI FLOW ERP — LIVE PRODUCT SHOWCASE
 *
 * RESPONSIBILITIES:
 * - Render authentic enterprise showcase featuring photorealistic Platinum Silver Laptop
 * - Strict information hierarchy:
 *   1. Eyebrow: AI FLOW ERP — LIVE PRODUCT SHOWCASE
 *   2. Main Heading: See Your Entire Business in One Connected Dashboard
 *   3. Supporting Description: Explore how ai flow ERP manages purchases, sales...
 *   4. Seven ERP Tabs: Dashboard | Purchase | Sales | Stock Summary | Transit Stock | Lifting | Reports & Analytics
 *   5. Production / Screenshot Status: Production ERP Screenshots • Verified Light Mode
 *   6. Platinum Silver Laptop: 100% uncropped, full silver keyboard & trackpad, correct screen aspect ratio
 *   7. Selected Module Description: Module badge, verified badge, title, concise summary
 *   8. Launch ERP CTA: Direct link to production ERP application
 * - Maintain identical hardware presentation across all 7 ERP tabs
 * - Balanced desktop visual rhythm at 1366x768 and 1440x900
 * - Zero horizontal overflow on mobile
 *
 * DEPENDENCIES:
 * - react (useState)
 * - next/image
 * - @/content/siteContent
 * - @/components/ui/BrandText
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/content/siteContent";
import { BrandText } from "@/components/ui/BrandText";
import { MasterLaptop } from "@/components/ui/MasterLaptop";

export function PlatformPreviewSection() {
  const { platformPreview } = content;
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  if (!platformPreview || !platformPreview.systems) return null;

  const erpSystem =
    platformPreview.systems.find((s) => s.id === "erp") ||
    platformPreview.systems[0];

  const screens = erpSystem.screens || [];
  const currentScreen = screens[activeScreenIdx] || screens[0];

  const sectionEyebrow = platformPreview.eyebrow || "AI FLOW ERP — LIVE PRODUCT SHOWCASE";
  const sectionTitle = platformPreview.title || "See Your Entire Business in One Connected Dashboard";
  const sectionDescription = platformPreview.description || "Explore how ai flow ERP manages purchases, sales, inventory, transit stock, lifting and business analytics through one integrated platform.";

  return (
    <section className="section platform-preview-section" id="platform-preview">
      <div className="container">
        {/* 1. Eyebrow, 2. Main Heading, 3. Supporting Description */}
        <div className="section-heading align-center platform-heading">
          <p className="eyebrow">{sectionEyebrow}</p>
          <h2>{sectionTitle}</h2>
          <p className="section-lead">
            <BrandText text={sectionDescription} />
          </p>
        </div>

        {/* 4. Seven ERP Tabs */}
        <div className="preview-screens-nav" role="tablist" aria-label="Seven Core ERP Modules">
          {screens.map((screen, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeScreenIdx === idx}
              className={`preview-screen-pill ${activeScreenIdx === idx ? "is-active" : ""}`}
              onClick={() => setActiveScreenIdx(idx)}
            >
              <span className="screen-pill-dot" />
              <span><BrandText text={screen.tabLabel || screen.title} /></span>
            </button>
          ))}
        </div>

        {/* 5. Production Status, 6. Platinum Silver Laptop, 7. Selected Module Description, 8. Launch ERP CTA */}
        <div className="preview-showcase-stage erp-showcase-stage">
          {/* 5. Production / Screenshot Status */}
          <div className="preview-stage-topbar">
            <div className="preview-stage-meta">
              <span className="preview-status-indicator">
                <span className="preview-pulse-dot" aria-hidden="true" />
                <span>Production ERP Screenshots • Verified Light Mode</span>
              </span>
              <span className="preview-stage-sep">•</span>
              <span className="preview-stage-domain">erp.aiflowerp.in</span>
            </div>
            <a
              href={erpSystem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-stage-cta"
            >
              <BrandText text={erpSystem.ctaLabel || "Open ai flow ERP ↗"} />
            </a>
          </div>

          {/* 6. Platinum Silver Laptop */}
          <div className="preview-laptop-canvas">
            <div className="preview-laptop-viewport">
              <MasterLaptop
                screenSrc={currentScreen.screenOverlay || currentScreen.image}
                alt={`ai flow ERP - ${currentScreen.title} inside Platinum Silver Laptop`}
                priority={activeScreenIdx === 0}
              />
            </div>
          </div>

          {/* 7. Selected Module Description & 8. Launch ERP CTA */}
          <div className="preview-supporting-card">
            <div className="preview-supporting-content">
              <div className="preview-supporting-badge-row">
                <span className="preview-module-tag">
                  Module 0{activeScreenIdx + 1}
                </span>
                <span className="preview-verified-badge">
                  ✓ Verified Desktop Enterprise • Light Mode
                </span>
              </div>
              <h3 className="preview-module-title">
                <BrandText text={currentScreen.title} />
              </h3>
              <p className="preview-module-summary">
                <BrandText text={currentScreen.summary} />
              </p>
            </div>

            <div className="preview-supporting-action">
              <a
                href={erpSystem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="preview-module-btn"
              >
                <span>Launch in ERP</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
