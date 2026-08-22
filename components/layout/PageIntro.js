/*
 * FILE: components/layout/PageIntro.js
 * PURPOSE:
 * Reusable hero/header banner primitive for inner page routes.
 *
 * RESPONSIBILITIES:
 * - Render structured page eyebrow, main title, and optional lead description
 * - Apply brand blue formatting to 'ai flow' brand mentions
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Used consistently across About, Services, Products, Gallery, and Contact pages.
 */

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

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h1>{renderFormattedText(title)}</h1>}
        {description && <p className="lead">{renderFormattedText(description)}</p>}
      </div>
    </section>
  );
}

