import { WA_START } from '../constants';
import { WhatsIcon } from '../WhatsIcon';

export function FinalCTASection() {
  return (
    <section id="final">
      <div className="final-orb" />
      <div className="final-inner">
        <p className="final-q rv">
          Quanto <em>VALE</em> uma assessoria especializada para proteger sua empresa e seus colaboradores?
        </p>
        <p className="final-sub rv d1">
          Vamos estruturar sua conformidade em NR-1 com segurança jurídica, ciência aplicada e documentação robusta.
        </p>
        <a href={WA_START} className="btn-cta rv d2" style={{ display: 'inline-flex' }} target="_blank" rel="noreferrer">
          <WhatsIcon /> Quero Minha Empresa Protegida - Falar com Liane
        </a>
        <div className="final-creds rv d3">
          <strong>Liane Oliveira Milhomem Maranhão</strong> - Psicóloga (CRP 22/02023) | Pedagoga
          <br />
          Segurança Jurídica através da Cultura do Cuidado.
        </div>
      </div>
    </section>
  );
}
