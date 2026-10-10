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

        <img
          src={product.photo}
          alt={product.productName}
          width="247"
          height="192"
        />

        <div>
          <div className="product-modal__heading">
            <h2 id="modal-title">{product.productName}</h2>
            <p className="product-modal__price">
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>

          <div className="product-modal__details">
            <p>{product.descriptionShort}</p>
            <p className="product-details-link">
              Veja mais detalhes do produto &gt;
            </p>
          </div>

          <div className="product-modal__actions">
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
        </div>
      </section>
    </div>
  );
}

export default ProductModal;
