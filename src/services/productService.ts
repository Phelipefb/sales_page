import type { Product, ProductsResponse } from '../types/product.ts';

const PRODUCTS_ENDPOINT =
  '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

async function findProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Product request failed with status ${response.status}`);
  }

  const data: ProductsResponse = await response.json();

  if (!data.success) {
    throw new Error('API response indicates failure');
  }

  return data.products.map((product) => ({
    ...product,
    productName: product.productName.toLocaleUpperCase('pt-BR'),
    descriptionShort: product.descriptionShort.toLocaleUpperCase('pt-BR'),
  }));
}

export default findProducts;
