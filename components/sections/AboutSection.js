import { Button } from "@/components/ui/Button";
import { content } from "@/content/siteContent";

export function AboutSection({ preview = false }) {
  const { about } = content;
  return (
    <section className={`about-section section ${preview ? "about-preview" : ""}`}>
      <div className="container about-grid">
        <div className="image-frame about-image" style={{ backgroundImage: `url(${about.image})` }}>
          <span>Est. 1998</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2>{about.title}</h2>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {preview && (
            <Button href="/about" variant="text">
              More about us <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
