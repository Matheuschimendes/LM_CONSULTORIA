import { WA_START } from '../constants';
import { WhatsIcon } from '../WhatsIcon';

export function FooterSection() {
  const contactEmail = 'atendimento@lmconsultoria.com.br';
  const instagramUrl = 'https://www.instagram.com/psicologalianemilhomem?igsh=enFlMW5mZjVqdGQ2';
  const linkedInUrl =
    'https://www.linkedin.com/in/liane-milhomem-ba571a352/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';
  const socialLinks = [
    {
      label: 'Instagram',
      href: instagramUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm5 2.5a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6Zm0 2.2a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.4-2.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: linkedInUrl,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M5.2 3A2.2 2.2 0 1 1 3 5.2 2.2 2.2 0 0 1 5.2 3ZM3.3 8.2h3.8V21H3.3V8.2Zm6.2 0H13v1.8h.1c.5-1 1.9-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V8.2Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  const serviceSteps = [
    'Diagnóstico inicial digital com foco na realidade da sua empresa.',
    'Plano de ação com prioridades técnicas e estratégicas.',
    'Cronograma de implantação com acompanhamento por etapas.',
  ];

  return (
    <footer className="site-footer">
      <div className="sec-inner footer-wrap">
        <div className="footer-hero">
          <div>
            <p className="footer-kicker">Atendimento nacional</p>
            <h3 className="footer-hero-title">Estruture seu plano psicossocial com segurança técnica.</h3>
          </div>
          <a href={WA_START} className="footer-hero-btn" target="_blank" rel="noreferrer">
            <span className="footer-hero-icn">
              <WhatsIcon />
            </span>
            Falar no WhatsApp
          </a>
        </div>

        <div className="footer-grid">
          <section className="footer-card footer-card--brand">
            <img src="/logo.svg" alt="LM Consultoria" className="footer-logo" loading="lazy" />
            <p className="footer-brand-text">Inteligência Psicossocial e Performance para empresas em todo o Brasil.</p>
            <p className="footer-brand-meta">Diagnóstico digital, plano de ação e implantação orientada.</p>
          </section>

          <section className="footer-card">
            <h4 className="footer-heading">Contato</h4>
            <a className="footer-email" href={`mailto:${contactEmail}`}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 2v.2l8 5.2 8-5.2V8H4Zm16 8V10.55l-7.45 4.84a1 1 0 0 1-1.1 0L4 10.55V16h16Z"
                  fill="currentColor"
                />
              </svg>
              {contactEmail}
            </a>
            <p className="footer-subheading">Redes sociais</p>
            <div className="footer-socials" aria-label="Redes sociais">
              {socialLinks.map(({ label, href, icon }) => (
                <a key={label} href={href} className="footer-social-link" target="_blank" rel="noreferrer">
                  <span className="footer-social-icn">{icon}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </section>

          <section className="footer-card footer-card--process">
            <h4 className="footer-heading">Como funciona</h4>
            <ol className="footer-steps">
              {serviceSteps.map((step, index) => (
                <li key={step}>
                  <span className="footer-step-n">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <div className="footer-bottom">
          <p>Copyright ©2026 LM Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
