import Link from "next/link";
import { business, navigation } from "@/config/business";
import { whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-brand" href="/">{business.name}</Link>
          <p>Thoughtful interiors, made for living.</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Come by</p>
          <p>{business.address}</p>
          <a href={whatsappUrl(business.whatsapp)}>WhatsApp us</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {business.name}</span>
        <span>Made with care in Jaipur</span>
      </div>
    </footer>
  );
}
