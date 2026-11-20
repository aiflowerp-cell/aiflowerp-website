/*
 * FILE: components/sections/PlatformPreviewSection.js
 * PURPOSE:
 * Section 6: Product Screenshots / Platform Preview.
 *
 * RESPONSIBILITIES:
 * - Render interactive system selector between ai flow ERP (Desktop) and Kinny Cart (Mobile)
 * - Render tabbed navigation for individual authentic module screens with system-specific branding
 * - Display authentic screenshots inside modern frames with verified captions
 * - For ERP: Show main desktop view + 3 supporting desktop register thumbnails (Purchase, Transit, Lifting)
 * - For Kinny Cart: Show authentic 4-smartphone mockup showcase + 4-step consumer journey flow
 * - Provide direct live launch links for both applications
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

export function PlatformPreviewSection() {
  const { platformPreview } = content;
  const [activeSystemId, setActiveSystemId] = useState("erp");
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  if (!platformPreview || !platformPreview.systems) return null;

  const currentSystem =
    platformPreview.systems.find((s) => s.id === activeSystemId) ||
    platformPreview.systems[0];

  const screens = currentSystem.screens || [];
  const currentScreen = screens[activeScreenIdx] || screens[0];
  const isKinny = currentSystem.id === "kinny-cart" || currentSystem.id === "shopping";

  const handleSystemChange = (systemId) => {
    setActiveSystemId(systemId);
    setActiveScreenIdx(0);
  };

  return (
    <section className="section platform-preview-section" id="platform-preview">
      <div className="container">
        <div className="section-heading align-center">
          {platformPreview.eyebrow && (
            <p className="eyebrow">{platformPreview.eyebrow}</p>
          )}
          <h2>{platformPreview.title}</h2>
          {platformPreview.description && (
            <p className="section-lead">
              <BrandText text={platformPreview.description} />
            </p>
          )}
        </div>

        {/* System Selector Tabs */}
        <div className="preview-system-tabs" role="tablist" aria-label="System Preview Selector">
          {platformPreview.systems.map((sys) => {
            const isSysKinny = sys.id === "kinny-cart" || sys.id === "shopping";
            const isSelected = activeSystemId === sys.id;
            return (
              <button
                key={sys.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`preview-system-btn ${isSelected ? "is-active" : ""} ${isSysKinny ? "is-kinny" : ""}`}
                onClick={() => handleSystemChange(sys.id)}
              >
                <span className="preview-system-btn-title">
                  <BrandText text={sys.name} />
                </span>
                <span className="preview-system-btn-badge">{sys.badge}</span>
              </button>
            );
          })}
        </div>

        {/* Screen Switcher Pills */}
        <div className="preview-screens-nav" role="tablist" aria-label="Module Screen Tabs">
          {screens.map((screen, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={activeScreenIdx === idx}
              className={`preview-screen-pill ${activeScreenIdx === idx ? "is-active" : ""} ${isKinny ? "is-kinny" : ""}`}
              onClick={() => setActiveScreenIdx(idx)}
            >
              <span className="screen-pill-dot" />
              <span><BrandText text={screen.title} /></span>
            </button>
          ))}
        </div>

        {/* Primary Showcase Window Frame */}
        <div className={`preview-browser-frame erp-preview-frame ${isKinny ? "is-kinny-frame" : ""}`}>
          <div className="erp-frame-header">
            <div className="erp-dots" aria-hidden="true">
              <span className="erp-dot" />
              <span className="erp-dot" />
              <span className="erp-dot" />
            </div>

            <span className="erp-frame-title">
              <BrandText text={currentSystem.name} />
              <span> — </span>
              <BrandText text={currentScreen?.title} />
            </span>

            <a
              href={currentSystem.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`preview-frame-cta ${isKinny ? "is-kinny" : ""}`}
            >
              <BrandText text={currentSystem.ctaLabel} />
            </a>
          </div>

          <div className="erp-frame-body">
            {currentScreen?.image && (
              <div className="preview-image-container">
                <Image
                  key={`${currentSystem.id}-${activeScreenIdx}`}
                  src={currentScreen.image}
                  alt={`${currentSystem.name} - ${currentScreen.title}`}
                  width={1440}
                  height={810}
                  priority={activeScreenIdx === 0}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}

            {currentScreen?.summary && (
              <div className="preview-caption-bar">
                <div className="preview-caption-info">
                  <span className={`preview-badge-verified ${isKinny ? "is-kinny-badge" : ""}`}>
                    ✓ Verified Authentic Dark Mode Screen
                  </span>
                  <p className="preview-caption-text">
                    <BrandText text={currentScreen.summary} />
                  </p>
                </div>
                <div className="preview-caption-links">
                  <span className={`preview-system-tag ${isKinny ? "is-kinny-tag" : ""}`}>
                    {currentSystem.badge}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ERP SUPPORTING DESKTOP REGISTERS (3 Screens below Main Dashboard) */}
        {!isKinny && screens.length > 1 && (
          <div className="erp-supporting-section">
            <div className="erp-supporting-header">
              <h3 className="erp-supporting-heading">Core Desktop Management Registers</h3>
              <p className="erp-supporting-sub">
                Explore real-time accounting registers for supplier billing, in-transit commodities, and factory dispatch lifting.
              </p>
            </div>
            <div className="erp-supporting-grid">
              {screens.slice(1).map((screen, idx) => {
                const screenIdx = idx + 1;
                const isCardActive = activeScreenIdx === screenIdx;
                return (
                  <div
                    key={screenIdx}
                    role="button"
                    tabIndex={0}
                    className={`erp-supporting-card ${isCardActive ? "is-active" : ""}`}
                    onClick={() => setActiveScreenIdx(screenIdx)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActiveScreenIdx(screenIdx);
                    }}
                  >
                    <div className="erp-supporting-thumb">
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        width={480}
                        height={270}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                    <div className="erp-supporting-info">
                      <span className="erp-supporting-badge">Desktop Enterprise Module</span>
                      <h4 className="erp-supporting-title"><BrandText text={screen.title} /></h4>
                      <p className="erp-supporting-summary"><BrandText text={screen.summary} /></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* KINNY CART 4-STAGE CUSTOMER JOURNEY (Side-by-Side Highlights) */}
        {isKinny && (
          <div className="kinny-journey-section">
            <div className="kinny-journey-header">
              <span className="kinny-journey-kicker">END-TO-END MOBILE COMMERCE ARCHITECTURE</span>
              <h3 className="kinny-journey-heading">Coordinated 4-Screen Consumer Flow</h3>
              <p className="kinny-journey-sub">
                Engineered for neighborhood speed: live merchant discovery, standardized FMCG cataloguing, intuitive smart cart management, and frictionless checkout.
              </p>
            </div>
            <div className="kinny-journey-grid">
              <div
                role="button"
                tabIndex={0}
                className={`kinny-journey-card ${activeScreenIdx === 0 ? "is-active" : ""}`}
                onClick={() => setActiveScreenIdx(0)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveScreenIdx(0);
                }}
              >
                <span className="kinny-journey-step">Step 01</span>
                <h4 className="kinny-journey-title">Live Storefront</h4>
                <p className="kinny-journey-desc">
                  Merchant identity (`JP Kirana & General Store`), quick search bar, category chips, and promotional deals.
                </p>
              </div>

              <div
                role="button"
                tabIndex={0}
                className={`kinny-journey-card ${activeScreenIdx === 2 ? "is-active" : ""}`}
                onClick={() => setActiveScreenIdx(2)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveScreenIdx(2);
                }}
              >
                <span className="kinny-journey-step">Step 02</span>
                <h4 className="kinny-journey-title">FMCG Catalogue</h4>
                <p className="kinny-journey-desc">
                  Two-column product grid with Shan Masala, Fortune Oil, Dhara, Amul Ghee, real pack sizes, and red ADD buttons.
                </p>
              </div>

              <div
                role="button"
                tabIndex={0}
                className={`kinny-journey-card ${activeScreenIdx === 3 ? "is-active" : ""}`}
                onClick={() => setActiveScreenIdx(3)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveScreenIdx(3);
                }}
              >
                <span className="kinny-journey-step">Step 03</span>
                <h4 className="kinny-journey-title">Smart Cart Summary</h4>
                <p className="kinny-journey-desc">
                  3 active items, increment/decrement stepper controls, and transparent bill breakdown (₹319 + ₹20 = ₹339).
                </p>
              </div>

              <div
                role="button"
                tabIndex={0}
                className={`kinny-journey-card ${activeScreenIdx === 3 ? "is-active" : ""}`}
                onClick={() => setActiveScreenIdx(3)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveScreenIdx(3);
                }}
              >
                <span className="kinny-journey-step">Step 04</span>
                <h4 className="kinny-journey-title">One-Click Checkout</h4>
                <p className="kinny-journey-desc">
                  Cash on Delivery / UPI options, Siwan delivery address selection, and one-tap Place Order action.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
