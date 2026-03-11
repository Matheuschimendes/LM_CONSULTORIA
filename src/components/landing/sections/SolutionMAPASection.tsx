"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);
    const onChange = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

const phases = [
  {
    letter: "M",
    acro: "Mapeamento",
    subtitle: "O Radar Preditivo",
    norm: "COPSOQ II",
    description: "Utilizamos o COPSOQ II (Copenhagen Psychosocial Questionnaire), o protocolo padrão-ouro mundial para avaliação de riscos psicossociais.",
    items: [
      "Protocolo padrão-ouro mundial",
      "Avaliação quantitativa e qualitativa",
      "100% anonimato — LGPD compliant",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <circle cx="24" cy="24" r="19" stroke="#00D4B8" strokeWidth="1.2" opacity=".25" />
        <circle cx="24" cy="24" r="13" stroke="#00B69D" strokeWidth="1.5" opacity=".5" />
        <circle cx="24" cy="24" r="7" stroke="#00D4B8" strokeWidth="1.8" opacity=".8" />
        <circle cx="24" cy="24" r="2.5" fill="#00B69D" />
        <path d="M24 5v3M24 40v3M5 24h3M40 24h3" stroke="#00D4B8" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
        <path d="M11 11l2 2M35 35l2 2M35 11l2-2M11 37l2-2" stroke="#00D4B8" strokeWidth="1.2" strokeLinecap="round" opacity=".35" />
      </svg>
    ),
  },
  {
    letter: "A",
    acro: "Análise",
    subtitle: "Inteligência & Matriz de Riscos",
    norm: "Diagnóstico",
    description: "Diagnóstico cirúrgico que identifica exatamente onde está o problema — transformando dados comportamentais em inteligência operacional.",
    items: [
      "Matriz de risco por setor",
      "Identificação de perfis críticos",
      "Relatório executivo com prioridades",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="6" y="34" width="7" height="9" rx="2" fill="#00B69D" opacity=".45" />
        <rect x="17" y="26" width="7" height="17" rx="2" fill="#00B69D" opacity=".62" />
        <rect x="28" y="16" width="7" height="27" rx="2" fill="#00D4B8" opacity=".8" />
        <rect x="38" y="8" width="7" height="35" rx="2" fill="#00D4B8" />
        <path d="M9 32 20 24 31 14 41 6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity=".7" />
        <circle cx="9" cy="32" r="2" fill="#fff" opacity=".55" />
        <circle cx="20" cy="24" r="2" fill="#fff" opacity=".65" />
        <circle cx="31" cy="14" r="2" fill="#fff" opacity=".75" />
        <circle cx="41" cy="6" r="2.5" fill="#fff" opacity=".9" />
      </svg>
    ),
  },
  {
    letter: "P",
    acro: "Prevenção",
    subtitle: "Kit de Proteção Psicossocial",
    norm: "TCC + Andragogia",
    description: "Medidas de Controle Administrativo desenhadas com base em Terapia Cognitivo-Comportamental (TCC) e Andragogia para resultados duradouros.",
    items: [
      "DDS Psicossocial (Diálogo Diário de Segurança)",
      "Protocolo de Primeiros Socorros Psicológicos",
      "Ferramentas de Regulação Rápida",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <path d="M24 4L6 13v12c0 11 7 20 18 23 11-3 18-12 18-23V13L24 4z" stroke="#00D4B8" strokeWidth="1.5" fill="none" opacity=".3" />
        <path d="M24 9L10 17v8c0 8 5 15 14 18 9-3 14-10 14-18v-8L24 9z" fill="#00B69D" opacity=".1" stroke="#00B69D" strokeWidth="1.2" />
        <path d="M16 24l5 5 11-11" stroke="#00D4B8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    letter: "A",
    acro: "Acompanhamento",
    subtitle: "Blindagem Jurídica & ROI",
    norm: "MTE Compliance",
    description: "Com um clique, o sistema gera o relatório completo exigido pelas auditorias do Ministério do Trabalho e demonstra financeiramente a redução de custos.",
    items: [
      "Dossiê de Blindagem Jurídica automático",
      "Painel de ROI com redução do FAP",
      "Monitoramento contínuo do absenteísmo",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
        <rect x="8" y="8" width="28" height="36" rx="4" stroke="#00D4B8" strokeWidth="1.5" fill="none" opacity=".3" />
        <rect x="13" y="15" width="18" height="3.5" rx="1.5" fill="#00B69D" opacity=".7" />
        <rect x="13" y="22" width="13" height="2.5" rx="1.2" fill="#00B69D" opacity=".5" />
        <rect x="13" y="28" width="15" height="2.5" rx="1.2" fill="#00B69D" opacity=".4" />
        <rect x="13" y="34" width="10" height="2.5" rx="1.2" fill="#00B69D" opacity=".3" />
        <circle cx="38" cy="12" r="9" fill="#00B69D" />
        <path d="M33 12l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const valueProps = [
  { icon: "📋", title: "Atualização do PGR", desc: "Conformidade total com NR-01 e NR-17 — não apenas consultoria." },
  { icon: "🧠", title: "Liderança Instrumentalizada", desc: "Sua gestão aprende a gerenciar crises com autonomia." },
  { icon: "💰", title: "Margem Protegida", desc: "Redução comprovada do FAP, absenteísmo e passivo trabalhista." },
];

const psychosocialFactors = [
  {
    title: "Carga de Trabalho",
    desc: "Equilíbrio entre a demanda operacional e a capacidade de entrega. Evita o erro humano e o esgotamento.",
  },
  {
    title: "Conteúdo das Tarefas",
    desc: "Significado e clareza nas atividades. Previne o desengajamento e a queda de produtividade.",
  },
  {
    title: "Exigências Emocionais",
    desc: "Esforço mental no manejo de pressões e público. Fator crítico para prevenção de Burnout.",
  },
  {
    title: "Controle e Autonomia",
    desc: "Margem de decisão do colaborador sobre seu trabalho. O baixo controle é um dos maiores geradores de estresse.",
  },
  {
    title: "Participação e Controle",
    desc: "Nível de envolvimento do colaborador nas mudanças organizacionais. Reduz a resistência e conflitos.",
  },
  {
    title: "Ambiente Físico",
    desc: "Interface entre as condições do local e o impacto psicológico. Complemento essencial à Ergonomia.",
  },
  {
    title: "Cultura Organizacional",
    desc: "Valores e padrões de comportamento da empresa. Define a saúde do clima e a retenção de talentos.",
  },
  {
    title: "Relações Interpessoais",
    desc: "Qualidade das interações e prevenção de condutas abusivas. Blindagem contra passivos por assédio.",
  },
  {
    title: "Suporte Social",
    desc: "Disponibilidade de apoio por parte de líderes e pares. Fortalece a resiliência operacional.",
  },
  {
    title: "Desenvolvimento de Carreira",
    desc: "Perspectivas de crescimento e valorização. Reduz o turnover e a perda de capital intelectual.",
  },
  {
    title: "Justiça e Recompensa",
    desc: "Percepção de equidade e reconhecimento. Garante a lealdade e o compromisso com a empresa.",
  },
  {
    title: "Interface Casa-Trabalho",
    desc: "Equilíbrio entre vida profissional e pessoal. Proteção contra processos de jornada excessiva.",
  },
  {
    title: "Clareza de Papel",
    desc: "Definição nítida de responsabilidades. Elimina a ansiedade e a ineficiência por ambiguidade.",
  },
];

export function SolutionMAPASection() {
  const [active, setActive] = useState(0);
  const header = useInView();
  const banner = useInView(0.1);
  const strip = useInView(0.1);
  const factorsTrackRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const cur = phases[active];

  useEffect(() => {
    if (!isMobile) return;

    const track = factorsTrackRef.current;
    if (!track) return;

    let autoplayEnabled = true;
    let resumeTimeout: number | undefined;

    const pauseAutoplay = () => {
      autoplayEnabled = false;
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(() => {
        autoplayEnabled = true;
      }, 4500);
    };

    const step = () => {
      const firstCard = track.querySelector<HTMLElement>("article");
      if (!firstCard) return;

      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 12;
      const delta = cardWidth + gap;
      const maxLeft = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft + delta >= maxLeft - 2) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: delta, behavior: "smooth" });
    };

    const intervalId = window.setInterval(() => {
      if (!autoplayEnabled) return;
      step();
    }, 3200);

    track.addEventListener("touchstart", pauseAutoplay, { passive: true });
    track.addEventListener("pointerdown", pauseAutoplay);

    return () => {
      window.clearInterval(intervalId);
      if (resumeTimeout) window.clearTimeout(resumeTimeout);
      track.removeEventListener("touchstart", pauseAutoplay);
      track.removeEventListener("pointerdown", pauseAutoplay);
    };
  }, [isMobile]);

  return (
    <section
      id="mapa"
      className="py-16 md:py-24 md:px-6"
      style={{ background: "var(--warm, #EBF8F6)", padding: isMobile ? "4.75rem 1rem" : "6rem 1.5rem" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div
          ref={header.ref}
          style={{
            opacity: header.visible ? 1 : 0,
            transform: header.visible ? "none" : "translateY(20px)",
            transition: "opacity .7s ease, transform .7s ease",
            marginBottom: isMobile ? 30 : 40,
          }}
        >
          <span style={{
            display: "inline-block", fontSize: ".67rem", fontWeight: 700,
            letterSpacing: ".1em", textTransform: "uppercase",
            color: "var(--p, #00B69D)", marginBottom: 8,
          }}>
            Solução Tecnológica
          </span>
          <h2 style={{
            fontFamily: "'Merriweather', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700,
            lineHeight: 1.1, color: "#1A1A1A", marginBottom: 10,
          }}>
            Tecnologia Aplicada ao Monitoramento dos{" "}
            <em style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg,#008C79,#00B69D)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>13 Riscos Psicossociais</em>
          </h2>
          <p style={{ fontSize: isMobile ? ".86rem" : ".93rem", color: "#555", lineHeight: 1.7, maxWidth: 520 }}>
            O Sistema M.A.P.A. é a ferramenta que dá vida à sua NR-1. Ele transforma o subjetivo em dados auditáveis,
            garantindo o dinamismo que a norma exige e a precisão que o eSocial fiscaliza.
          </p>
        </div>

        {/* ── Interactive Banner ── */}
        <div
          ref={banner.ref}
          style={{
            opacity: banner.visible ? 1 : 0,
            transform: banner.visible ? "none" : "translateY(24px)",
            transition: "opacity .75s ease .1s, transform .75s ease .1s",
            borderRadius: isMobile ? 18 : 24, overflow: "hidden",
            display: "grid", gridTemplateColumns: isMobile ? "1fr" : "minmax(0,1fr) minmax(240px,260px)",
            marginBottom: isMobile ? 12 : 16, border: "1px solid rgba(0,182,157,0.15)",
          }}
        >
          {/* left — dark panel */}
          <div style={{ background: "linear-gradient(135deg,#00302A,#004538)", padding: isMobile ? "24px 20px" : "32px 36px", position: "relative", overflow: "hidden" }}>
            {/* subtle grid */}
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .04, pointerEvents: "none" }}>
              <defs><pattern id="bg" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00B69D" strokeWidth=".5" />
              </pattern></defs>
              <rect width="100%" height="100%" fill="url(#bg)" />
            </svg>

            {/* current phase info */}
            <div style={{ position: "relative", zIndex: 1, marginBottom: isMobile ? 18 : 24 }}>
              <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: "linear-gradient(135deg,#00B69D,#03D4BA)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Merriweather',serif", fontSize: "1.4rem", fontWeight: 700, color: "#fff" }}>{cur.letter}</span>
                </div>
                <div>
                  <div style={{ fontSize: ".6rem", color: "#00D4B8", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>
                    Fase {active + 1} · {cur.norm}
                  </div>
                  <div style={{ fontFamily: "'Merriweather',serif", fontSize: isMobile ? "1.15rem" : "1.3rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
                    {cur.acro} — {cur.subtitle}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: isMobile ? ".79rem" : ".83rem", color: "rgba(255,255,255,.65)", lineHeight: 1.7, maxWidth: 440 }}>{cur.description}</p>
            </div>

            {/* phase tabs */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                gap: 8,
                flexWrap: isMobile ? "nowrap" : "wrap",
                overflowX: isMobile ? "auto" : "visible",
                paddingBottom: isMobile ? 4 : 0,
              }}
            >
              {phases.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    padding: isMobile ? "9px 12px" : "6px 14px", borderRadius: 50,
                    fontSize: isMobile ? ".62rem" : ".65rem", fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase",
                    cursor: "pointer", transition: "all .2s",
                    background: i === active ? "linear-gradient(135deg,#00B69D,#03D4BA)" : "rgba(255,255,255,.06)",
                    color: i === active ? "#fff" : "rgba(255,255,255,.4)",
                    border: `1px solid ${i === active ? "transparent" : "rgba(0,182,157,.2)"}`,
                    flexShrink: 0,
                    whiteSpace: "nowrap",
                    minHeight: isMobile ? 40 : undefined,
                  }}
                >
                  <span style={{ fontFamily: "'Merriweather',serif", fontSize: ".85rem" }}>{p.letter}</span>
                  <span>{p.acro}</span>
                </button>
              ))}
            </div>
          </div>

          {/* right — deliverables */}
          <div style={{
            width: isMobile ? "100%" : 260, background: "#fff", padding: isMobile ? "22px 20px 24px" : "28px 24px",
            display: "flex", flexDirection: "column", justifyContent: "center", gap: 12,
            borderLeft: isMobile ? "none" : "1px solid rgba(0,182,157,.1)",
            borderTop: isMobile ? "1px solid rgba(0,182,157,.1)" : "none",
          }}>
            <p style={{ fontSize: ".6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".09em", color: "#00B69D", marginBottom: 4 }}>
              Entregáveis desta fase
            </p>
            {cur.items.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{
                  marginTop: 2, width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                  background: "linear-gradient(135deg,#00B69D,#03D4BA)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg viewBox="0 0 10 10" fill="none" style={{ width: 10, height: 10 }}>
                    <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span style={{ fontSize: ".79rem", color: "#333", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4 Cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(4,minmax(0,1fr))",
            gap: isMobile ? 10 : 12,
            marginBottom: isMobile ? 12 : 16,
          }}
        >
          {phases.map((p, i) => {
            const cardIn = useInView(); // eslint-disable-line
            const isActive = i === active;
            return (
              <div
                key={i}
                ref={cardIn.ref}
                onClick={() => setActive(i)}
                style={{
                  opacity: cardIn.visible ? 1 : 0,
                  transform: cardIn.visible ? "none" : "translateY(24px)",
                  transition: `opacity .6s ease ${i * 100}ms, transform .6s ease ${i * 100}ms, box-shadow .25s`,
                  borderRadius: 18, overflow: "hidden", cursor: "pointer",
                  border: `1px solid ${isActive ? "rgba(0,182,157,.45)" : "rgba(0,182,157,.12)"}`,
                  boxShadow: isActive ? "0 8px 32px rgba(0,182,157,.16)" : "0 2px 10px rgba(0,0,0,.04)",
                  background: "#fff",
                }}
              >
                {/* visual header */}
                <div style={{
                  height: isMobile ? 108 : 120,
                  background: `linear-gradient(135deg, ${["#00302A", "#002E28", "#002820", "#002420"][i]}, ${["#004538", "#004030", "#003C30", "#003828"][i]})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                }}>
                  {/* grid */}
                  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .05, pointerEvents: "none" }}>
                    <defs><pattern id={`gc${i}`} width="14" height="14" patternUnits="userSpaceOnUse">
                      <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#00B69D" strokeWidth=".4" />
                    </pattern></defs>
                    <rect width="100%" height="100%" fill={`url(#gc${i})`} />
                  </svg>
                  {/* glow */}
                  <div style={{
                    position: "absolute", width: 100, height: 100, borderRadius: "50%", pointerEvents: "none",
                    background: "radial-gradient(ellipse,rgba(0,182,157,.2) 0%,transparent 70%)",
                    top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  }} />
                  {/* watermark letter */}
                  <span style={{
                    position: "absolute", right: 6, bottom: -4,
                    fontFamily: "'Merriweather',serif", fontSize: isMobile ? "4rem" : "5rem", fontWeight: 700,
                    color: "rgba(0,182,157,.07)", lineHeight: 1, pointerEvents: "none", userSelect: "none",
                  }}>{p.letter}</span>
                  {/* icon */}
                  <div style={{ width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, position: "relative", zIndex: 1, transition: "transform .3s", transform: isActive ? "scale(1.1)" : "scale(1)" }}>
                    {p.icon}
                  </div>
                  {/* norm pill */}
                  <div style={{
                    position: "absolute", top: 8, right: 8,
                    background: "rgba(0,0,0,.4)", border: "1px solid rgba(0,182,157,.3)",
                    backdropFilter: "blur(6px)", borderRadius: 8, padding: "3px 8px",
                  }}>
                    <span style={{ fontSize: ".55rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: "#00D4B8" }}>{p.norm}</span>
                  </div>
                  {/* phase number */}
                  <div style={{ position: "absolute", bottom: 8, left: 10, display: "flex", alignItems: "center", gap: 5 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: "50%",
                      background: "linear-gradient(135deg,#00B69D,#03D4BA)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: ".55rem", fontWeight: 900, color: "#fff",
                    }}>{i + 1}</div>
                    <span style={{ fontSize: ".55rem", color: "rgba(255,255,255,.4)", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 700 }}>Fase {i + 1}</span>
                  </div>
                  {/* active underline */}
                  <div style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: "linear-gradient(90deg,#00B69D,#03D4BA)",
                    transition: "opacity .3s, transform .3s",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    transformOrigin: "left",
                  }} />
                </div>

                {/* body */}
                <div style={{ padding: isMobile ? "14px 14px 16px" : "16px 16px 18px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                    <span style={{
                      fontFamily: "'Merriweather',serif", fontSize: isMobile ? "1.45rem" : "1.6rem", fontWeight: 700,
                      lineHeight: 1, color: "#00B69D",
                    }}>{p.letter}</span>
                    <div>
                      <div style={{ fontFamily: "'Merriweather',serif", fontSize: isMobile ? ".95rem" : "1rem", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2 }}>{p.acro}</div>
                      <div style={{ fontSize: ".58rem", color: "#00B69D", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em" }}>{p.subtitle}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: isMobile ? ".72rem" : ".75rem", color: "#666", lineHeight: 1.6 }}>{p.description}</p>
                  {/* active indicator bar */}
                  <div style={{
                    marginTop: 14, height: 2, borderRadius: 2,
                    background: "linear-gradient(90deg,#00B69D,#03D4BA)",
                    transition: "transform .3s",
                    transformOrigin: "left",
                    transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Value Strip ── */}
        <div
          ref={strip.ref}
          style={{
            opacity: strip.visible ? 1 : 0,
            transform: strip.visible ? "none" : "translateY(20px)",
            transition: "opacity .7s ease .2s, transform .7s ease .2s",
            borderRadius: isMobile ? 14 : 18, overflow: "hidden",
            border: "1px solid rgba(0,182,157,.15)",
          }}
        >
          <div style={{
            padding: isMobile ? "10px 16px" : "10px 24px",
            background: "linear-gradient(90deg,#00302A,#003830)",
            borderBottom: "1px solid rgba(0,182,157,.12)",
          }}>
            <span style={{ fontSize: isMobile ? ".57rem" : ".6rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".09em", color: "#00D4B8" }}>
              Ao contratar o Sistema M.A.P.A., a empresa adquire
            </span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3,minmax(0,1fr))", background: "#00302A" }}>
            {valueProps.map((v, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 14, padding: isMobile ? "18px 16px" : "22px 24px",
                borderRight: !isMobile && i < 2 ? "1px solid rgba(0,182,157,.1)" : "none",
                borderBottom: isMobile && i < valueProps.length - 1 ? "1px solid rgba(0,182,157,.1)" : "none",
              }}>
                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Merriweather',serif", fontSize: isMobile ? ".95rem" : "1rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>{v.title}</div>
                  <p style={{ fontSize: isMobile ? ".72rem" : ".74rem", color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: isMobile ? 12 : 16,
            borderRadius: isMobile ? 14 : 18,
            border: "1px solid rgba(0,182,157,.15)",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <div
            style={{
              padding: isMobile ? "18px 16px 16px" : "22px 24px 18px",
              borderBottom: "1px solid rgba(0,182,157,.12)",
              background: "linear-gradient(90deg, rgba(0,182,157,.08), rgba(0,212,184,.05))",
            }}
          >
            <p
              style={{
                fontSize: ".62rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: ".09em",
                color: "#008C79",
                marginBottom: 8,
              }}
            >
              Mapeamento Estratégico
            </p>
            <h3
              style={{
                fontFamily: "'Merriweather', serif",
                fontSize: isMobile ? "1.14rem" : "1.4rem",
                color: "#1A1A1A",
                lineHeight: 1.25,
                marginBottom: 6,
              }}
            >
              Os 13 Riscos Psicossociais
            </h3>
            <p style={{ fontSize: isMobile ? ".76rem" : ".8rem", color: "#555", lineHeight: 1.6 }}>
              Baseado na ISO 45003 e exigências da NR-1.
            </p>
          </div>

          <div
            ref={factorsTrackRef}
            style={{
              display: isMobile ? "flex" : "grid",
              gridTemplateColumns: isMobile ? undefined : isTablet ? "repeat(2,minmax(0,1fr))" : "repeat(3,minmax(0,1fr))",
              gap: isMobile ? 12 : 12,
              padding: isMobile ? "10px" : "16px",
              background: "linear-gradient(180deg, rgba(0,182,157,.03), rgba(0,182,157,.06))",
              overflowX: isMobile ? "auto" : "visible",
              WebkitOverflowScrolling: isMobile ? "touch" : undefined,
              scrollSnapType: isMobile ? "x mandatory" : undefined,
            }}
          >
            {psychosocialFactors.map((factor, index) => (
              <article
                key={factor.title}
                style={{
                  padding: isMobile ? "15px 14px 16px" : "16px 16px 18px",
                  border: "1px solid rgba(0,182,157,.18)",
                  borderRadius: 14,
                  background: "linear-gradient(135deg, rgba(255,255,255,1), rgba(240,252,249,1))",
                  boxShadow: "0 6px 18px rgba(0,0,0,.04)",
                  minHeight: isMobile ? 0 : 184,
                  display: "flex",
                  flexDirection: "column",
                  minWidth: isMobile ? "84vw" : undefined,
                  maxWidth: isMobile ? "84vw" : undefined,
                  flexShrink: isMobile ? 0 : undefined,
                  scrollSnapAlign: isMobile ? "start" : undefined,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isMobile ? "flex-start" : "space-between",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      minWidth: isMobile ? 28 : 26,
                      height: isMobile ? 28 : 26,
                      borderRadius: 999,
                      background: "linear-gradient(135deg,#00B69D,#03D4BA)",
                      color: "#fff",
                      fontSize: isMobile ? ".7rem" : ".67rem",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      letterSpacing: ".02em",
                      padding: "0 7px",
                    }}
                  >
                    {index + 1}
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? ".58rem" : ".56rem",
                      fontWeight: 700,
                      color: "#008C79",
                      textTransform: "uppercase",
                      letterSpacing: ".08em",
                      background: "rgba(0,182,157,.12)",
                      border: "1px solid rgba(0,182,157,.2)",
                      borderRadius: 999,
                      padding: "3px 8px",
                    }}
                  >
                    {isMobile ? "Fator" : "Fator Psicossocial"}
                  </span>
                </div>
                <h4
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: isMobile ? "1rem" : ".98rem",
                    color: "#1A1A1A",
                    marginBottom: 7,
                    lineHeight: 1.3,
                  }}
                >
                  {factor.title}
                </h4>
                <p style={{ fontSize: isMobile ? ".79rem" : ".74rem", lineHeight: 1.62, color: "#4D5D59", margin: 0 }}>{factor.desc}</p>
              </article>
            ))}
          </div>

          <div
            style={{
              padding: isMobile ? "16px 16px 18px" : "20px 24px 22px",
              background: "linear-gradient(135deg,#00302A,#004538)",
            }}
          >
            <p
              style={{
                fontFamily: "'Merriweather', serif",
                fontStyle: "italic",
                color: "#fff",
                fontSize: isMobile ? ".9rem" : "1rem",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              &quot;Cultura do Cuidado é Inteligência de Dados.&quot; Mapear os 13 Riscos Psicossociais não é apenas
              uma escolha humanizada; é a Blindagem Jurídica que sua empresa precisa para sustentar a NR-1 e evitar as
              inconsistências fiscais do eSocial. Onde existe cuidado, não existe prejuízo invisível.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
