import type { Product } from '../../types/product.ts';
import './ProductCard.scss';
import { getProductPricing } from '../../utils/productPricing.ts';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

function formatCurrency(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const pricing = getProductPricing(product.price);
  return (
    <li>
      <article
        className="product-card"
        aria-label={`Produto: ${product.productName}`}
      >
        <img src={product.photo} alt={product.productName} />

        <p className="product-card__description">{product.descriptionShort}</p>

        <div className="product-card__pricing">
          <p className="product-card__old-price">
            <del>{formatCurrency(pricing.originalPrice)}</del>
          </p>

          <p className="product-card__price">
            <strong>{formatCurrency(pricing.currentPrice)}</strong>
          </p>

          <p className="product-card__installments">
            ou 2x de {formatCurrency(pricing.installmentPrice)} sem juros
          </p>
        </div>

        <p className="product-card__shipping">Frete grátis</p>

        <button
          type="button"
          onClick={() => onViewDetails(product)}
          aria-label={`Comprar ${product.productName}`}
        >
          COMPRAR
        </button>
      </article>
    </li>
  );
}

export default ProductCard;
