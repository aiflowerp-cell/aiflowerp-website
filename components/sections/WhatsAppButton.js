import { business } from "@/config/business";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a className="whatsapp-button" href={whatsappUrl(business.whatsapp)} aria-label="Chat with us on WhatsApp">
      <span aria-hidden="true">◌</span> WhatsApp
    </a>
  );
}
