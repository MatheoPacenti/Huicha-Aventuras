import logoHuicha from '../../assets/img/logo-huicha-con-aventura-transparente.png';
import tiroArco from '../../assets/img/tiro-arco.png';

import './hero.css';
function Hero() {
  return (
    <section className="hero">
      <div  className='hero-container'>

      <img className='tiro-arco' src= {tiroArco} alt="S" />

      <img className='logo' src= {logoHuicha} alt="Imagen de portada" />
      </div>
    </section>
  );
}

export default Hero;
