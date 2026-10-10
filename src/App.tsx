import { useState, useEffect } from 'react';
import findProducts from './services/productService';
import type { Product } from './types/product.ts';
import Header from './components/Header/Header.tsx';
import Hero from './components/Hero/Hero.tsx';
import CategoryList from './components/CategoryList/CategoryList.tsx';
import ProductModal from './components/ProductModal/ProductModal.tsx';
import PartnerBanners from './components/PartnerBanners/PartnerBanners.tsx';
import BrandList from './components/BrandList/BrandList.tsx';
import ProductShowcase from './components/ProductShowcase/ProductShowcase.tsx';
import Newsletter from './components/Newsletter/Newsletter.tsx';
import Footer from './components/Footer/Footer';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    findProducts()
      .then(setProducts)
      .catch(() => {
        setError('Não foi possível carregar os produtos.');
      })
      .finally(() => setLoading(false));
  }, []);

  function handleViewDetails(product: Product) {
    setQuantity(1);
    setSelectedProduct(product);
  }

  if (loading) return <p role="status">Carregando produtos...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <>
      <Header />

      <main>
        <Hero />
        <CategoryList />

        <ProductShowcase
          products={products}
          onViewDetails={handleViewDetails}
          showTabs
        />

        <PartnerBanners />

        <ProductShowcase
          products={products}
          onViewDetails={handleViewDetails}
          showViewAll
        />

        <PartnerBanners />

        <BrandList />

        <ProductShowcase
          products={products}
          onViewDetails={handleViewDetails}
          showViewAll
        />

        <Newsletter />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          quantity={quantity}
          onClose={() => setSelectedProduct(null)}
          onIncrease={() => setQuantity((current) => current + 1)}
          onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
        />
      )}
    </>
  );
}

export default App;
