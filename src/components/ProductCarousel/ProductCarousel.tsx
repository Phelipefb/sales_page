import { useState } from 'react';
import type { Product } from '../../types/product.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';
import './ProductCarousel.scss';

interface ProductCarouselProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

function ProductCarousel({ products, onViewDetails }: ProductCarouselProps) {
  const [carouselStart, setCarouselStart] = useState(0);
  const visibleProducts = products.slice(carouselStart, carouselStart + 4);
  const hasPreviousProducts = carouselStart > 0;
  const hasNextProducts = carouselStart + 4 < products.length;

  return (
    <div className="product-carousel">
      <button
        className="product-carousel-arrow product-carousel-arrow--previous"
        type="button"
        aria-label="Produtos anteriores"
        disabled={!hasPreviousProducts}
        onClick={() => setCarouselStart((current) => Math.max(0, current - 1))}
      >
        <img
          src="/assets/carousel-previous.svg"
          alt=""
          width="40"
          height="40"
        />
      </button>

      <button
        className="product-carousel-arrow product-carousel-arrow--next"
        type="button"
        aria-label="Próximos produtos"
        disabled={!hasNextProducts}
        onClick={() =>
          setCarouselStart((current) =>
            Math.max(0, Math.min(products.length - 4, current + 1)),
          )
        }
      >
        <img
          src="/assets/carousel-next.svg"
          alt=""
          width="40"
          height="40"
        />
      </button>

      <ul className="product-list">
        {visibleProducts.map((product, index) => (
          <ProductCard
            key={`${product.productName}-${carouselStart + index}`}
            product={product}
            onViewDetails={onViewDetails}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductCarousel;
