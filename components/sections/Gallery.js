/*
 * FILE: components/sections/Gallery.js
 * PURPOSE:
 * Responsive masonry/grid gallery component displaying portfolio photography.
 *
 * RESPONSIBILITIES:
 * - Render responsive image gallery figures with dynamic background image styles
 * - Render optional category tags and image captions
 * - Support optional preview slice
 * - Safely return null if gallery array is empty
 *
 * DEPENDENCIES:
 * - @/content/siteContent
 *
 * NOTES:
 * - Image items are sourced centrally from content/siteContent.js.
 */

import { content } from "@/content/siteContent";

export function Gallery({ preview = false }) {
  if (!content.gallery || content.gallery.length === 0) {
    return null;
  }

  const items = preview ? content.gallery.slice(0, 4) : content.gallery;
  return (
    <div className={`gallery-grid ${preview ? "gallery-preview" : ""}`}>
      {items.map((item, index) => (
        <figure className={`gallery-item gallery-item-${index + 1}`} key={item.title}>
          <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }} />
          <figcaption>
            {item.category && <span>{item.category}</span>}
            {item.title && <strong>{item.title}</strong>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
