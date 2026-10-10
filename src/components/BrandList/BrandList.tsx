import './BrandList.scss';

const brands = [1, 2, 3, 4, 5];

function BrandList() {
  return (
    <section className="brand-list" aria-labelledby="brand-list-title">
      <h2 id="brand-list-title">Navegue por marcas</h2>

      <ul>
        {brands.map((brand) => (
          <li key={brand}>
            <img src="/assets/Logo.png" alt="Econverse" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default BrandList;
