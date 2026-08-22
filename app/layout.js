/*
 * FILE: app/layout.js
 * PURPOSE:
 * Global root layout wrapper for the Next.js application.
 *
 * RESPONSIBILITIES:
 * - Define root HTML shell and language attribute
 * - Inject centralized theme CSS variables from business configuration
 * - Render persistent site Header, Footer, and floating WhatsAppButton
 * - Set dynamic site metadata from central business configuration
 *
 * DEPENDENCIES:
 * - @/app/globals.css
 * - @/components/layout/Header
 * - @/components/layout/Footer
 * - @/components/sections/WhatsAppButton
 * - @/config/business
 * - @/content/siteContent
 *
 * NOTES:
 * - Single global shell for all page routes.
 * - Centralized design tokens injected from config/business.js.
 */

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { business } from "@/config/business";
import { content } from "@/content/siteContent";

export const metadata = {
  title: business.name,
  description: business.description || content.home?.description || "",
};

export default function RootLayout({ children }) {
  const primary = business.primaryColor || "#2563eb";
  const secondary = business.secondaryColor || "#0f172a";
  const brandNameText = business.brandNameTextColor || "#2563eb";

  return (
    <html lang="en">
      <body
        style={{
          "--primary": primary,
          "--secondary": secondary,
          "--accent": primary,
          "--brand-name-text": brandNameText,
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}