export function MatrixSection() {
  return (
    <section id="matriz" className="sec" style={{ background: 'var(--dark)' }}>
      <div className="sec-inner">
        <div className="matriz-layout">
          <div>
            <div className="rv">
              <span className="stag">Ferramenta Estrategica</span>
            </div>
            <h2 className="sh2 light rv d1">Matriz de Decisao: Severidade x Probabilidade</h2>
            <p className="ssub light rv d2">
              Ferramenta visual para priorizar onde o investimento da empresa gera maior retorno financeiro.
            </p>
            <div className="matriz-info">
              <div className="mi-card rv d2">
                <div className="mi-icon g">🎯</div>
                <div>
                  <h4>Inteligencia Preditiva</h4>
                  <p>O Sistema M.A.P.A. identifica exatamente onde a sobrecarga esta drenando o lucro da operacao.</p>
                </div>
              </div>
              <div className="mi-card rv d3">
                <div className="mi-icon t">💰</div>
                <div>
                  <h4>Previsibilidade de Custos</h4>
                  <p>Antecipe afastamentos e reduza custos com substituicoes, treinamentos emergenciais e rescisoes.</p>
                </div>
              </div>
              <div className="mi-card rv d4">
                <div className="mi-icon g">🛡️</div>
                <div>
                  <h4>Blindagem Juridica</h4>
                  <p>Documentacao tecnica irrefutavel para fiscalizacao do MTE.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rv d2" style={{ position: 'relative', paddingLeft: '28px' }}>
            <div className="matrix-y-label">{'<- Severidade ->'}</div>
            <div className="matrix-grid">
              <div className="mx-cell cell-a">
                <div className="mx-icon">🟡</div>
                <div className="mx-label">Baixa Prioridade</div>
                <div className="mx-sub">Monitoramento periodico</div>
              </div>
              <div className="mx-cell cell-b">
                <div className="mx-icon">🟠</div>
                <div className="mx-label">Zona de Atencao</div>
                <div className="mx-sub">Plano a medio prazo</div>
              </div>
              <div className="mx-cell cell-c">
                <div className="mx-icon">🔵</div>
                <div className="mx-label">Monitoramento</div>
                <div className="mx-sub">Acompanhamento continuo</div>
              </div>
              <div className="mx-cell cell-d">
                <div className="mx-icon">🔴</div>
                <div className="mx-label">Risco Critico</div>
                <div className="mx-sub">Intervencao imediata</div>
              </div>
            </div>
            <div className="axis-x">{'<- Probabilidade ->'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
