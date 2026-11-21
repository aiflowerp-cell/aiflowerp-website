/*
 * FILE: components/sections/KinnyCartSection.js
 * PURPOSE:
 * Section 7: Dedicated KinnyCart Product Section.
 *
 * RESPONSIBILITIES:
 * - Render authentic KinnyCart brand identity (Horizontal Logo, Storefront Icon)
 * - Strict visual hierarchy:
 *   1. KinnyCart horizontal brand logo
 *   2. Eyebrow: DIGITAL COMMERCE PLATFORM
 *   3. Heading: Discover a Smarter Way to Shop Locally
 *   4. Supporting description explaining local stores, groceries, and daily essentials
 *   5. Three-phone visual showcase (Storefront Discovery, FMCG Catalogue, Cart)
 *   6. Five verified key capabilities:
 *      - Local Store Discovery
 *      - Merchant Product Catalogue
 *      - Persistent Household Cart — Mera Samaan
 *      - Offers & Transparent Pricing
 *      - Convenient Shopping Experience
 *   7. Primary CTA: Explore KinnyCart
 *   8. Secondary CTA: Open Shopping Platform ↗
 * - Crimson Red, Deep Burgundy, and Golden Yellow visual identity
 * - Fully responsive across 1920x1080 down to 375x667 mobile
 *
 * DEPENDENCIES:
 * - next/image
 * - @/content/siteContent
 * - @/config/business
 */

import Image from "next/image";
import { content } from "@/content/siteContent";
import { business } from "@/config/business";

export function KinnyCartSection() {
  const { kinnyCartSection } = content;
  if (!kinnyCartSection) return null;

  const shoppingUrl = business.shoppingUrl || kinnyCartSection.secondaryCta?.href || "https://shop.aiflowerp.in/";

  return (
    <section className="section kinnycart-section" id="kinnycart">
      <div className="container">
        {/* Section Header with Approved Brand Lockup */}
        <div className="kinnycart-header align-center">
          <div className="kinnycart-brand-badge-row">
            <Image
              src={kinnyCartSection.logo || "/images/brands/kinnycart/kinnycart-logo-horizontal.png"}
              alt="KinnyCart — Digital Commerce Platform"
              width={260}
              height={76}
              className="kinnycart-section-logo"
              priority
            />
          </div>

          <p className="eyebrow kinnycart-eyebrow">
            {kinnyCartSection.eyebrow || "DIGITAL COMMERCE PLATFORM"}
          </p>

          <h2 className="kinnycart-title">
            {kinnyCartSection.title || "Discover a Smarter Way to Shop Locally"}
          </h2>

          <p className="section-lead kinnycart-lead">
            {kinnyCartSection.description ||
              "Connect with trusted neighborhood stores for fresh groceries, household essentials, and daily necessities through an intuitive digital shopping experience."}
          </p>
        </div>

        {/* Central Three-Phone Visual Showcase */}
        <div className="kinnycart-showcase-stage">
          <div className="kinnycart-stage-topbar">
            <div className="kinnycart-stage-meta">
              <span className="kinnycart-status-dot-pulse" aria-hidden="true" />
              <span className="kinnycart-stage-status">Live Customer Experience • Verified Light Mode</span>
              <span className="kinnycart-stage-sep">•</span>
              <span className="kinnycart-stage-domain">shop.aiflowerp.in</span>
            </div>
            <a
              href={shoppingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="kinnycart-topbar-link"
            >
              Open Shopping Platform ↗
            </a>
          </div>

          <div className="kinnycart-phones-viewport">
            <Image
              src={kinnyCartSection.showcaseImage || "/images/shopping/three-phones-showcase.png"}
              alt="KinnyCart Mobile Shopping Application — Storefront, Product Catalogue, and Mera Samaan Cart"
              width={1400}
              height={700}
              priority
              className="kinnycart-phones-img"
            />
          </div>

          <div className="kinnycart-stage-caption">
            <div className="kinnycart-caption-step">
              <span className="kinnycart-step-num">01</span>
              <span className="kinnycart-step-text">Storefront Discovery</span>
            </div>
            <div className="kinnycart-caption-arrow" aria-hidden="true">→</div>
            <div className="kinnycart-caption-step">
              <span className="kinnycart-step-num">02</span>
              <span className="kinnycart-step-text">FMCG Product Catalogue</span>
            </div>
            <div className="kinnycart-caption-arrow" aria-hidden="true">→</div>
            <div className="kinnycart-caption-step">
              <span className="kinnycart-step-num">03</span>
              <span className="kinnycart-step-text">Mera Samaan Cart & Checkout</span>
            </div>
          </div>
        </div>

        {/* Key Capabilities Grid */}
        <div className="kinnycart-capabilities-wrap" id="kinnycart-capabilities">
          <div className="kinnycart-capabilities-header">
            <span className="kinnycart-cap-tag">CORE CAPABILITIES</span>
            <h3 className="kinnycart-cap-title">Built for Neighborhood Commerce & Consumer Simplicity</h3>
          </div>

          <div className="kinnycart-capabilities-grid">
            {kinnyCartSection.capabilities?.map((cap) => (
              <div key={cap.number} className="kinnycart-capability-card">
                <div className="kinnycart-cap-top">
                  <span className="kinnycart-cap-number">{cap.number}</span>
                  <div className="kinnycart-cap-accent-line" />
                </div>
                <h4 className="kinnycart-cap-card-title">{cap.title}</h4>
                <p className="kinnycart-cap-card-desc">{cap.description}</p>
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
            <Image
              src="/images/brands/kinnycart/kinnycart-storefront-symbol.png"
              alt=""
              width={18}
              height={18}
              className="button-kinny-icon"
              aria-hidden="true"
            />
            <span>Open Shopping Platform ↗</span>
          </a>
          <a href="#kinnycart-capabilities" className="button button-kinny-secondary">
            Explore KinnyCart Features ↓
          </a>
        </div>
      </div>
    </section>
  );
}
