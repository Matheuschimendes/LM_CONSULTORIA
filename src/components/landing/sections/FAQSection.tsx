const faqs = [
  [
    'Minha empresa e obrigada a implementar a NR-01?',
    'Sim. O mapeamento de riscos psicossociais ja e obrigatorio para todas as empresas. Desprotegidas estao sujeitas a autuacao, multas e passivos trabalhistas.',
  ],
  [
    'O que e o COPSOQ e por que e importante?',
    'O COPSOQ e o instrumento cientifico mais robusto e validado internacionalmente para medir riscos psicossociais. Sua aplicacao garante diagnostico tecnicamente irrefutavel perante fiscalizacao.',
  ],
  [
    'A confidencialidade dos colaboradores e garantida?',
    'Absolutamente. Todo o processo segue os principios eticos do CFP e as diretrizes da LGPD. Nenhum dado individual e revelado, apenas analises agregadas por setor.',
  ],
  [
    'Em quanto tempo verei resultados praticos?',
    'Diagnostico e plano de acao sao entregues em ate 30 dias. Os primeiros resultados costumam ser percebidos nos primeiros 60 a 90 dias de implementacao.',
  ],
  [
    'A LM Consultoria atende empresas fora de Goias?',
    'Sim. O processo e conduzido de forma totalmente online com aplicacao digital dos instrumentos e reunioes por videoconferencia. Atendemos todo o Brasil.',
  ],
] as const;

export function FAQSection() {
  return (
    <section id="faq" className="sec">
      <div className="faq-inner">
        <div className="rv">
          <span className="stag">Duvidas</span>
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
