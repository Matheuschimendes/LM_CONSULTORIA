export function AudienceSection() {
  return (
    <section id="paraquem" className="sec">
      <div className="sec-inner">
        <div className="rv">
          <span className="stag" style={{ color: 'var(--p)' }}>
            Publico-Alvo
          </span>
        </div>
        <h2 className="sh2 light rv d1">Para quem e a LM Consultoria?</h2>
        <p className="ssub light rv d2" style={{ maxWidth: '440px' }}>
          Reconhece algum desses cenarios?
        </p>
        <div className="pq-grid">
          <div className="pq-card rv d1">
            <div className="pq-icon">✓</div>
            <div>
              <h4>Empresario de PME</h4>
              <p>Precisa cumprir a NR-01 com seguranca juridica e sem burocracia.</p>
            </div>
          </div>
          <div className="pq-card rv d2">
            <div className="pq-icon">✓</div>
            <div>
              <h4>Diretor / Gerente de RH</h4>
              <p>Quer GRO/PGR com embasamento cientifico e cultura saudavel.</p>
            </div>
          </div>
          <div className="pq-card rv d3">
            <div className="pq-icon">✓</div>
            <div>
              <h4>Lideres com equipe em crise</h4>
              <p>Enfrentam absenteismo, conflitos e alta rotatividade.</p>
            </div>
          </div>
          <div className="pq-card rv d4">
            <div className="pq-icon">✓</div>
            <div>
              <h4>Empresas em crescimento</h4>
              <p>Querem escalar sem passivos, com estrutura solida.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
