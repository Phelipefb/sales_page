import type { Product } from '../../types/product.ts';
import ProductCarousel from '../ProductCarousel/ProductCarousel.tsx';
import ProductTabs from '../ProductTabs/ProductTabs.tsx';

interface ProductShowcaseProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  showTabs?: boolean;
  showViewAll?: boolean;
}

function ProductShowcase({
  products,
  onViewDetails,
  showTabs = false,
  showViewAll = false,
}: ProductShowcaseProps) {
  return (
    <section
      className={`product-showcase${
        showViewAll ? ' product-showcase--secondary' : ''
      }`}
    >
      <div className="product-showcase__heading">
        <span aria-hidden="true" />
        <h2>Produtos relacionados</h2>
        <span aria-hidden="true" />
      </div>

      {showViewAll && <p className="product-showcase__view-all">Ver todos</p>}

      {showTabs && <ProductTabs />}

      <ProductCarousel products={products} onViewDetails={onViewDetails} />
    </section>
  );
}

export default ProductShowcase;
