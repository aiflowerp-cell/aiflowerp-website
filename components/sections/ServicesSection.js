/*
 * FILE: components/sections/ServicesSection.js
 * PURPOSE:
 * Services listing section displaying offerings with numbering, descriptions, and preview toggle.
 *
 * RESPONSIBILITIES:
 * - Render section top header with configurable eyebrow and title
 * - Iterate over services catalog and render numbered items with action indicators
 * - Support truncated slice in preview mode for homepage
 * - Safely handle empty services data
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 * - @/components/ui/Button
 *
 * NOTES:
 * - Completely client-agnostic; copy is driven by content/siteContent.js.
 */

import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function ServicesSection({ preview = false }) {
  if (!content.services || content.services.length === 0) {
    return null;
  }

  const services = preview ? content.services.slice(0, 3) : content.services;
  const sectionContent = content.servicesSection || {};
  const eyebrow = sectionContent.eyebrow || "What we do";
  const title = sectionContent.title || content.servicesPage?.title || "Our Services";
  const ctaText = sectionContent.ctaText || "View all services";

  return (
    <section className="section services-section">
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
        <div className="service-list">
          {services.map((service) => (
            <div className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
