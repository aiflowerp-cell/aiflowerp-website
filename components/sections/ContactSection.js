import { business } from "@/config/business";
import { telUrl, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section className="contact-band">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">Let’s make a room of it</p>
          <h2>Have a space in mind?</h2>
          <p>Bring us your questions, measurements, or simply a photograph. We’ll help you find a good place to begin.</p>
        </div>
        <div className="contact-actions">
          <Button href={whatsappUrl(business.whatsapp)}>Start on WhatsApp</Button>
          <a href={telUrl(business.phone)} className="contact-phone">
            {business.phone} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
