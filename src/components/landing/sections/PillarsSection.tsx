export function PillarsSection() {
  return (
    <section id="pilares" className="sec">
      <div className="sec-inner">
        <div className="rv">
          <span className="stag">Valor Estrategico</span>
        </div>
        <h2 className="sh2 rv d1">Os 4 Pilares do Valor Estrategico</h2>
        <p className="ssub rv d2">
          Estrutura objetiva para reduzir risco, proteger margem e elevar performance com consistencia.
        </p>

        <div className="pillars-grid rv d2">
          <article className="pcard rv d1">
            <div className="pcard-top">
              <span className="pcard-num">Pilar 01</span>
              <span className="pcard-tag">Fiscal</span>
            </div>
            <h3>Reducao do FAP</h3>
            <p>Diminua diretamente o imposto pago ao governo com gestao preventiva e tecnica.</p>
          </article>

          <article className="pcard rv d2">
            <div className="pcard-top">
              <span className="pcard-num">Pilar 02</span>
              <span className="pcard-tag">Juridico</span>
            </div>
            <h3>Blindagem de Nexo</h3>
            <p>Impeca vinculos indevidos de doencas comuns ao trabalho por falta de mapeamento.</p>
          </article>

          <article className="pcard rv d3">
            <div className="pcard-top">
              <span className="pcard-num">Pilar 03</span>
              <span className="pcard-tag">Marca Empregadora</span>
            </div>
            <h3>Selo Empresa Promotora</h3>
            <p>Conquiste a Lei 14.831 e atraia os melhores talentos com prestigio nacional.</p>
          </article>

          <article className="pcard rv d4">
            <div className="pcard-top">
              <span className="pcard-num">Pilar 04</span>
              <span className="pcard-tag">Produtividade</span>
            </div>
            <h3>Eficiencia de Lideranca</h3>
            <p>Corrija estilos de gestao que geram conflitos e perda silenciosa de produtividade nas equipes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
