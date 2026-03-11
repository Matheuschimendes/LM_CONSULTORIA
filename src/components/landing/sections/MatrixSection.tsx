export function MatrixSection() {
  return (
    <section id="matriz" className="sec" style={{ background: 'var(--dark)' }}>
      <div className="sec-inner">
        <div className="matriz-layout">
          <div>
            <div className="rv">
              <span className="stag">A Dor</span>
            </div>
            <h2 className="sh2 light rv d1">O Risco do que é Invisível</h2>
            <p className="ssub light rv d2">
              Onde a falta de mapeamento vulnerabiliza sua empresa.
            </p>
            <div className="matriz-info">
              <div className="mi-card rv d2">
                <div className="mi-icon g">⚠️</div>
                <div>
                  <h4>Afastamentos Não Gerenciados</h4>
                  <p>Transtornos mentais que se tornam crises operacionais.</p>
                </div>
              </div>
              <div className="mi-card rv d3">
                <div className="mi-icon t">🔄</div>
                <div>
                  <h4>Conflitos Sistêmicos</h4>
                  <p>Ambientes tóxicos que geram turnover e perda de talentos.</p>
                </div>
              </div>
              <div className="mi-card rv d4">
                <div className="mi-icon g">🛡️</div>
                <div>
                  <h4>Nexo Técnico Previdenciário</h4>
                  <p>Doenças comuns podem ser carimbadas como &quot;do trabalho&quot; por falta de provas preventivas.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rv d2 matriz-side">
            <div className="matrix-y-label">{'<- Impacto ->'}</div>
            <div className="matrix-grid">
              <div className="mx-cell cell-a">
                <div className="mx-icon">🟡</div>
                <div className="mx-label">Sinais Ignorados</div>
                <div className="mx-sub">Adoecimento silencioso</div>
              </div>
              <div className="mx-cell cell-b">
                <div className="mx-icon">🟠</div>
                <div className="mx-label">Conflitos Frequentes</div>
                <div className="mx-sub">Perda de produtividade</div>
              </div>
              <div className="mx-cell cell-c">
                <div className="mx-icon">🔵</div>
                <div className="mx-label">Afastamentos</div>
                <div className="mx-sub">Ruptura operacional</div>
              </div>
              <div className="mx-cell cell-d">
                <div className="mx-icon">🔴</div>
                <div className="mx-label">Passivo Trabalhista</div>
                <div className="mx-sub">Dano financeiro imediato</div>
              </div>
            </div>
            <div className="axis-x">{'<- Frequência ->'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
