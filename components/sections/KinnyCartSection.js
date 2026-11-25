/*
 * FILE: components/sections/KinnyCartSection.js
 * PURPOSE:
 * Dedicated kinny cart Production UI Showcase in Platform Previews area.
 *
 * RESPONSIBILITIES:
 * - Render authentic kinny cart brand lockup and verified corporate presentation
 * - Heading: "Your Neighborhood. Your Stores. Your Shopping."
 * - Description: "Discover trusted local stores, explore authentic product catalogues and manage everyday shopping through one simple mobile-first platform."
 * - Five verified stages:
 *   01 — Welcome
 *   02 — Discover Nearby Stores
 *   03 — Explore Merchant Categories
 *   04 — Browse & Shop Products
 *   05 — Mera Samaan Cart & Checkout
 * - Dual showcase presentation:
 *   1. 3 Prominent Phones Core Visual with connected supporting stages
 *   2. Interactive 5-Stage Deep-Dive Explorer with authentic screenshots, feature headings, descriptions, and highlights
 * - 100% authentic production screenshots from shop.aiflowerp.in
 * - Strict branding: "kinny cart" (#059669 green) and "ai flow" (#2563EB blue)
 * - Zero horizontal overflow across mobile (360px, 390px), tablet (768px), and desktop (1366px, 1920px)
 *
 * DEPENDENCIES:
 * - react (useState)
 * - next/image
 * - @/content/siteContent
 * - @/config/business
 * - @/components/ui/BrandText
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { content } from "@/content/siteContent";
import { business } from "@/config/business";
import { BrandText } from "@/components/ui/BrandText";

export function KinnyCartSection() {
  const { kinnyCartSection } = content;
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [viewMode, setViewMode] = useState("overview"); // 'overview' | 'detail'

  if (!kinnyCartSection) return null;

  const stages = kinnyCartSection.stages || [];
  const currentStage = stages[activeStageIdx] || stages[0];
  const shoppingUrl = business.shoppingUrl || kinnyCartSection.secondaryCta?.href || "https://shop.aiflowerp.in/";

  return (
    <section className="section kinnycart-section" id="kinnycart">
      <div className="container">
        {/* Section Header with Approved Brand Lockup */}
        <div className="kinnycart-header align-center">
          <div className="kinnycart-brand-badge-row">
            <Image
              src={kinnyCartSection.logo || "/images/brands/kinnycart/kinnycart-logo-horizontal.png"}
              alt="kinny cart"
              width={240}
              height={70}
              className="kinnycart-section-logo"
              priority
            />
          </div>

          <p className="eyebrow kinnycart-eyebrow">
            {kinnyCartSection.eyebrow || "DIGITAL COMMERCE PLATFORM · PRODUCTION UI SHOWCASE"}
          </p>

          <h2 className="kinnycart-title">
            {kinnyCartSection.title || "Your Neighborhood. Your Stores. Your Shopping."}
          </h2>

          <p className="section-lead kinnycart-lead">
            <BrandText
              text={
                kinnyCartSection.description ||
                "Discover trusted local stores, explore authentic product catalogues and manage everyday shopping through one simple mobile-first platform."
              }
            />
          </p>
        </div>

        {/* View Mode Switcher / Stage Navigation */}
        <div className="kinnycart-nav-wrapper">
          <div className="kinnycart-mode-toggle" role="tablist" aria-label="Showcase View Modes">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "overview"}
              className={`kinnycart-mode-btn ${viewMode === "overview" ? "is-active" : ""}`}
              onClick={() => setViewMode("overview")}
            >
              <span className="mode-btn-dot" />
              <span>Core Shopping Journey (3 Live Phones)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "detail"}
              className={`kinnycart-mode-btn ${viewMode === "detail" ? "is-active" : ""}`}
              onClick={() => setViewMode("detail")}
            >
              <span className="mode-btn-dot" />
              <span>Detailed 5-Stage Explorer</span>
            </button>
          </div>

          {viewMode === "detail" && (
            <div className="kinnycart-stage-pills" role="tablist" aria-label="Five Shopping Stages">
              {stages.map((stage, idx) => (
                <button
                  key={stage.id || idx}
                  type="button"
                  role="tab"
                  aria-selected={activeStageIdx === idx}
                  className={`kinnycart-stage-pill ${activeStageIdx === idx ? "is-active" : ""}`}
                  onClick={() => setActiveStageIdx(idx)}
                >
                  <span className="stage-pill-num">{stage.number}</span>
                  <span className="stage-pill-label">{stage.shortTitle || stage.title}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MAIN VISUAL: Mode A — Overview (3 Prominent Phones Together) */}
        {viewMode === "overview" && (
          <div className="kinnycart-showcase-stage" id="kinnycart-overview">
            <div className="kinnycart-stage-topbar">
              <div className="kinnycart-stage-meta">
                <span className="kinnycart-status-dot-pulse" aria-hidden="true" />
                <span className="kinnycart-stage-status">Verified Production Screenshots • Light Mode</span>
                <span className="kinnycart-stage-sep">•</span>
                <span className="kinnycart-stage-domain">shop.aiflowerp.in</span>
              </div>
              <a
                href={shoppingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kinnycart-topbar-link"
              >
                Open <BrandText text="kinny cart" /> ↗
              </a>
            </div>

            {/* 3 Prominent Phones Visual Canvas */}
            <div className="kinnycart-phones-viewport">
              <Image
                src={kinnyCartSection.showcaseImage || "/images/shopping/three-phones-showcase.png"}
                alt="kinny cart Mobile Commerce Showcase — Store Discovery, FMCG Product Catalogue, and Mera Samaan Cart"
                width={1200}
                height={760}
                priority
                className="kinnycart-phones-img"
              />
            </div>

            {/* Connected Supporting Section: The Remaining Stages */}
            <div className="kinnycart-connected-section">
              <div className="kinnycart-connected-header">
                <span className="kinnycart-connected-tag">CONNECTED 5-STAGE ARCHITECTURE</span>
                <h3 className="kinnycart-connected-title">Complete Mobile Commerce Journey</h3>
                <p className="kinnycart-connected-desc">
                  Explore how <BrandText text="kinny cart" /> seamlessly guides consumers from first arrival to local store fulfillment.
                </p>
              </div>

              <div className="kinnycart-connected-grid">
                {stages.map((st, idx) => (
                  <div
                    key={st.id || idx}
                    className={`kinnycart-connected-card ${[1, 3, 4].includes(idx) ? "is-featured" : ""}`}
                    onClick={() => {
                      setActiveStageIdx(idx);
                      setViewMode("detail");
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setActiveStageIdx(idx);
                        setViewMode("detail");
                      }
                    }}
                    title={`Click to explore Stage ${st.number} in detail`}
                  >
                    <div className="connected-card-top">
                      <span className="connected-stage-badge">STAGE {st.number}</span>
                      {[1, 3, 4].includes(idx) && (
                        <span className="connected-featured-pill">Main Showcase Visual</span>
                      )}
                    </div>
                    <h4 className="connected-card-title">{st.title}</h4>
                    <p className="connected-card-sub">{st.subtitle}</p>
                    <p className="connected-card-desc">{st.description}</p>
                    <div className="connected-card-action">
                      <span>Explore stage details</span>
                      <span aria-hidden="true">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MAIN VISUAL: Mode B — Detailed 5-Stage Explorer */}
        {viewMode === "detail" && (
          <div className="kinnycart-showcase-stage kinnycart-detail-stage" id="kinnycart-detail">
            <div className="kinnycart-stage-topbar">
              <div className="kinnycart-stage-meta">
                <span className="kinnycart-status-dot-pulse" aria-hidden="true" />
                <span className="kinnycart-stage-status">
                  Stage {currentStage.number} of 05 • Verified 390×844 Mobile Viewport
                </span>
                <span className="kinnycart-stage-sep">•</span>
                <span className="kinnycart-stage-domain">shop.aiflowerp.in</span>
              </div>
              <a
                href={shoppingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="kinnycart-topbar-link"
              >
                Launch in Live App ↗
              </a>
            </div>

            <div className="kinnycart-detail-layout">
              {/* Left Column: Authentic Smartphone Frame */}
              <div className="kinnycart-detail-phone-col">
                <div className="kinnycart-single-phone-frame">
                  <Image
                    src={currentStage.screen}
                    alt={`kinny cart Stage ${currentStage.number} — ${currentStage.title}`}
                    width={380}
                    height={790}
                    priority
                    className="kinnycart-single-phone-img"
                  />
                </div>
                <div className="kinnycart-single-phone-caption">
                  <span className="kinnycart-stage-chip">{currentStage.stageTag}</span>
                  <span className="kinnycart-stage-name">{currentStage.title}</span>
                </div>
              </div>

              {/* Right Column: Stage Description & Highlights */}
              <div className="kinnycart-detail-info-col">
                <div className="kinnycart-detail-badges">
                  <span className="kinnycart-detail-step-badge">Stage {currentStage.number} / 05</span>
                  <span className="kinnycart-detail-verified-badge">✓ Verified Production UI · Light Mode</span>
                </div>

                <h3 className="kinnycart-detail-title">{currentStage.title}</h3>
                <p className="kinnycart-detail-subtitle">{currentStage.subtitle}</p>

                <p className="kinnycart-detail-description">
                  <BrandText text={currentStage.description} />
                </p>

                <div className="kinnycart-detail-features-box">
                  <p className="kinnycart-features-heading">Stage Highlights</p>
                  <ul className="kinnycart-features-list">
                    {currentStage.highlights?.map((hl, hIdx) => (
                      <li key={hIdx} className="kinnycart-feature-item">
                        <span className="kinnycart-check-icon" aria-hidden="true">✓</span>
                        <span><BrandText text={hl} /></span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stage Stepper Navigation Actions */}
                <div className="kinnycart-detail-actions">
                  <div className="kinnycart-stepper-btns">
                    <button
                      type="button"
                      disabled={activeStageIdx === 0}
                      onClick={() => setActiveStageIdx((prev) => Math.max(0, prev - 1))}
                      className="button button-secondary kinnycart-nav-btn"
                    >
                      ← Previous Stage
                    </button>
                    <button
                      type="button"
                      disabled={activeStageIdx === stages.length - 1}
                      onClick={() => setActiveStageIdx((prev) => Math.min(stages.length - 1, prev + 1))}
                      className="button button-primary kinnycart-nav-btn"
                    >
                      Next Stage →
                    </button>
                  </div>

                  <a
                    href={shoppingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-kinny-primary"
                  >
                    <span>Launch in Live Store ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Capabilities Grid */}
        <div className="kinnycart-capabilities-wrap" id="kinnycart-capabilities">
          <div className="kinnycart-capabilities-header align-center">
            <span className="kinnycart-cap-tag">CORE CAPABILITIES</span>
            <h3 className="kinnycart-cap-title">
              Built for Neighborhood Commerce & Consumer Simplicity
            </h3>
            <p className="kinnycart-cap-lead">
              Every feature is engineered to empower local shopkeepers while delivering a fast, dependable digital shopping experience.
            </p>
          </div>

          <div className="kinnycart-capabilities-grid">
            {kinnyCartSection.capabilities?.map((cap) => (
              <div key={cap.number} className="kinnycart-capability-card">
                <div className="kinnycart-cap-top">
                  <span className="kinnycart-cap-number">{cap.number}</span>
                  <div className="kinnycart-cap-accent-line" />
                </div>
                <h4 className="kinnycart-cap-card-title">{cap.title}</h4>
                <p className="kinnycart-cap-card-desc">
                  <BrandText text={cap.description} />
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section Actions / CTA Row */}
        <div className="button-row kinnycart-cta-row">
          <a
            href={shoppingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-kinny-primary"
          >
            <span>Open <BrandText text="kinny cart" /> ↗</span>
          </a>
          <button
            type="button"
            className="button button-kinny-secondary"
            onClick={() => {
              setViewMode(viewMode === "overview" ? "detail" : "overview");
              const el = document.getElementById("kinnycart");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {viewMode === "overview" ? "Explore All 5 Stages Individually ↓" : "View 3-Phone Core Journey ↑"}
          </button>
        </div>
      </div>
    </section>
  );
}
