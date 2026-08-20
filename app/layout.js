import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { business } from "@/config/business";

export const metadata = {
  title: business.name,
  description: "Thoughtful interiors and home furnishings in Jaipur.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ "--primary": business.primaryColor, "--secondary": business.secondaryColor }}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
