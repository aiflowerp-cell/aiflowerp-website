/*
 * FILE: app/gallery/page.js
 * PURPOSE:
 * Portfolio and interior gallery showcase page route.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with gallery copy
 * - Safely render Gallery masonry/grid layout when items exist
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
  const galleryPage = content.galleryPage || {};
  const gallery = content.gallery || [];

  return (
    <>
      <PageIntro
        eyebrow={galleryPage.eyebrow}
        title={galleryPage.title}
        description={galleryPage.description}
      />
      {gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <Gallery />
          </div>
        </section>
      )}
      <ContactSection />
    </>
  );
}
