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
  metadataBase: new URL("https://aiflowerp.in"),
  title: {
    default: "ai flow — Complete Business & Commerce Solutions",
    template: "%s | ai flow",
  },
  description:
    "One platform, two powerful systems. ai flow offers ai flow ERP for complete enterprise operations and cement distribution, and Kinny Cart for digital retail commerce.",
  keywords: [
    "ai flow",
    "ai flow ERP",
    "Kinny Cart",
    "Cement Dealer ERP",
    "Digital Commerce Platform",
    "Business Management System",
    "Transit Stock Management",
    "Retail Storefront",
  ],
  authors: [{ name: "ai flow" }],
  openGraph: {
    title: "ai flow — Complete Business & Commerce Solutions",
    description:
      "Run your business, manage operations and connect with customers through intelligent digital solutions: ai flow ERP & Kinny Cart.",
    url: "https://aiflowerp.in",
    siteName: "ai flow",
    images: [
      {
        url: "/images/client/logo/LogoColorNoText-Transparent-Background.png",
        width: 512,
        height: 512,
        alt: "ai flow logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ai flow — Complete Business & Commerce Solutions",
    description:
      "Run your business, manage operations and connect with customers through intelligent digital solutions: ai flow ERP & Kinny Cart.",
    images: ["/images/client/logo/LogoColorNoText-Transparent-Background.png"],
  },
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