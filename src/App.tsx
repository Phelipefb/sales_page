import { useState, useEffect } from 'react';
import findProducts from './services/productService';
import type { Product } from './types/product.ts';
import './App.scss';
import Header from './components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import CategoryList from './components/CategoryList/CategoryList.tsx';
import ProductCard from './components/ProductCard/ProductCard.tsx';
import ProductTabs from './components/ProductTabs/ProductTabs.tsx';
import ProductModal from './components/ProductModal/ProductModal.tsx';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    findProducts()
      .then(setProducts)
      .catch((error: unknown) => {
        console.error('Product request failed:', error);
        setError('Failed to fetch products');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading Products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />

      <main>
        <Hero />
        <CategoryList />
        <h2>Produtos relacionados</h2>
        <ProductTabs />
        <ul className="product-list">
          {products.map((product, index) => (
            <ProductCard
              key={`${product.productName}-${index}`}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </ul>

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            quantity={quantity}
            onClose={() => setSelectedProduct(null)}
            onIncrease={() => setQuantity((current) => current + 1)}
            onDecrease={() =>
              setQuantity((current) => Math.max(1, current - 1))
            }
          />
        )}
      </main>
    </>
  );
}

export default App;
