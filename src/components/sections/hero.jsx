import logoHuicha from '../../assets/img/logo-huicha-con-aventura-transparente.png';
import tiroArco from '../../assets/img/tiro-arco.png';

import './hero.css';
function Hero() {
  return (
    <section className="hero">
      <div className='hero-container'>
        <h1 className="hero-title">Huicha Aventuras - Actividades de Aventura en Tandil</h1>
        <img className='tiro-arco' src={tiroArco} alt="Persona practicando tiro con arco en la naturaleza" />
        <img className='logo' src={logoHuicha} alt="Logo de Huicha Aventuras - Actividades de aventura en Tandil" />
      </div>
    </section>
  );
}

export default Hero;
