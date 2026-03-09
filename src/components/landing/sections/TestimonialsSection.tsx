export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="sec" style={{ background: 'var(--dark)' }}>
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">Resultados Reais</span>
        </div>
        <h2 className="sh2 light rv d1">O que dizem nossos parceiros</h2>

        {/* <div className="section-media rv d2">
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
            alt="Diretores e RH discutindo resultados com consultoria"
            loading="lazy"
          />
        </div> */}

        <div className="dep-grid" style={{ marginTop: '40px' }}>
          <div className="dep-card rv d1">
            <div className="dep-top">
              <div className="dep-av">M</div>
              <div>
                <div className="dep-name">Marcos Silveira</div>
                <div className="dep-role">CEO - Logística - Goiânia</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "A Liane transformou a NR-01 em vantagem competitiva real. Reduzimos o turnover em 40% em seis meses com
              documentação sólida para qualquer fiscalização."
            </p>
            <span className="dep-badge">-40% turnover</span>
          </div>

          <div className="dep-card rv d2">
            <div className="dep-top">
              <div className="dep-av">A</div>
              <div>
                <div className="dep-name">Ana Carla Mendes</div>
                <div className="dep-role">Diretora de RH - Farmacêutica</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "O diagnóstico revelou problemas que nem sabíamos existir. O absenteísmo caiu visivelmente e o engajamento
              melhorou muito."
            </p>
            <span className="dep-badge">-50% absenteísmo</span>
          </div>

          <div className="dep-card rv d3">
            <div className="dep-top">
              <div className="dep-av">R</div>
              <div>
                <div className="dep-name">Ricardo Fontes</div>
                <div className="dep-role">Sócio - Construtora - Brasília</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "Saímos de uma autuação iminente para um processo robusto e documentado. A segurança jurídica que temos
              hoje é inestimável."
            </p>
            <span className="dep-badge">Blindagem jurídica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
