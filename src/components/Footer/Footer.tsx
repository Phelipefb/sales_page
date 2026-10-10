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
    width: 24,
    height: 24,
  },
  {
    name: 'Facebook',
    icon: '/assets/facebook.png',
    width: 13,
    height: 22,
  },
  {
    name: 'LinkedIn',
    icon: '/assets/linkedin.png',
    width: 14,
    height: 15,
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <section className="site-footer__brand" aria-label="Sobre a Econverse">
          <img
            src="/assets/Logo.png"
            alt="Econverse"
            width="164"
            height="48"
            loading="lazy"
          />

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <ul className="site-footer__social" aria-label="Redes sociais">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <img
                  src={social.icon}
                  alt={social.name}
                  width={social.width}
                  height={social.height}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </section>

        <span className="site-footer__divider" aria-hidden="true" />

        <div className="site-footer__links">
          {footerColumns.map((column) => (
            <section key={column.title}>
              <h2>{column.title}</h2>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <div className="site-footer__legal">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}

export default Footer;
