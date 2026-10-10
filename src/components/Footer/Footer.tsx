import './Footer.scss';

const footerColumns = [
  {
    title: 'Institucional',
    links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'],
  },
  {
    title: 'Ajuda',
    links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'],
  },
  {
    title: 'Termos',
    links: [
      'Termos e Condições',
      'Política de Privacidade',
      'Troca e Devolução',
    ],
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: '/assets/instagram.png',
  },
  {
    name: 'Facebook',
    icon: '/assets/facebook.png',
  },
  {
    name: 'LinkedIn',
    icon: '/assets/linkedin.png',
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <section className="site-footer__brand" aria-label="Sobre a Econverse">
          <img src="/assets/Logo.png" alt="Econverse" />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <nav className="site-footer__social" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <a key={social.name} href="#" aria-label={social.name}>
                <img src={social.icon} alt="" />
              </a>
            ))}
          </nav>
        </section>

        <span className="site-footer__divider" aria-hidden="true" />

        <nav className="site-footer__links" aria-label="Links do rodapé">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h2>{column.title}</h2>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>

      <div className="site-footer__legal">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;
