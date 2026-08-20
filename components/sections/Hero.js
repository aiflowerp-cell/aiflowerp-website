import { Button } from "@/components/ui/Button";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export function Hero() {
  const { home } = content;
  return (
    <section className="hero">
      <div className="hero-image" style={{ backgroundImage: `url(${home.heroImage})` }} />
      <div className="container hero-content">
        <p className="eyebrow">{home.eyebrow}</p>
        <h1>{home.title}</h1>
        <p className="hero-copy">{home.description}</p>
        <div className="button-row">
          <Button href="/products">Explore our collection</Button>
          <Button href={`tel:${business.phone.replace(/\s/g, "")}`} variant="light">Talk to a designer</Button>
        </div>
      </div>
      <div className="hero-note">01 <span>Rooms with a point of view</span></div>
    </section>
  );
}
