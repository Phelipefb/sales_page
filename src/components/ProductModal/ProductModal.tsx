import type { Product } from '../../types/product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  quantity: number;
  onClose: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

function ProductModal({
  product,
  quantity,
  onClose,
  onIncrease,
  onDecrease,
}: ProductModalProps) {
  return (
    <div className="modal-overlay">
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do produto"
        >
          ×
        </button>

        <img src={product.photo} alt={product.productName} />

        <div>
          <h2 id="modal-title">{product.productName}</h2>
          <p>{product.descriptionShort}</p>
          <p className="product-details-link">
            Veja mais detalhes do produto &gt;
          </p>
          <p>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>

          <div className="quantity-control">
            <button
              type="button"
              onClick={onDecrease}
              aria-label="Diminuir quantidade"
            >
              −
            </button>
            <span>{quantity.toString().padStart(2, '0')}</span>
            <button
              type="button"
              onClick={onIncrease}
              aria-label="Aumentar quantidade"
            >
              +
            </button>
          </div>

          <button className="buy-button" type="button">
            Comprar
          </button>
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
