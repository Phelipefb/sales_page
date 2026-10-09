import type { Product, ProductsResponse } from '../types/product.ts';


async function findProducts(): Promise<Product[]> {

    const response = await fetch('/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'); 
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`); 
    }

    const data: ProductsResponse = await response.json(); 
    
    if (!data.success) {
        throw new Error('API response indicates failure');
    }

    return data.products;
}

export default findProducts

