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
  { icon: 'Vector.png', label: 'Orders' },
  { icon: 'Heart.png', label: 'Favorites' },
  { icon: 'UserCircle.png', label: 'Account' },
  { icon: 'ShoppingCart.png', label: 'Shopping cart' },
];

function Header() {
  return (
    <header className="site-header">
      <div className="header-benefits">
        {benefits.map((benefit) => (
          <div className="header-benefit" key={benefit.icon}>
            <img src={`/assets/${benefit.icon}`} alt="" />
            <span>{benefit.text}</span>
          </div>
        ))}
      </div>

      <div className="header-main">
        <a className="header-logo" href="/" aria-label="Econverse home">
          <img src="/assets/Logo.png" alt="Econverse" />
        </a>

        <form
          className="header-search"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <input type="search" placeholder="O que você está buscando?" />
          <button type="submit" aria-label="Search">
            <img src="/assets/MagnifyingGlass.png" alt="" />
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
              <img src={`/assets/${action.icon}`} alt="" />
            </button>
          ))}
        </div>
      </div>

      <nav className="header-nav" aria-label="Product categories">
        {categories.map((category) => (
          <a href="#" key={category}>
            {category === 'Assinatura' && (
              <img src="/assets/CrownSimple.png" alt="" />
            )}
            {category}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
