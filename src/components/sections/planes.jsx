import PlanCumple from './planCumple';
import PlanEgresados from './planEgresados';
import PlanFamilia from './planFamilia';

import "./planes.css";
function Planes() {
  return (
    <section className="planes-container">

      <PlanEgresados  />
      <PlanFamilia />
      <PlanCumple  />
    </section>
  );
}

export default Planes;
