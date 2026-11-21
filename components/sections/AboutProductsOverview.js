/*
 * FILE: components/sections/AboutProductsOverview.js
 * PURPOSE:
 * Structured dual-product and industry validation section for the About Page.
 *
 * RESPONSIBILITIES:
 * - Clarify the distinction between ai flow ERP and kinny cart
 * - Detail how ai flow ERP powers enterprise trade operations
 * - Detail how kinny cart powers digital local commerce
 * - Position cement distribution as an authentic industry deployment benchmark
 *
 * DEPENDENCIES:
 * - next/image
 * - @/config/business
 * - @/components/ui/BrandText
 */

import Image from "next/image";
import { business } from "@/config/business";
import { BrandText } from "@/components/ui/BrandText";

export function AboutProductsOverview() {
  const erpUrl = business.erpUrl || "https://erp.aiflowerp.in/";
  const shoppingUrl = business.shoppingUrl || "https://shop.aiflowerp.in/";

  return (
    <section className="section about-products-overview">
      <div className="container">
        <div className="section-heading align-center">
          <p className="eyebrow">Two Dedicated Products</p>
          <h2>Purpose-Built Architecture for Two Distinct Markets</h2>
          <p className="section-lead">
            Understanding why <BrandText text="ai flow" /> engineers two independent live production systems.
          </p>
        </div>

        <div className="about-products-grid">
          {/* Card 1: ai flow ERP */}
          <div className="about-product-card is-erp">
            <div className="about-card-badge">ENTERPRISE SYSTEM</div>
            <h3 className="about-card-title">
              <BrandText text="ai flow ERP" />
            </h3>
            <p className="about-card-role">Business Management & Operations</p>
            <p className="about-card-desc">
              Engineered for wholesale distribution, heavy trade, and commercial enterprises. It eliminates false inventory assumptions by separating transit stock from physical godowns, captures documents via OCR with operator verification, and posts to double-entry ledgers with document-backed evidence.
            </p>
            <ul className="about-card-points">
              <li>✓ Dual-register transit stock vs physical bag counts</li>
              <li>✓ Automated lifting challan reconciliation</li>
              <li>✓ Company billing ingestion with operator verification</li>
              <li>✓ Financial-year isolation & audit-grade controls</li>
            </ul>
            <div className="about-card-cta">
              <a
                href={erpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Open ai flow ERP ↗
              </a>
            </div>
          </div>

          {/* Card 2: KinnyCart */}
          <div className="about-product-card is-kinny">
            <div className="about-card-badge is-kinny">DIGITAL COMMERCE</div>
            <h3 className="about-card-title is-kinny">
              <BrandText text="KinnyCart" />
            </h3>
            <p className="about-card-role">Local Commerce & Online Storefronts</p>
            <p className="about-card-desc">
              Engineered for local kirana stores, neighborhood grocery merchants, and digital consumers. It allows traditional retailers to launch online storefronts in minutes, manage catalogues with pre-mapped barcodes, and fulfill local orders with transparent pricing and flexible delivery.
            </p>
            <ul className="about-card-points">
              <li>✓ Turnkey merchant storefront launched in minutes</li>
              <li>✓ Global FMCG product catalogue with barcode taxonomies</li>
              <li>✓ Intuitive consumer cart and localized checkout</li>
              <li>✓ Genuine Dark Mode & multilingual interface</li>
            </ul>
            <div className="about-card-cta">
              <a
                href={shoppingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-kinny"
              >
                Open <BrandText text="KinnyCart" /> ↗
              </a>
            </div>
          </div>
        </div>

        {/* Industry Validation Case Study: Cement Distribution */}
        <div className="about-benchmark-card">
          <div className="about-benchmark-content">
            <span className="about-benchmark-tag">OPERATIONAL BENCHMARK</span>
            <h3>The Cement Distribution Validation</h3>
            <p>
              Cement distribution represents one of India&apos;s most demanding supply chain environments: hundreds of metric tonnes arrive via railway rakes, goods remain in transit across plants and sidings, lifting challans dictate physical movements, and trade credit requires immutable accounting.
            </p>
            <p>
              Rather than testing software in idealized conditions, <BrandText text="ai flow" /> was forged against the physical realities of cement dealerships. While cement distribution remains our foundational benchmark and premier industry deployment, the underlying <BrandText text="ai flow" /> architecture is engineered to power diverse business management and digital commerce operations nationwide.
            </p>
          </div>
          <div className="about-benchmark-image">
            <Image
              src="/images/business/railway-rake-unloading.png"
              alt="Cement bags being unloaded at railway freight siding"
              width={800}
              height={448}
              priority
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
