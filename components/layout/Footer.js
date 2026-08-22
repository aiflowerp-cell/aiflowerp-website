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

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col-brand">
          <Link className="footer-brand" href="/">
            {business.name}
          </Link>
          <p className="footer-brand-desc">
            An ERP designed around the real workflow of a cement business.
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
          <p className="footer-label">ERP</p>
          <div className="footer-links">
            {business.appUrl && (
              <a
                href={business.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)", fontWeight: "500" }}
              >
                Open ERP ↗
              </a>
            )}
            <Link href="/contact" style={{ fontWeight: "600", color: "var(--ink)" }}>
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-label">Contact</p>
          <div className="footer-links">
            {business.email && (
              <a href={`mailto:${business.email}`} className="footer-email">
                {business.email}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}


