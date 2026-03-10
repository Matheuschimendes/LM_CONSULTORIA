import { INSTITUTIONAL_VIDEO_SRC, INSTITUTIONAL_VIDEO_VIEW } from '../constants';

export function InstitutionalVideoSection() {
  return (
    <section id="video-institucional" className="sec video-sec">
      <div className="sec-inner video-inner">
        <div className="video-showcase rv">
          <div className="video-copy">
            <div className="rv">
              <span className="stag video-stag">Apresentação Institucional</span>
            </div>
            <h2 className="sh2 video-title rv d1">Veja a LM Consultoria em ação</h2>
            <p className="ssub video-sub rv d2">
              Entenda como nossa metodologia transforma riscos psicossociais em decisões estratégicas com impacto
              direto em performance, segurança jurídica e previsibilidade.
            </p>
            <div className="video-chip-row rv d2" aria-label="Destaques do vídeo">
              <span className="video-chip">NR-01 estratégica</span>
              <span className="video-chip">ISO 45003</span>
              <span className="video-chip">Diagnóstico validado MTE</span>
            </div>

            <a className="video-open-link rv d3" href={INSTITUTIONAL_VIDEO_VIEW} target="_blank" rel="noreferrer">
              Abrir no Google Drive
            </a>
          </div>

          <div className="video-frame-wrap rv d2">
            <video className="video-frame" controls preload="metadata" playsInline>
              <source src={INSTITUTIONAL_VIDEO_SRC} type="video/mp4" />
              Seu navegador não suporta vídeo em HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
