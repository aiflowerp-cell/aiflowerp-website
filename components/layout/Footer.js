/*
 * FILE: components/layout/Footer.js
 * PURPOSE:
 * Global website footer component displaying brand information, exploration links, and contact channels.
 *
 * RESPONSIBILITIES:
 * - Render brand name and configurable site tagline
 * - Render secondary navigation links from business configuration
 * - Render physical address, verified email, and WhatsApp direct contact link
 * - Render dynamic copyright year notice and optional location tagline
 *
 * DEPENDENCIES:
 * - next/link
 * - @/config/business
 * - @/content/siteContent
 * - @/lib/site (whatsappUrl)
 *
 * NOTES:
 * - Fully client-agnostic; displays only verified business data.
 */

import Link from "next/link";
import { business, navigation } from "@/config/business";
import { content } from "@/content/siteContent";
import { whatsappUrl } from "@/lib/site";

export function Footer() {
  const footerContent = content.footer || {};
  const tagline = footerContent.tagline || business.tagline || business.description;
  const exploreLabel = footerContent.exploreLabel || "Explore";
  const contactLabel = footerContent.contactLabel || "Contact";
  const whatsappText = footerContent.whatsappText || "WhatsApp us";

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">{business.name}</Link>
          {tagline && <p>{tagline}</p>}
        </div>
        <div>
          <p className="footer-label">{exploreLabel}</p>
          <div className="footer-links">
            {navigation.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
            {business.appUrl && (
              <a href={business.appUrl} style={{ color: "var(--gold)" }}>
                Open ERP ↗
              </a>
            )}
          </div>
        </div>
        <div>
          <p className="footer-label">{contactLabel}</p>
          {business.address && <p>{business.address}</p>}
          {business.email && (
            <p>
              <a href={`mailto:${business.email}`} className="footer-email">
                {business.email}
              </a>
            </p>
          )}
          {business.whatsapp && (
            <a href={whatsappUrl(business.whatsapp)}>{whatsappText}</a>
          )}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
        {business.locationTagline && <span>{business.locationTagline}</span>}
      </div>
    </footer>
  );
}
