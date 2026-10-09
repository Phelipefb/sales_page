import './ProductTabs.scss';
const tabs = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS',
];

function ProductTabs() {
  return (
    <nav className="product-tabs" aria-label="Categorias de produtos">
      <ul>
        {tabs.map((tab, index) => (
          <li key={tab}>
            <button
              type="button"
              aria-pressed={index === 0}
              className={index === 0 ? 'is-active' : ''}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ProductTabs;
