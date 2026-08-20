/*
 * FILE: app/gallery/page.js
 * PURPOSE:
 * Portfolio and interior gallery showcase page route.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with gallery copy
 * - Render Gallery masonry/grid layout
 * - Render ContactSection CTA
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (Gallery, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Page intro copy is supplied via content/siteContent.js.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { Gallery } from "@/components/sections/Gallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export default function GalleryPage() {
  const { galleryPage } = content;

  return (
    <>
      <PageIntro
        eyebrow={galleryPage.eyebrow}
        title={galleryPage.title}
        description={galleryPage.description}
      />
      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
      <ContactSection />
    </>
  );
}
