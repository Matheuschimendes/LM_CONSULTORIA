export function ComparisonSection() {
  return (
    <section id="comparativo" className="sec" style={{ background: 'var(--warm)' }}>
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">Por que a LM Consultoria?</span>
        </div>
        <h2 className="sh2 rv d1">Comparativo de Retorno: Custo da Inação vs. Lucro da Prevenção</h2>
        <p className="ssub rv d2" style={{ marginBottom: '32px' }}>
          Decisão que impacta diretamente o resultado financeiro.
        </p>


        <div className="comp-layout">
          <div className="comp-side rv d1">
            <div className="comp-head bad">
              <div className="comp-head-icon bad">⚠️</div>
              <div>
                <div className="comp-head-label bad">Sem a LM Consultoria</div>
                <div className="comp-head-title">Custo da Inação</div>
              </div>
            </div>
            <div className="comp-body bad">
              <ul className="comp-list">
                <li><span className="icon bad">✕</span> Absenteísmo elevado e não rastreado</li>
                <li><span className="icon bad">✕</span> Presenteísmo que drena produtividade</li>
                <li><span className="icon bad">✕</span> Alta rotatividade e custo de reposição</li>
                <li><span className="icon bad">✕</span> Custo crescente do plano de saúde</li>
              </ul>
            </div>
          </div>

          <div className="comp-side rv d2">
            <div className="comp-head good">
              <div className="comp-head-icon good">✅</div>
              <div>
                <div className="comp-head-label good">Com a LM Consultoria</div>
                <div className="comp-head-title">Lucro da Prevenção</div>
              </div>
            </div>
            <div className="comp-body good">
              <ul className="comp-list">
                <li><span className="icon good">✓</span> Equipes engajadas e produtivas</li>
                <li><span className="icon good">✓</span> Redução de passivo trabalhista</li>
                <li><span className="icon good">✓</span> Maior segurança para o crescimento do negócio</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="counters">
          <div className="counter-box rv d1">
            <div className="counter-num" data-target="40" data-prefix="-">
              0%
            </div>
            <div className="counter-label">Redução em afastamentos</div>
          </div>
          <div className="counter-box rv d2">
            <div className="counter-num" data-target="60" data-prefix="-">
              0%
            </div>
            <div className="counter-label">Queda no turnover</div>
          </div>
          <div className="counter-box rv d3">
            <div className="counter-num" data-target="35" data-prefix="+">
              0%
            </div>
            <div className="counter-label">Ganho em engajamento</div>
          </div>
          <div className="counter-box rv d4">
            <div className="counter-num" data-target="100">
              0%
            </div>
            <div className="counter-label">Sigilo ético garantido</div>
          </div>
        </div>
      </div>
    </section>
  );
}
