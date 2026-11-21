/*
 * FILE: components/layout/Footer.js
 * PURPOSE:
 * Structured 4-column Light SaaS website footer component.
 *
 * RESPONSIBILITIES:
 * - Render brand column with factual positioning
 * - Render Explore column (Home, Capabilities, Platform, About, Contact)
 * - Render ERP column (Open ERP, Book a Demo)
 * - Render Contact column with verified email only
 * - Render compact copyright notice
 *
 * DEPENDENCIES:
 * - next/link
 * - @/config/business
 *
 * NOTES:
 * - Clean Light SaaS visual presentation with verified data only.
 */

import Link from "next/link";
import Image from "next/image";
import { business, navigation } from "@/config/business";
import { BrandText } from "@/components/ui/BrandText";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col-brand">
          <Link className="footer-brand" href="/">
            <BrandText text={business.name} />
          </Link>
          <p className="footer-brand-desc">
            Complete Business & Commerce Solutions. One parent technology brand offering two specialized platforms for enterprise management and digital commerce.
          </p>
        </div>

        <div className="footer-col">
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-col footer-col-products">
          <p className="footer-label">Our Products</p>
          <div className="footer-links footer-product-architecture">
            {/* Product 01: ai flow ERP */}
            <div className="footer-product-item">
              <a
                href={business.erpUrl || business.appUrl || "https://erp.aiflowerp.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-erp"
              >
                <span className="footer-product-badge-dot is-erp" aria-hidden="true" />
                <BrandText text="ai flow ERP" /> ↗
              </a>
              <span className="footer-product-sub">Enterprise Business Management System</span>
            </div>

            {/* Product 02: KinnyCart */}
            <div className="footer-product-item">
              <a
                href={business.shoppingUrl || "https://shop.aiflowerp.in/"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-kinny"
              >
                <Image
                  src="/images/brands/kinnycart/kinnycart-storefront-symbol.png"
                  alt=""
                  width={14}
                  height={14}
                  className="footer-kinny-icon"
                  aria-hidden="true"
                />
                <span>KinnyCart ↗</span>
              </a>
              <span className="footer-product-sub">Digital Commerce Platform</span>
            </div>

            <div className="footer-product-meta-links">
              <Link href="/products" className="footer-sub-link">
                Platform Architecture
              </Link>
              <span className="footer-meta-sep">•</span>
              <Link href="/contact" className="footer-sub-link is-demo">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-label">Inquiries</p>
          <div className="footer-links">
            {business.email && (
              <a href={`mailto:${business.email}`} className="footer-email">
                {business.email}
              </a>
            )}
            <span style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>
              Enterprise & Commerce Platforms
            </span>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} <BrandText text={business.name} />. All rights reserved.</span>
      </div>
    </footer>
  );
}


