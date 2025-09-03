import banderinDos from '../../assets/img/banderin-dos.png';
import banderines from '../../assets/img/banderines.png';

import blanco from '../../assets/img/blanco-cumple.png';
import tiroArco from '../../assets/img/tiro-arco-cumple.png';

import "./planCumple.css";

function PlanCumple() {

  return (
    <section className="cumple background-planes">
      <div className="cumple-container main-container">
        <img className='banderin-uno' src={banderines} alt="" />
      <h3 className="title name-plane">Tu cumpleaños en Huicha</h3>
        <img className='banderin-dos' src={banderinDos} alt="" />

<p className="text">¡Celebra el cumpleaños de tus pequeños con Huicha Aventura y convierte su día especial en una experiencia inolvidable! Edad máxima 13 años En Huicha Aventura, transformamos cada celebración en una aventura emocionante y única. Diseñamos fiestas para niños de hasta 13 años con actividades que garantizan diversión, emoción y recuerdos inolvidables.</p>
<div className='container-actividades'>
  <img className='tiroArco' src={tiroArco} alt="" />
  <p className='text extra-bold'>2 Actividades</p>
    <img src={blanco} alt="" />
</div>
<p className='text'>
  <span className='texto-principal'>
  ¡Deja volar tu imaginación y personaliza la fiesta al gusto de los cumpleañeros!
  </span>
  <span>
  Reserva hoy y asegura un día lleno de diversión y alegría para todos los niños.
  </span>
</p>
        </div>
    </section>
  );
}

export default PlanCumple;
