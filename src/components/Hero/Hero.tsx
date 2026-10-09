import './Hero.scss';

function Hero() {
  return (
    <section className="hero">
      <img src="/assets/Rectangle250.png" alt="" />
      <h1>Venha conhecer nossas promoções</h1>
      <p>
        <span>50% Off</span> nos produtos
      </p>
      <button type="button">Ver produto</button>
    </section>
  );
}

export default Hero;
