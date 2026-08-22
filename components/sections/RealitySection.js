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
 *
 * NOTES:
 * - Answers Question 5: What specific problems does it solve?
 */

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
            {reality.eyebrow && <p className="eyebrow">{reality.eyebrow}</p>}
            {reality.title && <h2>{reality.title}</h2>}
            {reality.description && <p className="section-lead">{reality.description}</p>}
          </div>
        </div>
        <div className="reality-grid">
          {reality.challenges.map((challenge, index) => (
            <div className="reality-card" key={challenge.title || index}>
              <span className="reality-badge">{challenge.number || String(index + 1).padStart(2, "0")}</span>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
