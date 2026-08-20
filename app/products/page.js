/*
 * FILE: app/products/page.js
 * PURPOSE:
 * Products catalog page route displaying the collection of items.
 *
 * RESPONSIBILITIES:
 * - Render PageIntro banner with products copy
 * - Render product cards grid from central content
 * - Render ContactSection CTA
 *
 * DEPENDENCIES:
 * - Layout components (PageIntro)
 * - Section components (ProductCard, ContactSection)
 * - Central content layer (@/content/siteContent)
 *
 * NOTES:
 * - Page intro copy and product items are supplied via content/siteContent.js.
 */

import { PageIntro } from "@/components/layout/PageIntro";
import { ProductCard } from "@/components/sections/ProductCard";
import { ContactSection } from "@/components/sections/ContactSection";
import { content } from "@/content/siteContent";

export default function ProductsPage() {
  const { productsPage } = content;

  return (
    <>
      <PageIntro
        eyebrow={productsPage.eyebrow}
        title={productsPage.title}
        description={productsPage.description}
      />
      <section className="section">
        <div className="container">
          <div className="product-grid">
            {content.products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
