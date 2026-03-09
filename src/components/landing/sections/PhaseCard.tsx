// src/components/landing/sections/PhaseCard.tsx
"use client";

import { useInView } from "../hooks/useInView";

// Define the type for the phase object
interface Phase {
  letter: string;
  acro: string;
  subtitle: string;
  norm: string;
  description: string;
  items: string[];
  icon: JSX.Element;
}

interface PhaseCardProps {
  phase: Phase;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export function PhaseCard({ phase, index, isActive, onClick }: PhaseCardProps) {
  const cardIn = useInView(); // eslint-disable-line

  return (
    <div
      ref={cardIn.ref}
      onClick={onClick}
      className={`phase-card${isActive ? " phase-card--active" : ""}`}
      style={{
        opacity: cardIn.visible ? 1 : 0,
        transform: cardIn.visible ? "none" : "translateY(24px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* visual header */}
      <div
        className="phase-card__header"
        style={{
          background: `linear-gradient(135deg, ${["#00302A", "#002E28", "#002820", "#002420"][index]}, ${["#004538", "#004030", "#003C30", "#003828"][index]})`,
        }}
      >
        {/* grid */}
        <svg className="phase-card__grid" aria-hidden="true">
          <defs><pattern id={`gc${index}`} width="14" height="14" patternUnits="userSpaceOnUse">
            <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#00B69D" strokeWidth=".4" />
          </pattern></defs>
          <rect width="100%" height="100%" fill={`url(#gc${index})`} />
        </svg>
        {/* glow */}
        <div className="phase-card__glow" />
        {/* watermark letter */}
        <span className="phase-card__watermark">{phase.letter}</span>
        {/* icon */}
        <div className={`phase-card__icon${isActive ? " phase-card__icon--active" : ""}`}>
          {phase.icon}
        </div>
        {/* norm pill */}
        <div className="phase-card__norm">
          <span className="phase-card__norm-text">{phase.norm}</span>
        </div>
        {/* phase number */}
        <div className="phase-card__phase">
          <div className="phase-card__phase-circle">{index + 1}</div>
          <span className="phase-card__phase-text">Fase {index + 1}</span>
        </div>
        {/* active underline */}
        <div className={`phase-card__underline${isActive ? " phase-card__underline--active" : ""}`} />
      </div>

      {/* body */}
      <div className="phase-card__body">
        <div className="phase-card__title-row">
          <span className="phase-card__title-letter">{phase.letter}</span>
          <div>
            <div className="phase-card__title">{phase.acro}</div>
            <div className="phase-card__subtitle">{phase.subtitle}</div>
          </div>
        </div>
        <p className="phase-card__description">{phase.description}</p>
        {/* active indicator bar */}
        <div className={`phase-card__indicator${isActive ? " phase-card__indicator--active" : ""}`} />
      </div>
    </div>
  );
}
