/*
 * FILE: components/sections/AboutSection.js
 * PURPOSE:
 * Brand story and showroom presentation section with preview mode support.
 *
 * RESPONSIBILITIES:
 * - Display framed brand photography with optional establishment badge if provided
 * - Render brand story heading, eyebrow, and editorial paragraphs
 * - Provide optional 'More about us' link in preview mode
 * - Support showHeading toggle to prevent duplicate headings on inner About page
 * - Gracefully adapt layout when no client image is provided
 *
 * DEPENDENCIES:
 * - @/components/ui/Button
 * - @/config/business
 * - @/content/siteContent
 *
 * NOTES:
 * - Completely client-agnostic; no hardcoded founding years, claims, or demo imagery.
 */

import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export function AboutSection({ preview = false, showHeading = true }) {
  const { about } = content;
  const badgeText = about.badge || (business.foundedYear ? `Est. ${business.foundedYear}` : null);

  return (
    <section className={`about-section section ${preview ? "about-preview" : ""}`}>
      <div className={`container about-grid ${!about.image ? "about-no-image" : ""}`}>
        {about.image && (
          <div className="image-frame about-image" style={{ backgroundImage: `url(${about.image})` }}>
            {badgeText && <span>{badgeText}</span>}
          </div>
        )}
        <div className="about-copy">
          {showHeading && about.eyebrow && <p className="eyebrow">{about.eyebrow}</p>}
          {showHeading && about.title && <h2>{about.title}</h2>}
          {about.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {preview && (
            <Button href="/about" variant="text">
              More about us <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
