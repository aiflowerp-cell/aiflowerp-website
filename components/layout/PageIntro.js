/*
 * FILE: components/layout/PageIntro.js
 * PURPOSE:
 * Reusable hero/header banner primitive for inner page routes.
 *
 * RESPONSIBILITIES:
 * - Render structured page eyebrow, main title, and optional lead description
 * - Apply centralized brand blue formatting to 'ai flow' brand mentions
 *
 * DEPENDENCIES:
 * - @/components/ui/BrandText
 *
 * NOTES:
 * - Used consistently across About, Services, Products, Gallery, and Contact pages.
 * - Uses the centralized BrandText renderer for visible "ai flow" brand mentions.
 */

import { BrandText } from "@/components/ui/BrandText";

export function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro">
      <div className="container narrow">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        {title && (
          <h1>
            <BrandText text={title} />
          </h1>
        )}

        {description && (
          <p className="lead">
            <BrandText text={description} />
          </p>
        )}
      </div>
    </section>
  );
}