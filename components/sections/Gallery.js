import { content } from "@/content/siteContent";

export function Gallery({ preview = false }) {
  const items = preview ? content.gallery.slice(0, 4) : content.gallery;
  return (
    <div className={`gallery-grid ${preview ? "gallery-preview" : ""}`}>
      {items.map((item, index) => (
        <figure className={`gallery-item gallery-item-${index + 1}`} key={item.title}>
          <div className="gallery-image" style={{ backgroundImage: `url(${item.image})` }} />
          <figcaption>
            <span>{item.category}</span>
            <strong>{item.title}</strong>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
