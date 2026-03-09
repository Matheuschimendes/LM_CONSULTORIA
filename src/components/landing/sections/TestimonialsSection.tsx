export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="sec" style={{ background: 'var(--dark)' }}>
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">Resultados Reais</span>
        </div>
        <h2 className="sh2 light rv d1">O que dizem nossos parceiros</h2>

        <div className="section-media rv d2">
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80"
            alt="Diretores e RH discutindo resultados com consultoria"
            loading="lazy"
          />
        </div>

        <div className="dep-grid" style={{ marginTop: '40px' }}>
          <div className="dep-card rv d1">
            <div className="dep-top">
              <div className="dep-av">M</div>
              <div>
                <div className="dep-name">Marcos Silveira</div>
                <div className="dep-role">CEO - Logistica - Goiania</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "A Liane transformou a NR-01 em vantagem competitiva real. Reduzimos o turnover em 40% em seis meses com
              documentacao solida para qualquer fiscalizacao."
            </p>
            <span className="dep-badge">-40% turnover</span>
          </div>

          <div className="dep-card rv d2">
            <div className="dep-top">
              <div className="dep-av">A</div>
              <div>
                <div className="dep-name">Ana Carla Mendes</div>
                <div className="dep-role">Diretora de RH - Farmaceutica</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "O diagnostico revelou problemas que nem sabiamos existir. O absenteismo caiu visivelmente e o engajamento
              melhorou muito."
            </p>
            <span className="dep-badge">-50% absenteismo</span>
          </div>

          <div className="dep-card rv d3">
            <div className="dep-top">
              <div className="dep-av">R</div>
              <div>
                <div className="dep-name">Ricardo Fontes</div>
                <div className="dep-role">Socio - Construtora - Brasilia</div>
              </div>
              <div className="dep-stars">★★★★★</div>
            </div>
            <p className="dep-text">
              "Saimos de uma autuacao iminente para um processo robusto e documentado. A seguranca juridica que temos
              hoje e inestimavel."
            </p>
            <span className="dep-badge">Blindagem juridica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
