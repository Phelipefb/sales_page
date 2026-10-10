import './Newsletter.scss';

function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-title">
      <div className="newsletter__inner">
        <div className="newsletter__copy">
          <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>

        <form
          className="newsletter__form"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="newsletter__fields">
            <input
              type="text"
              aria-label="Nome"
              placeholder="Digite seu nome"
              required
            />
            <input
              type="email"
              aria-label="E-mail"
              placeholder="Digite seu e-mail"
              required
            />
            <button type="submit">INSCREVER</button>
          </div>

          <label className="newsletter__terms">
            <input type="checkbox" required />
            <span>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
