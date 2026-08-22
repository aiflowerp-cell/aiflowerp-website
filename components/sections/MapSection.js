/*
 * FILE: components/sections/MapSection.js
 * PURPOSE:
 * Location and physical studio section featuring business address, hours, directions link, and embedded Google Map.
 *
 * RESPONSIBILITIES:
 * - Render physical address and operating hours
 * - Provide external Google Maps directions link if configured
 * - Embed responsive Google Maps iframe safely with fallback
 * - Safely omit the section if no address or map exists
 *
 * DEPENDENCIES:
 * - @/config/business
 * - @/content/siteContent
 * - @/components/ui/Button
 *
 * NOTES:
 * - Completely client-agnostic; no hardcoded studio names or city claims.
 */

import { business } from "@/config/business";
import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function MapSection() {
  if (!business.map?.embedUrl && !business.address) {
    return null;
  }

  const mapCopy = content.mapSection || {};
  const eyebrow = mapCopy.eyebrow || "Find us";
  const title = mapCopy.title || "Our Location";
  const iframeTitle = mapCopy.iframeTitle || `${business.name} location map`;
  const ctaText = mapCopy.ctaText || "Get directions";

  return (
    <section className="map-section section">
      <div className="container map-grid">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
          {business.address && <p>{business.address}</p>}
          {business.workingHours && <p>{business.workingHours}</p>}
          {business.map?.directionsUrl && (
            <Button href={business.map.directionsUrl} variant="text">
              {ctaText} <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
        {business.map?.embedUrl && (
          <iframe title={iframeTitle} src={business.map.embedUrl} loading="lazy" />
        )}
      </div>
    </section>
  );
}
