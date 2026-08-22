/*
 * FILE: components/sections/Hero.js
 * PURPOSE:
 * Landing page hero section featuring headline, background imagery, and configurable call-to-action buttons.
 *
 * RESPONSIBILITIES:
 * - Render home eyebrow, title, and lead copy
 * - Display background hero photography if provided
 * - Render configurable call-to-action buttons from content layer
 * - Render optional hero note badge
 *
 * DEPENDENCIES:
 * - @/components/ui/Button
 * - @/content/siteContent
 *
 * NOTES:
 * - Completely client-agnostic; no hardcoded action labels or niche category notes.
 */

import { Button } from "@/components/ui/Button";
import { content } from "@/content/siteContent";

export function Hero() {
  const { home } = content;
  const ctas = home.heroCtas || [];

  return (
    <section className="hero">
      {home.heroImage && (
        <div className="hero-image" style={{ backgroundImage: `url(${home.heroImage})` }} />
      )}
      <div className="container hero-content">
        {home.eyebrow && <p className="eyebrow">{home.eyebrow}</p>}
        {home.title && <h1>{home.title}</h1>}
        {home.description && <p className="hero-copy">{home.description}</p>}
        {ctas.length > 0 && (
          <div className="button-row">
            {ctas.map((cta) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant || "primary"}>
                {cta.label}
              </Button>
            ))}
          </div>
        )}
      </div>
      {home.heroNote?.text && (
        <div className="hero-note">
          {home.heroNote.number && <>{home.heroNote.number} </>}
          <span>{home.heroNote.text}</span>
        </div>
      )}
    </section>
  );
}
