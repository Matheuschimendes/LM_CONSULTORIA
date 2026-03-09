export function ContextSection() {
  return (
    <section id="mudou" className="sec">
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">Contexto Atual</span>
        </div>
        <h2 className="sh2 rv d1">O cenario de gestão mudou - e a NR-01 tambem</h2>
        <div className="pq-grid">
          <p className="ssub rv d2">Empresas que ignoram o risco psicossocial pagam caro.</p>
        </div>

        {/* <div className="section-media rv d2">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
            alt="Executivos analisando indicadores de performance"
            loading="lazy"
          />
        </div> */}

        <div className="mudou-grid">
          <div className="mudou-card rv d1">
            <div className="mc-visual v1">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <rect x="14" y="20" width="52" height="40" rx="6" stroke="#00B69D" strokeWidth="2.5" fill="none" />
                <rect x="22" y="28" width="36" height="5" rx="2.5" fill="#00B69D" opacity=".7" />
                <rect x="22" y="37" width="24" height="4" rx="2" fill="#00B69D" opacity=".4" />
                <rect x="22" y="45" width="30" height="4" rx="2" fill="#00B69D" opacity=".4" />
                <circle cx="58" cy="23" r="11" fill="#00B69D" opacity=".9" />
                <path d="M53 23l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mc-body">
              <div className="mc-tag">Obrigatoriedade</div>
              <h3>NR-01 e lei vigente</h3>
              <p>Mapeamento de riscos psicossociais no GRO/PGR ja e obrigatorio. Desprotegidos arriscam autuacao e multas.</p>
            </div>
          </div>

          <div className="mudou-card rv d2">
            <div className="mc-visual v2">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <circle cx="40" cy="38" r="22" stroke="#00D4B8" strokeWidth="2.5" fill="none" opacity=".4" />
                <circle cx="40" cy="38" r="14" stroke="#00B69D" strokeWidth="2" fill="none" />
                <circle cx="40" cy="38" r="6" fill="#00B69D" opacity=".9" />
                <path d="M40 16v4M40 58v4M18 38h4M58 38h4" stroke="#00D4B8" strokeWidth="2" strokeLinecap="round" opacity=".6" />
              </svg>
            </div>
            <div className="mc-body">
              <div className="mc-tag">Precisao Cientifica</div>
              <h3>Ciencia como protecao</h3>
              <p>ISO 45003 e COPSOQ fornecem instrumentos validados internacionalmente para identificar adoecimento organizacional.</p>
            </div>
          </div>

          <div className="mudou-card rv d3">
            <div className="mc-visual v3">
              <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
                <rect x="16" y="52" width="10" height="16" rx="2" fill="#00B69D" opacity=".5" />
                <rect x="30" y="42" width="10" height="26" rx="2" fill="#00B69D" opacity=".7" />
                <rect x="44" y="30" width="10" height="38" rx="2" fill="#00D4B8" opacity=".85" />
                <rect x="58" y="20" width="10" height="48" rx="2" fill="#00D4B8" />
              </svg>
            </div>
            <div className="mc-body">
              <div className="mc-tag">ROI Comprovado</div>
              <h3>Prevencao gera lucro</h3>
              <p>Empresas com saude psicossocial preventiva reduzem custos, aumentam produtividade e fortalecem a marca.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
