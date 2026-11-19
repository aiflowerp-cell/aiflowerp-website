/*
 * FILE: components/sections/PlatformPreviewSection.js
 * PURPOSE:
 * Section 6: Product Screenshots / Platform Preview.
 *
 * RESPONSIBILITIES:
 * - Render interactive system selector between ai flow ERP and Kinny Cart
 * - Render tabbed navigation for individual authentic module screens
 * - Display authentic screenshots inside modern browser frames with verified captions
 * - Provide direct live launch links for both applications
 *
 * DEPENDENCIES:
 * - react (useState)
 * - next/image
 * - @/content/siteContent
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/content/siteContent";
import { BrandText } from "@/components/ui/BrandText";

export function PlatformPreviewSection() {
  const { platformPreview } = content;
  if (!platformPreview || !platformPreview.systems) return null;

  const [activeSystemId, setActiveSystemId] = useState("erp");
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  const currentSystem =
    platformPreview.systems.find((s) => s.id === activeSystemId) ||
    platformPreview.systems[0];

  const screens = currentSystem.screens || [];
  const currentScreen = screens[activeScreenIdx] || screens[0];

  const handleSystemChange = (systemId) => {
    setActiveSystemId(systemId);
    setActiveScreenIdx(0);
  };

  return (
    <section className="section platform-preview-section">
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
          {platformPreview.systems.map((sys) => (
            <button
              key={sys.id}
              type="button"
              role="tab"
              aria-selected={activeSystemId === sys.id}
              className={`preview-system-btn ${activeSystemId === sys.id ? "is-active" : ""}`}
              onClick={() => handleSystemChange(sys.id)}
            >
              <span className="preview-system-btn-title">
                <BrandText text={sys.name} />
              </span>
              <span className="preview-system-btn-badge">{sys.badge}</span>
            </button>
          ))}
        </div>

        {/* Screen Switcher Pills */}
        <div className="preview-screens-nav" role="tablist" aria-label="Module Screen Tabs">
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
              <span><BrandText text={screen.title} /></span>
            </button>
          ))}
        </div>

        {/* Browser Frame Showcase */}
        <div className="preview-browser-frame erp-preview-frame">
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
              className={`preview-frame-cta ${currentSystem.id === "kinny-cart" || currentSystem.id === "shopping" ? "is-kinny" : ""}`}
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
                  width={1400}
                  height={800}
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
                  <span className="preview-badge-verified">✓ Verified Authentic Screen</span>
                  <p className="preview-caption-text">
                    <BrandText text={currentScreen.summary} />
                  </p>
                </div>
                <div className="preview-caption-links">
                  <span className="preview-system-tag">{currentSystem.badge}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
