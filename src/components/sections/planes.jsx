import PlanCumple from './planCumple';
import PlanEgresados from './planEgresados';
import PlanFamilia from './planFamilia';

import "./planes.css";
function Planes() {
  return (
    <section id="planes-section" className="planes-container">
      {/* <h2 className="planes-main-title">Nuestras Propuestas y Planes</h2> */}
      
      <PlanEgresados  />
      <PlanFamilia />
      <PlanCumple  />
    </section>
  );
}

export default Planes;
