import familia from "../../assets/img/familia.png";
import "./planFamilia.css";

function PlanFamilia() {
  return (
    <section className="background-planes familia-section">
      <div className="familia-container main-container">
          <h3 className="name-plane">Aventura en Familia</h3>
          <p className="text">
Pasa el día con tu familia de una forma diferente, estimulante y divertida.
          </p>
          <img className="familia-img" src={familia} alt="familia" />

        <span className="incluye text">INCLUYE</span>

        <div className="container-incluye">
          {/* Media Jornada */}
          <div className="container-jornadas">
            <div className="jornada-container">
              <span className="text jornada">Básico</span>
            </div>
            <p className="text">Incluye: 2 actividades.</p>
            <p className="text">
              Duración: 3hs de pura adrenalina y entretenimiento.
            </p>
          </div>

          {/* Jornada completa */}
          <div className="container-jornadas">
            <div className="jornada-container">
              <span className="text jornada">
                Jornada completa: Aventura Doble
              </span>
            </div>
            <p className="text">Incluye: 4 actividades para hasta 60 chicos.</p>
            <p className="text">Duración: 5hs de entretenimiento.</p>
          </div>
        </div>

        {/* Contenido SEO resumido */}
        <p className="text seo-content">
          Actividades familiares en Tandil y paquetes familiares en Tandil. 
          Aventura en familia en Tandil,
        </p>
      </div>
    </section>
  );
}

export default PlanFamilia;
