import { content } from "@/content/siteContent";

export function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Kind words</p>
          <h2>The best part is hearing how a room feels.</h2>
        </div>
        <div className="testimonial-grid">
          {content.testimonials.map((item) => (
            <blockquote key={item.name}>
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
