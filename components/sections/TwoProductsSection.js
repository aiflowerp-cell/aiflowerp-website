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
 * - Equal visual prominence with coordinated brand colors (#2563EB Blue & #059669 Green)
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
              <div className="product-frame-bar">
                <div className="erp-dots" aria-hidden="true">
                  <span className="erp-dot" />
                  <span className="erp-dot" />
                  <span className="erp-dot" />
                </div>
                <span className="product-frame-title">erp.aiflowerp.in</span>
                <span className="product-frame-status">● Live System</span>
              </div>
              <div className="product-frame-image">
                <Image
                  src={erp.image}
                  alt="ai flow ERP Executive Dashboard"
                  width={960}
                  height={540}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
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
              <h3 className="product-card-title is-kinny">
                <BrandText text={shopping.name || "Kinny Cart"} />
              </h3>

              {/* 3. Short description */}
              <p className="product-card-desc">{shopping.description}</p>
            </div>

            {/* 4. Authentic product screenshot */}
            <div className="product-screen-frame">
              <div className="product-frame-bar">
                <div className="erp-dots" aria-hidden="true">
                  <span className="erp-dot" />
                  <span className="erp-dot" />
                  <span className="erp-dot" />
                </div>
                <span className="product-frame-title">shop.aiflowerp.in</span>
                <span className="product-frame-status is-kinny">● Live Platform</span>
              </div>
              <div className="product-frame-image">
                <Image
                  src={shopping.image}
                  alt="Kinny Cart Digital Commerce Storefront"
                  width={960}
                  height={540}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
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
                  <BrandText text={shopping.ctaText} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
