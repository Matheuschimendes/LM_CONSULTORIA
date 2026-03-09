import { WA_START } from '../constants';

export function NavBar() {
  return (
    <nav>
      <img
        src="/logo.svg"
        alt="Liane Milhomem Psicologia Estrategica Corporativa"
        className="nav-logo"
        loading="eager"
      />
      {/* <div className="nav-brand">
        LM <span>Consultoria</span>
      </div> */}
      <div className="nav-right">
        <a href="#mapa" className="nav-link">
          Metodo
        </a>
        <a href="#depoimentos" className="nav-link">
          Resultados
        </a>
        <a href={WA_START} className="nav-btn" target="_blank" rel="noreferrer">
          Falar com Liane
        </a>
      </div>
    </nav>
  );
}
