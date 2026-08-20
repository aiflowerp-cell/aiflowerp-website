import { business } from "@/config/business";
import { Button } from "@/components/ui/Button";

export function MapSection() {
  return (
    <section className="map-section section">
      <div className="container map-grid">
        <div>
          <p className="eyebrow">Find the studio</p>
          <h2>Come see things in person.</h2>
          <p>{business.address}</p>
          <p>{business.workingHours}</p>
          <Button href={business.map.directionsUrl} variant="text">
            Get directions <span aria-hidden="true">↗</span>
          </Button>
        </div>
        <iframe title="Map showing our Jaipur studio" src={business.map.embedUrl} loading="lazy" />
      </div>
    </section>
  );
}
