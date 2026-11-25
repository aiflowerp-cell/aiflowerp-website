/*
 * FILE: components/sections/TwoProductsSection.js
 * PURPOSE:
 * Section 3: Dual Product Presentation (ai flow ERP & Kinny Cart).
 *
 * RESPONSIBILITIES:
 * - Render Product 01: ai flow ERP (Business Management System)
 * - Render Product 02: Kinny Cart (Digital Commerce Platform)
 * - Implement strict 6-part visual hierarchy per product card:
 *   1. Product category
 *   2. Product name
 *   3. Short description
 *   4. Authentic product screenshot
 *   5. Five most important features
 *   6. Clear product CTA
 * - Provide direct live links: https://erp.aiflowerp.in/ & https://shop.aiflowerp.in/
 * - Equal visual prominence with coordinated brand colors (#2563EB Blue & #C80008 Red with Gold accents)
 *
 * DEPENDENCIES:
 * - next/image
 * - @/content/siteContent
 * - @/config/business
 * - @/components/ui/BrandText
 */

import Image from "next/image";
import { content } from "@/content/siteContent";
import { business } from "@/config/business";
import { BrandText } from "@/components/ui/BrandText";
import { MasterLaptop } from "@/components/ui/MasterLaptop";

export function TwoProductsSection() {
  const { twoProducts } = content;
  if (!twoProducts) return null;

  const { erp, shopping } = twoProducts;
  const erpUrl = business.erpUrl || erp.destination || "https://erp.aiflowerp.in/";
  const shoppingUrl = business.shoppingUrl || shopping.destination || "https://shop.aiflowerp.in/";

  return (
    <section id="products" className="section two-products-section">
      <div className="container">
        <div className="section-heading align-center">
          {twoProducts.eyebrow && (
            <p className="eyebrow">{twoProducts.eyebrow}</p>
          )}
          <h2>{twoProducts.title}</h2>
          {twoProducts.description && (
            <p className="section-lead">{twoProducts.description}</p>
          )}
        </div>

        <div className="two-products-grid">
          {/* PRODUCT 01 — ai flow ERP */}
          <div className="product-card product-card-erp">
            <div className="product-card-top">
              {/* 1. Product category */}
              <div className="product-category-row">
                <span className="product-category-badge">{erp.category}</span>
              </div>

              {/* 2. Product name */}
              <h3 className="product-card-title">
                <BrandText text={erp.name || "ai flow ERP"} />
              </h3>

              {/* 3. Short description */}
              <p className="product-card-desc">{erp.description}</p>
            </div>

            {/* 4. Authentic product screenshot */}
            <div className="product-screen-frame">
              <div className="product-device-bar">
                <div className="product-device-badge-row">
                  <span className="product-device-spec-pill">Desktop Enterprise Web Application</span>
                </div>
                <div className="product-device-status-row">
                  <span className="product-device-domain">erp.aiflowerp.in/dashboard</span>
                  <span className="product-device-sep">•</span>
                  <span className="product-device-status-live">
                    <span className="device-pulse-dot" aria-hidden="true" /> Live System · Expanded Navigation
                  </span>
                </div>
              </div>
              <div className="product-frame-image">
                <MasterLaptop
                  screenSrc="/images/erp/screens/screen-dashboard-expanded.png"
                  alt="ai flow ERP Executive Dashboard with Expanded Navigation inside Platinum Silver Laptop"
                  priority
                />
              </div>
            </div>

            <div className="product-card-bottom">
              {/* 5. Five most important features */}
              <div className="product-features-box">
                <p className="product-features-label">Core Capabilities</p>
                <ul className="product-features-list">
                  {erp.highlights.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="product-feature-item">
                      <span className="feature-check-icon" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Clear product CTA */}
              <div className="product-cta-wrap">
                <a
                  href={erpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary product-cta-btn"
                >
                  <BrandText text={erp.ctaText} />
                </a>
              </div>
            </div>
          </div>

          {/* PRODUCT 02 — Kinny Cart */}
          <div className="product-card product-card-kinny">
            <div className="product-card-top">
              {/* 1. Product category */}
              <div className="product-category-row">
                <span className="product-category-badge is-kinny">{shopping.category}</span>
              </div>

              {/* 2. Product name */}
              <div className="product-card-title-row">
                <h3 className="product-card-title is-kinny">
                  <Image
                    src="/images/brands/kinnycart/kinnycart-logo-horizontal.png"
                    alt="kinny cart"
                    width={136}
                    height={40}
                    className="product-card-brand-logo"
                    priority
                  />
                </h3>
              </div>

              {/* 3. Short description */}
              <p className="product-card-desc">{shopping.description}</p>
            </div>

            {/* 4. Exactly THREE Independent Smartphone Frames */}
            <div className="product-three-phones-frame">
              <div className="product-device-bar is-kinny">
                <div className="product-device-badge-row">
                  <span className="product-device-spec-pill is-kinny">Mobile-First Digital Commerce · 3 Live Screens</span>
                </div>
                <div className="product-device-status-row">
                  <span className="product-device-domain">shop.aiflowerp.in</span>
                  <span className="product-device-sep">•</span>
                  <span className="product-device-status-live is-kinny">
                    <span className="device-pulse-dot is-kinny" aria-hidden="true" /> 3 Live Mobile Screens
                  </span>
                </div>
              </div>

              <div className="product-three-phones-grid">
                {/* Mobile 1 — Store Discovery */}
                <div className="product-phone-item">
                  <div className="product-phone-mockup-frame">
                    <Image
                      src="/images/shopping/phone-1-storefront.png"
                      alt="kinny cart Mobile 1 — Store Discovery Home"
                      width={380}
                      height={790}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                  <div className="product-phone-label">
                    <span className="product-phone-tag">Mobile 1</span>
                    <span className="product-phone-title">Store Discovery</span>
                    <span className="product-phone-sub">Nearby Stores · Search</span>
                  </div>
                </div>

                {/* Mobile 2 — Product Catalogue */}
                <div className="product-phone-item">
                  <div className="product-phone-mockup-frame">
                    <Image
                      src="/images/shopping/phone-2-catalogue.png"
                      alt="kinny cart Mobile 2 — FMCG Product Catalogue"
                      width={380}
                      height={790}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                  <div className="product-phone-label">
                    <span className="product-phone-tag">Mobile 2</span>
                    <span className="product-phone-title">Catalogue</span>
                    <span className="product-phone-sub">2-Col · Red + ADD</span>
                  </div>
                </div>

                {/* Mobile 3 — Cart / Checkout */}
                <div className="product-phone-item">
                  <div className="product-phone-mockup-frame">
                    <Image
                      src="/images/shopping/phone-3-cart.png"
                      alt="kinny cart Mobile 3 — Smart Cart & Checkout"
                      width={380}
                      height={790}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                  </div>
                  <div className="product-phone-label">
                    <span className="product-phone-tag">Mobile 3</span>
                    <span className="product-phone-title">Cart / Checkout</span>
                    <span className="product-phone-sub">Steppers · Bill ₹880</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-card-bottom">
              {/* 5. Five most important features */}
              <div className="product-features-box">
                <p className="product-features-label">Core Capabilities</p>
                <ul className="product-features-list">
                  {shopping.highlights.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="product-feature-item">
                      <span className="feature-check-icon is-kinny" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Clear product CTA */}
              <div className="product-cta-wrap">
                <a
                  href={shoppingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-kinny product-cta-btn"
                >
                  <span>Open <BrandText text="kinny cart" /> ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
