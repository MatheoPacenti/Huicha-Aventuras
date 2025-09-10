import egresados from "../../assets/img/egresados.png";
import logoHuicha from "../../assets/img/logo-sin-letas.png";

import "./planEgresados.css";
function PlanEgresados() {
  return (
    <section className="background-planes egresados-section">
      <div className="egresados-container main-container">
        <div className="egresados-section">
          <img className="fondo-egresados" src={egresados} alt="egresados" />
          <h3 className="name-plane">Egresados y Escuelas</h3>
          <p className="text">
            Haz que la excursion de tus alumnos sea épica con nuestras
            emocionantes actividades
          </p>
        </div>
        <span className="incluye text">INCLUYE</span>
        <div className="container-incluye">
          <div className="container-jornadas">

            <div className="jornada-container">
            <span className="text jornada">Media Jornada: Diversión</span>
            </div>
            <p className="text">Incluye: 2 actividades.</p>
            <p className="text">
                 Duración: 3hs de pura adrenalina y entretenimiento.
            </p>
          </div>
            <img className="logo-huicha" src={logoHuicha} alt="" />
          <div className="container-jornadas">
            <div className="jornada-container">
            <span className="text jornada">Jornada completa: Aventura Doble</span>
            </div>
            <p className="text">Incluye: 5 actividades para hasta 60 chicos.</p>
            <p className="text">Duración: 6hs de entretenimiento</p>
          </div>

        </div>

        {/* Contenido SEO resumido */}
        <p className="text seo-content">
          Paquetes para egresados en Tandil y excursiones escolares en Tandil. 
          Actividades de aventura para colegios y escuelas en Tandil, Buenos Aires.
        </p>
        
      </div>
    </section>
  );
}

export default PlanEgresados;
