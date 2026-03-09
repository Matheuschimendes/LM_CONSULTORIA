export function SolutionMAPASection() {
  return (
    <section id="mapa" className="sec">
      <div className="sec-inner">
        <div style={{ textAlign: 'center' }}>
          <div className="rv">
            <span className="stag">Metodo Proprietario</span>
          </div>
          <h2 className="sh2 rv d1" style={{ textAlign: 'center' }}>
            O Ecossistema <em style={{ fontStyle: 'italic', color: 'var(--pd)' }}>M.A.P.A.</em>: Gestao de Alta
            Performance
          </h2>
          <p className="ssub rv d2" style={{ margin: '0 auto', maxWidth: '480px', textAlign: 'center' }}>
            Um metodo proprietario, tecnico e seguro para proteger a operacao e escalar performance com previsibilidade.
          </p>
        </div>


        <div className="mapa-flow">
          <div className="mf-step rv d1">
            <div className="mf-circle">M</div>
            <div className="mf-letter">M</div>
            <div className="mf-norm">ISO 45003</div>
            <h4>Monitoramento Ativo</h4>
            <p>Identificacao precoce de gargalos na clareza de papeis e lideranca para evitar queda de produtividade.</p>
          </div>
          <div className="mf-step rv d2">
            <div className="mf-circle">A</div>
            <div className="mf-letter">A</div>
            <div className="mf-norm">COPSOQ</div>
            <h4>Analise de Dados</h4>
            <p>O estetoscopio cientifico que mede a saude da gestao e as condicoes de trabalho com 100% de sigilo etico.</p>
          </div>
          <div className="mf-step rv d3">
            <div className="mf-circle">P</div>
            <div className="mf-letter">P</div>
            <div className="mf-norm">NR-01 / GRO</div>
            <h4>Planejamento de Retorno</h4>
            <p>Planos de acao integrados ao PGR para otimizacao do capital humano e seguranca juridica.</p>
          </div>
          <div className="mf-step rv d4">
            <div className="mf-circle">A</div>
            <div className="mf-letter">A</div>
            <div className="mf-norm">NR-17</div>
            <h4>Atuacao de Impacto</h4>
            <p>Intervencoes tecnicas na organizacao do trabalho para elevar engajamento e performance das equipes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
