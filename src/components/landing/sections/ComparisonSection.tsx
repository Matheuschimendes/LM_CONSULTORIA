export function ComparisonSection() {
  return (
    <section id="comparativo" className="sec" style={{ background: 'var(--warm)' }}>
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">O Prejuízo</span>
        </div>
        <h2 className="sh2 rv d1">O Impacto Real no eSocial</h2>
        <p className="ssub rv d2" style={{ marginBottom: '32px' }}>
          O eSocial é a prova real da sua gestão. Se o que sua empresa envia no evento S-2240 não condiz com a
          realidade mapeada, o prejuízo é imediato.
        </p>


        <div className="comp-layout">
          <div className="comp-side rv d1">
            <div className="comp-head bad">
              <div className="comp-head-icon bad">⚠️</div>
              <div>
                <div className="comp-head-label bad">Inconsistência de Dados</div>
                <div className="comp-head-title">Ralo Financeiro no eSocial</div>
              </div>
            </div>
            <div className="comp-body bad">
              <ul className="comp-list">
                <li><span className="icon bad">✕</span> Dados enviados sem lastro técnico aumentam risco de autuação.</li>
                <li><span className="icon bad">✕</span> Falta de mapeamento enfraquece a defesa institucional.</li>
                <li><span className="icon bad">✕</span> O cruzamento digital expõe lacunas do PGR.</li>
              </ul>
            </div>
          </div>

          <div className="comp-side rv d2">
            <div className="comp-head good">
              <div className="comp-head-icon good">✅</div>
              <div>
                <div className="comp-head-label good">Impactos Diretos</div>
                <div className="comp-head-title">Perdas que podem ser evitadas</div>
              </div>
            </div>
            <div className="comp-body good">
              <ul className="comp-list">
                <li>
                  <span className="icon good">✓</span> Multas por omissão: o Ministério do Trabalho identifica PGRs
                  incompletos no cruzamento digital.
                </li>
                <li>
                  <span className="icon good">✓</span> Elevação do FAP/RAT: a ausência da Cultura do Cuidado pode
                  dobrar o imposto previdenciário.
                </li>
                <li>
                  <span className="icon good">✓</span> Passivos trabalhistas: indenizações por Burnout e assédio que
                  drenam o caixa da organização.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="counters">
          <div className="counter-box rv d1">
            <div className="counter-num">S-2240</div>
            <div className="counter-label">Evento crítico: S-2240</div>
          </div>
          <div className="counter-box rv d2">
            <div className="counter-num">FAP/RAT</div>
            <div className="counter-label">PGR tecnicamente rastreável</div>
          </div>
          <div className="counter-box rv d3">
            <div className="counter-num">13 Riscos</div>
            <div className="counter-label">Riscos psicossociais monitorados</div>
          </div>
          <div className="counter-box rv d4">
            <div className="counter-num">NR-1</div>
            <div className="counter-label">NR-1 como base jurídica</div>
          </div>
        </div>
      </div>
    </section>
  );
}
