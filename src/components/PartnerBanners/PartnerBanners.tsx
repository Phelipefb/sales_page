import './PartnerBanners.scss';

const partners = [
  { id: 1, title: 'Parceiros' },
  { id: 2, title: 'Parceiros' },
];

function PartnerBanners() {
  return (
    <section className="partner-banners" aria-label="Parceiros">
      {partners.map((partner) => (
        <article className="partner-banner" key={partner.id}>
          <img src="/assets/MaskGroup.png" alt="" />

          <h2>{partner.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>

          <button type="button">CONFIRA</button>
        </article>
      ))}
    </section>
  );
}

export default PartnerBanners;
