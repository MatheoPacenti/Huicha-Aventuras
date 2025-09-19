import egresados from "../../assets/img/egresados.png";
import logoHuicha from "../../assets/img/logo-sin-letas.png";

import "./planEgresados.css";
function PlanEgresados() {
  return (
    <article className="background-planes egresados-section">
      <div className="egresados-container main-container">
        <div className="egresados-section">
          <img className="fondo-egresados" src={egresados} alt="Grupo de egresados celebrando en Huicha Aventuras" loading="lazy" />
          <h3 className="name-plane">Planes para Egresados y Escuelas</h3>
          <p className="text">
            Haz que la excursion de tus alumnos sea épica con nuestras
            emocionantes actividades
          </p>
        </div>
        <span className="incluye text">INCLUYE</span>
        <div className="container-incluye">
          <div className="container-jornadas">

            <div className="jornada-container">
            <h4 className="text jornada">Media Jornada: Diversión</h4>
            </div>
            <p className="text">Incluye: 2 actividades.</p>
            <p className="text">
                 Duración: 3hs de pura adrenalina y entretenimiento.
            </p>
          </div>
            <img className="logo-huicha" src={logoHuicha} alt="Logo de Huicha Aventuras" loading="lazy" />
          <div className="container-jornadas">
            <div className="jornada-container">
            <h4 className="text jornada">Jornada completa: Aventura Doble</h4>
            </div>
            <p className="text">Incluye: 5 actividades para hasta 60 chicos.</p>
            <p className="text">Duración: 6hs de entretenimiento</p>
          </div>

        </div>
        
      </div>
    </article>
  );
}

export default PlanEgresados;
