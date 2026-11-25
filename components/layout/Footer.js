/*
 * FILE: components/layout/Footer.js
 * PURPOSE:
 * Structured 4-column Light corporate footer component matching design reference.
 *
 * RESPONSIBILITIES:
 * - Column 1: ai flow brand wordmark and corporate positioning statement
 * - Column 2: EXPLORE navigation links (Home, Products, Platform, About, Contact)
 * - Column 3: OUR PRODUCTS:
 *             1. KinnyCart in red #DC2626 preceded by small solid red circular dot
 *             2. Subtle horizontal product divider
 *             3. ai flow in blue #2563EB and ERP in black #111827 preceded by small solid blue circular dot
 *             4. Supporting architecture & demo links (Platform Architecture ↗ | Book a Demo ↗)
 * - Column 4: INQUIRIES:
 *             1. Clickable email with blue envelope SVG icon
 *             2. Supporting platform label
 *             3. Outlined CTA button: Book a Demo / Send Enquiry →
 * - Subtle horizontal divider above copyright bottom bar
 * - Copyright: © 2026 ai flow. All rights reserved.
 *
 * DEPENDENCIES:
 * - next/link
 * - @/config/business
 */

import Link from "next/link";
import { business, navigation } from "@/config/business";

export function Footer() {
  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/#products" },
    { label: "Platform", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* Column 1 — ai flow Brand Identity */}
        <div className="footer-col footer-col-brand">
          <Link className="footer-brand" href="/">
            <span className="footer-brand-aiflow">ai flow</span>
          </Link>
          <p className="footer-brand-desc">
            Complete Business &amp; Commerce Solutions. One parent technology brand offering two specialized platforms for enterprise management and digital commerce.
          </p>
        </div>

        {/* Column 2 — EXPLORE */}
        <div className="footer-col footer-col-explore">
          <p className="footer-label">EXPLORE</p>
          <div className="footer-links">
            {exploreLinks.map((item) => (
              <Link key={item.label} href={item.href} className="footer-nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3 — OUR PRODUCTS */}
        <div className="footer-col footer-col-products">
          <p className="footer-label">OUR PRODUCTS</p>
          <div className="footer-product-architecture">
            {/* Product 01: KinnyCart (Red #DC2626, Capital K and C, No Space) */}
            <div className="footer-product-item">
              <a
                href={business.shoppingUrl || "https://shop.aiflowerp.in"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-kinnycart"
              >
                <span className="footer-dot is-red" aria-hidden="true" />
                <span className="footer-product-title-kinny">KinnyCart</span>
                <span className="footer-external-arrow" aria-hidden="true">↗</span>
              </a>
              <span className="footer-product-sub">Digital Commerce Platform</span>
            </div>

            {/* Subtle Horizontal Divider */}
            <div className="footer-product-divider" aria-hidden="true" />

            {/* Product 02: ai flow ERP (ai flow in Blue #2563EB, ERP in Black #111827) */}
            <div className="footer-product-item">
              <a
                href={business.erpUrl || business.appUrl || "https://erp.aiflowerp.in"}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-product-link is-aiflow-erp"
              >
                <span className="footer-dot is-blue" aria-hidden="true" />
                <span className="footer-product-title-erp">
                  <span className="brand-blue">ai flow</span>{" "}
                  <span className="brand-black">ERP</span>
                </span>
                <span className="footer-external-arrow" aria-hidden="true">↗</span>
              </a>
              <span className="footer-product-sub">Enterprise Business Management System</span>
            </div>

            {/* Sub-links below products */}
            <div className="footer-product-meta-links">
              <Link href="/products" className="footer-sub-link">
                Platform Architecture ↗
              </Link>
              <span className="footer-meta-sep" aria-hidden="true">|</span>
              <Link href="/contact" className="footer-sub-link">
                Book a Demo ↗
              </Link>
            </div>
          </div>
        </div>

        {/* Column 4 — INQUIRIES */}
        <div className="footer-col footer-col-inquiries">
          <p className="footer-label">INQUIRIES</p>
          <div className="footer-inquiries-content">
            {business.email && (
              <a href={`mailto:${business.email}`} className="footer-email-row">
                <svg
                  className="footer-email-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="footer-email-text">{business.email}</span>
              </a>
            )}
            <span className="footer-inquiries-sub">
              Enterprise &amp; Commerce Platforms
            </span>

            <Link href="/contact" className="footer-inquiries-cta">
              Book a Demo / Send Enquiry →
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="container footer-bottom-wrap">
        <div className="footer-bottom-divider" aria-hidden="true" />
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 <span className="brand-blue-bold">ai flow</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
