import { WA_START } from '../constants';
import { WhatsIcon } from '../WhatsIcon';

export function FinalCTASection() {
  return (
    <section id="final">
      <div className="final-orb" />
      <div className="final-inner">
        <p className="final-q rv">
          "Quanto <em>VALE</em> uma assessoria especializada para proteger sua empresa e seus colaboradores?"
        </p>
        <p className="final-sub rv d1">
          Vamos construir uma parceria estrategica baseada em ciencia, resultados e zero burocracia.
        </p>
        <a href={WA_START} className="btn-cta rv d2" style={{ display: 'inline-flex' }} target="_blank" rel="noreferrer">
          <WhatsIcon /> Quero Minha Empresa Protegida - Falar com Liane
        </a>
        <div className="final-creds rv d3">
          <strong>Liane Milhomem</strong> - Psicologa (CRP 22/02023) | Especialista em Implementacao Estrategica da
          NR-01
        </div>
      </div>
    </section>
  );
}
