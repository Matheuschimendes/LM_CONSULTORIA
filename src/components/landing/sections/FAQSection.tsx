const faqs = [
  [
    'Minha empresa é obrigada a implementar a NR-01?',
    'Sim. O mapeamento de riscos psicossociais já é obrigatório para todas as empresas. Desprotegidas estão sujeitas a autuação, multas e passivos trabalhistas.',
  ],
  [
    'O que é o COPSOQ e por que é importante?',
    'O COPSOQ é o instrumento científico mais robusto e validado internacionalmente para medir riscos psicossociais. Sua aplicação garante diagnóstico tecnicamente irrefutável perante fiscalização.',
  ],
  [
    'A confidencialidade dos colaboradores é garantida?',
    'Absolutamente. Todo o processo segue os princípios éticos do CFP e as diretrizes da LGPD. Nenhum dado individual é revelado, apenas análises agregadas por setor.',
  ],
  [
    'Em quanto tempo verei resultados práticos?',
    'Diagnóstico e plano de ação são entregues em até 30 dias. Os primeiros resultados costumam ser percebidos nos primeiros 60 a 90 dias de implementação.',
  ],
  [
    'A LM Consultoria atende empresas fora do Maranhão?',
    'Sim. O processo é conduzido de forma totalmente online com aplicação digital dos instrumentos e reuniões por videoconferência. Atendemos todo o Brasil.',
  ],
] as const;

export function FAQSection() {
  return (
    <section id="faq" className="sec">
      <div className="faq-inner">
        <div className="rv">
          <span className="stag">Dúvidas</span>
        </div>
        <h2 className="sh2 rv d1">Perguntas frequentes</h2>
        <div className="faq-list rv d2">
          {faqs.map(([q, a]) => (
            <div className="faq-item" key={q}>
              <div className="fq">
                {q}
                <div className="fq-icon">+</div>
              </div>
              <div className="fa">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
