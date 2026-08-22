/*
 * FILE: components/sections/ServicesSection.js
 * PURPOSE:
 * Capabilities section displaying verified cement ERP modules in modern Light SaaS grid.
 *
 * RESPONSIBILITIES:
 * - Render section top header with configurable eyebrow and title
 * - Iterate over verified capability items in responsive card grid
 * - Support optional preview slice for homepage or full list
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 * - @/components/ui/Button
 *
 * NOTES:
 * - Displays 11 verified ERP modules with cement dealer operational context.
 */

import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function ServicesSection({ preview = false }) {
  if (!content.services || content.services.length === 0) {
    return null;
  }

  const services = preview ? content.services.slice(0, 6) : content.services;
  const sectionContent = content.servicesSection || {};
  const eyebrow = sectionContent.eyebrow || "Core Capabilities";
  const title = sectionContent.title || content.servicesPage?.title || "Verified Capabilities";
  const ctaText = sectionContent.ctaText || "View all capabilities";

  return (
    <section className="services-section section">
      <div className="container">
        <div className="section-top">
          <div>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
          </div>
          {preview && (
            <Button href="/services" variant="text">
              {ctaText} <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
        <div className="capabilities-grid">
          {services.map((service) => (
            <div className="capability-card" key={service.number || service.title}>
              <span className="capability-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

