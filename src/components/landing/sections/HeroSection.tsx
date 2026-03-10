import { INSTITUTIONAL_VIDEO_SRC, INSTITUTIONAL_VIDEO_VIEW, WA_DIAG } from '../constants';
import { WhatsIcon } from '../WhatsIcon';

export function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-orb a" />
      <div className="hero-orb b" />
      <div className="hero-lines" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <line x1="0" y1="200" x2="1440" y2="200" stroke="#00B69D" strokeWidth="1" />
          <line x1="0" y1="400" x2="1440" y2="400" stroke="#00B69D" strokeWidth="1" />
          <line x1="0" y1="600" x2="1440" y2="600" stroke="#00B69D" strokeWidth="1" />
          <line x1="240" y1="0" x2="240" y2="800" stroke="#00B69D" strokeWidth="1" />
          <line x1="480" y1="0" x2="480" y2="800" stroke="#00B69D" strokeWidth="1" />
          <line x1="720" y1="0" x2="720" y2="800" stroke="#00B69D" strokeWidth="1" />
          <line x1="960" y1="0" x2="960" y2="800" stroke="#00B69D" strokeWidth="1" />
          <line x1="1200" y1="0" x2="1200" y2="800" stroke="#00B69D" strokeWidth="1" />
        </svg>
      </div>

      <div className="hero-inner">
        <div>

          <div className="hero-badge">
            <span className="pulse-dot" /> NR-01 - ISO 45003 - Validado MTE
          </div>
          <h1 className="hero-h1">
            Liane Milhomem:
            <br />
            <em>Implementação Estratégica</em>
            <br />da NR-01
          </h1>
          <p className="hero-sub">
            LM Consultoria - Inteligência Psicossocial & Performance. Maximize a performance da sua operação com um
            Diagnóstico Validado pelo MTE e alinhado aos padrões globais da ISO 45003.
          </p>
          <div className="hero-cta-wrap">
            <a href={WA_DIAG} className="btn-cta" target="_blank" rel="noreferrer">
              <WhatsIcon /> Solicitar Diagnóstico de Performance - 15 min
            </a>
            <div className="hero-trust">
              <span className="trust-i">Sigilo garantido</span>
              <span className="trust-i">Sem burocracia</span>
              <span className="trust-i">Baseado em ciência</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-video-wrap">
            <video
              className="hero-video"
              controls
              preload="metadata"
              playsInline
              poster="/Gradient.svg"
              aria-label="Vídeo institucional da LM Consultoria"
            >
              <source src={INSTITUTIONAL_VIDEO_SRC} type="video/mp4" />
              Seu navegador não suporta vídeo em HTML5.
            </video>
          </div>
          <a className="hero-video-link" href={INSTITUTIONAL_VIDEO_VIEW} target="_blank" rel="noreferrer">
            Abrir vídeo no Google Drive
          </a>
          {/* <div className="profile-card">
            <div className="pc-top">
              <div className="pc-avatar">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=640&q=80"
                  alt="Retrato profissional de consultora"
                  loading="eager"
                />
              </div>
              <div>
                <div className="pc-name">Liane Milhomem</div>
                <div className="pc-role">Psicóloga - CRP 22/02023</div>
              </div>
            </div>
            <div className="pc-stats">
              <div className="pc-stat">
                <div className="pc-stat-val">NR-01</div>
                <div className="pc-stat-lbl">Estratégica</div>
              </div>
              <div className="pc-stat">
                <div className="pc-stat-val">ISO</div>
                <div className="pc-stat-lbl">45003</div>
              </div>
              <div className="pc-stat">
                <div className="pc-stat-val">MTE</div>
                <div className="pc-stat-lbl">Validado</div>
              </div>
            </div>
            <div className="pc-chart-label">Performance pós-diagnóstico</div>
            <div className="pc-bars">
              <div className="pc-bar" style={{ height: '35%' }} />
              <div className="pc-bar" style={{ height: '45%', opacity: 0.65 }} />
              <div className="pc-bar" style={{ height: '42%', opacity: 0.75 }} />
              <div className="pc-bar" style={{ height: '62%' }} />
              <div className="pc-bar" style={{ height: '76%' }} />
              <div className="pc-bar" style={{ height: '88%', opacity: 0.8 }} />
              <div className="pc-bar" style={{ height: '100%' }} />
            </div>
            <div className="pc-seals">
              <span className="pc-seal">COPSOQ</span>
              <span className="pc-seal">GRO/PGR</span>
              <span className="pc-seal">NR-17</span>
              <span className="pc-seal">Lei 14.831</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
