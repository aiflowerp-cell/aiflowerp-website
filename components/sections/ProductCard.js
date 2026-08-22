/*
 * FILE: components/sections/ProductCard.js
 * PURPOSE:
 * Reusable product display card primitive.
 *
 * RESPONSIBILITIES:
 * - Render product photography with category badge if provided
 * - Render product name, description, and price conditionally
 * - Encapsulate card presentation within base Card container
 *
 * DEPENDENCIES:
 * - @/components/ui/Card
 *
 * NOTES:
 * - Supports products with or without prices, images, or category tags.
 */

import { Card } from "@/components/ui/Card";

export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Card className="product-card">
      {product.image && (
        <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
          {product.category && <span>{product.category}</span>}
        </div>
      )}
      <div className="product-info">
        <div>
          {product.name && <h3>{product.name}</h3>}
          {product.description && <p>{product.description}</p>}
        </div>
        {product.price && <strong>{product.price}</strong>}
      </div>
    </Card>
  );
}
