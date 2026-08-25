/*
 * FILE: components/sections/RealitySection.js
 * PURPOSE:
 * Problem-solution section addressing the operational realities of cement distribution.
 *
 * RESPONSIBILITIES:
 * - Render section heading (eyebrow, title, lead description)
 * - Render 3 core cement challenge cards (Transit vs Godown Stock, Lifting & Challan Processing, Connected Sales & Ledgers)
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 * - @/components/ui/BrandText
 *
 * NOTES:
 * - Answers Question 5: What specific problems does it solve?
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions.
 */

import { BrandText } from "@/components/ui/BrandText";
import { content } from "@/content/siteContent";

export function RealitySection() {
  const reality = content.realitySection;

  if (!reality || !reality.challenges || reality.challenges.length === 0) {
    return null;
  }

  return (
    <section className="reality-section section">
      <div className="container">
        <div className="section-top">
          <div>
            {reality.eyebrow && (
              <p className="eyebrow">{reality.eyebrow}</p>
            )}

            {reality.title && (
              <h2>
                <BrandText text={reality.title} />
              </h2>
            )}

            {reality.description && (
              <p className="section-lead">
                <BrandText text={reality.description} />
              </p>
            )}
          </div>
        </div>

        <div className="reality-grid">
          {reality.challenges.map((challenge, index) => (
            <div
              className="reality-card"
              key={challenge.title || index}
            >
              <span className="reality-badge">
                {challenge.number || String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                <BrandText text={challenge.title} />
              </h3>

              <p>
                <BrandText text={challenge.description} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}