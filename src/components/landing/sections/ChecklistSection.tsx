import { WA_START } from '../constants';
import { WhatsIcon } from '../WhatsIcon';

const items = [
  ['Mapeamento psicossocial COPSOQ', 'Incluso'],
  ['Relatorio tecnico por setor', 'Incluso'],
  ['PGR Psicossocial (NR-01 compliant)', 'Incluso'],
  ['Plano de acao integrado ao GRO', 'Incluso'],
  ['Intervencao tecnica NR-17', 'Incluso'],
  ['Protocolo de lideranca preventiva', 'Incluso'],
  ['Matriz de priorizacao de riscos', 'Incluso'],
  ['Suporte em fiscalizacao MTE', 'Bonus'],
  ['Consultoria Selo Lei 14.831', 'Bonus'],
  ['Relatorio semestral de evolucao', 'Bonus'],
] as const;

export function ChecklistSection() {
  return (
    <section id="checklist" className="sec" style={{ background: 'var(--warm)' }}>
      <div className="check-inner">
        <div className="rv">
          <span className="stag">Resumo</span>
        </div>
        <h2 className="sh2 rv d1" style={{ textAlign: 'center' }}>
          Tudo que voce vai receber
        </h2>

        <div className="check-grid rv d2">
          {items.map(([label, tag]) => (
            <div className="ci" key={label}>
              <div className="ci-dot">✓</div>
              <span>{label}</span>
              <span className={`ci-tag ${tag === 'Bonus' ? 'bon' : 'inc'}`}>{tag}</span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '32px', textAlign: 'center' }} className="rv d3">
          <a href={WA_START} className="btn-cta" style={{ display: 'inline-flex' }} target="_blank" rel="noreferrer">
            <WhatsIcon /> Quero Minha Empresa Protegida
          </a>
        </div>
      </div>
    </section>
  );
}
