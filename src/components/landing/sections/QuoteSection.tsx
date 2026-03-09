export function QuoteSection() {
  return (
    <section id="quote">
      <div className="quote-inner rv">
        <svg className="quote-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path
            d="M14 20c-3.3 0-6 2.7-6 6v2c0 3.3 2.7 6 6 6h2v4l6-4c3.3 0 6-2.7 6-6v-2c0-3.3-2.7-6-6-6H14zM32 8c-3.3 0-6 2.7-6 6v2c0 3.3 2.7 6 6 6h2v4l6-4c3.3 0 6-2.7 6-6v-2c0-3.3-2.7-6-6-6H32z"
            fill="#00B69D"
          />
        </svg>
        <p className="quote-text">
          "Voce esta a um diagnostico de <em>proteger sua empresa, engajar sua equipe</em> e transformar compliance em
          lucro."
        </p>
        <div className="quote-author">
          <div className="qa-av">L</div>
          <div>
            <div className="qa-name">Liane Milhomem</div>
            <div className="qa-role">Psicologa Organizacional - CRP 22/02023</div>
          </div>
        </div>
      </div>
    </section>
  );
}
