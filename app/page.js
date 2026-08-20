/*
 * FILE: app/page.js
 * PURPOSE:
 * Landing home page route for the website.
 *
 * RESPONSIBILITIES:
 * - Compose top-level sections (Hero, About preview, Services preview, Products preview, Testimonials, Contact)
 * - Render collection preview grid
 *
 * DEPENDENCIES:
 * - Section components (Hero, AboutSection, ServicesSection, ProductCard, Testimonials, ContactSection)
 * - UI primitives (Button)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Editorial copy is supplied via content/siteContent.js.
 */

import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductCard } from "@/components/sections/ProductCard";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/Button";
import { content } from "@/content/siteContent";

export default function Home() {
  const { productPreview } = content.home;

  return (
    <>
      <Hero />
      <AboutSection preview />
      <ServicesSection preview />
      <section className="section product-preview">
        <div className="container">
          <div className="section-top">
            <div>
              <p className="eyebrow">{productPreview.eyebrow}</p>
              <h2>{productPreview.title}</h2>
            </div>
            <Button href="/products" variant="text">
              {productPreview.ctaText} <span aria-hidden="true">↗</span>
            </Button>
          </div>
          <div className="product-grid">
            {content.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <ContactSection />
    </>
  );
}
