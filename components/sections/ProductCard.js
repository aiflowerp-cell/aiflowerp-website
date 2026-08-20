import { Card } from "@/components/ui/Card";

export function ProductCard({ product }) {
  return (
    <Card className="product-card">
      <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
        <span>{product.category}</span>
      </div>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
        <strong>{product.price}</strong>
      </div>
    </Card>
  );
}
