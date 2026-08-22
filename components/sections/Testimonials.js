/*
 * FILE: components/sections/Testimonials.js
 * PURPOSE:
 * Customer reviews and testimonials blockquote grid section.
 *
 * RESPONSIBILITIES:
 * - Render section eyebrow and heading from content configuration
 * - Iterate over customer review quotes with names and location details
 * - Safely omit the entire section if no testimonials exist
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 *
 * NOTES:
 * - Safe optional section; returns null if testimonials array is empty.
 */

import { content } from "@/content/siteContent";

export function Testimonials() {
  if (!content.testimonials || content.testimonials.length === 0) {
    return null;
  }

  const sectionContent = content.testimonialsSection || {};
  const eyebrow = sectionContent.eyebrow || "Testimonials";
  const title = sectionContent.title || "What our clients say";

  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="section-heading">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && <h2>{title}</h2>}
        </div>
        <div className="testimonial-grid">
          {content.testimonials.map((item) => (
            <blockquote key={item.name}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                {item.detail && <span>{item.detail}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
