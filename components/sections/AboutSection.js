/*
 * FILE: components/sections/AboutSection.js
 * PURPOSE:
 * Brand story and product philosophy presentation section for ai flow.
 *
 * RESPONSIBILITIES:
 * - Render brand story heading, eyebrow, and editorial paragraphs
 * - Apply brand blue treatment to 'ai flow' brand mentions
 * - Support showHeading toggle to prevent duplicate headings on inner About page
 * - Support optional preview link
 *
 * DEPENDENCIES:
 * - @/components/ui/Button
 * - @/config/business
 * - @/content/siteContent
 *
 * NOTES:
 * - Reflects the reality of cement distribution and evidence-driven accounting.
 */

import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

function renderFormattedText(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/(ai flow)/g);
  return parts.map((part, index) =>
    part === "ai flow" ? (
      <span key={index} className="brand-blue">
        ai flow
      </span>
    ) : (
      part
    )
  );
}

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
          {showHeading && about.title && <h2>{renderFormattedText(about.title)}</h2>}
          {about.paragraphs?.map((paragraph, index) => (
            <p key={index}>{renderFormattedText(paragraph)}</p>
          ))}
          {preview && (
            <div style={{ marginTop: "24px" }}>
              <Button href="/about" variant="secondary">
                Read our story →
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

