/*
 * FILE: components/layout/PageIntro.js
 * PURPOSE:
 * Reusable hero/header banner primitive for inner page routes.
 *
 * RESPONSIBILITIES:
 * - Render structured page eyebrow, main title, and optional lead description
 *
 * DEPENDENCIES:
 * - None
 *
 * NOTES:
 * - Used consistently across About, Services, Products, Gallery, and Contact pages.
 */

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
      </div>
    </section>
  );
}
