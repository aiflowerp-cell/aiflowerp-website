import { content } from "@/content/siteContent";
import { Button } from "@/components/ui/Button";

export function ServicesSection({ preview = false }) {
  const services = preview ? content.services.slice(0, 3) : content.services;
  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-top">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>Good spaces start with good advice.</h2>
          </div>
          {preview && (
            <Button href="/services" variant="text">
              View all services <span aria-hidden="true">↗</span>
            </Button>
          )}
        </div>
        <div className="service-list">
          {services.map((service) => (
            <div className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
