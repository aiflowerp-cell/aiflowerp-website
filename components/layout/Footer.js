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

        <div className="footer-col">
          <p className="footer-label">Our Products</p>
          <div className="footer-links">
            {(business.erpUrl || business.appUrl) && (
              <a
                href={business.erpUrl || business.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-erp"
              >
                <BrandText text="ai flow ERP" /> ↗
              </a>
            )}
            {business.shoppingUrl && (
              <a
                href={business.shoppingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-kinny"
              >
                <BrandText text="Kinny Cart" /> ↗
              </a>
            )}
            <Link href="/products" style={{ color: "var(--muted-dark)" }}>
              Platform Architecture
            </Link>
            <Link href="/contact" style={{ fontWeight: "600", color: "var(--ink)" }}>
              Book a Demo
            </Link>
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


