import './Header.scss';

const benefits = [
  {
    icon: 'ShieldCheck.png',
    text: (
      <>
        Compra <strong>100% segura</strong>
      </>
    ),
  },
  {
    icon: 'Truck.png',
    text: (
      <>
        <strong>Frete grátis</strong> acima de R$ 200
      </>
    ),
  },
  {
    icon: 'CreditCard.png',
    text: (
      <>
        <strong>Parcele</strong> suas compras
      </>
    ),
  },
];

const categories = [
  'Todas Categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
  'Assinatura',
];

const actions = [
  { icon: 'Vector.png', label: 'Pedidos', size: 24 },
  { icon: 'Heart.png', label: 'Favoritos', size: 32 },
  { icon: 'UserCircle.png', label: 'Conta', size: 32 },
  {
    icon: 'ShoppingCart.png',
    label: 'Carrinho de compras',
    size: 32,
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-benefits">
        {benefits.map((benefit) => (
          <div className="header-benefit" key={benefit.icon}>
            <img
              src={`/assets/${benefit.icon}`}
              alt=""
              width="20"
              height="20"
            />
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="header-main">
        <a className="header-logo" href="/" aria-label="Econverse home">
          <img
            src="/assets/Logo.png"
            alt="Econverse"
            width="139"
            height="42"
          />
        </a>

        <form
          className="header-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            type="search"
            aria-label="Buscar produtos"
            placeholder="O que você está buscando?"
          />
          <button type="submit" aria-label="Buscar">
            <img
              src="/assets/MagnifyingGlass.png"
              alt=""
              width="28"
              height="28"
            />
          </button>
        </form>

        <div className="header-actions">
          {actions.map((action) => (
            <button
              className="header-action"
              type="button"
              key={action.icon}
              aria-label={action.label}
            >
              <img
                src={`/assets/${action.icon}`}
                alt=""
                width={action.size}
                height={action.size}
              />
            </button>
          ))}
        </div>
      </div>

      <ul className="header-nav" aria-label="Categorias de produtos">
        {categories.map((category) => (
          <li key={category}>
            {category === 'Assinatura' && (
              <img
                src="/assets/CrownSimple.png"
                alt=""
                width="20"
                height="20"
              />
            )}
            {category}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
