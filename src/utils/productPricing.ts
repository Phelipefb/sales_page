const DISCOUNT_RATE = 0.06;

export function getProductPricing(currentPrice: number) {
  return {
    currentPrice,
    originalPrice: Number((currentPrice / (1 - DISCOUNT_RATE)).toFixed(2)),
    installmentPrice: Number((currentPrice / 2).toFixed(2)),
  };
}
