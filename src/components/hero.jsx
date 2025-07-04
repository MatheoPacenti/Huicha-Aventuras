// import forest from '../assets/img/forest.png';
import logoHuicha from '../assets/img/logo-huicha-con-aventura-transparente.png';
import tiroArco from '../assets/img/tiro-arco.png';

import './hero.css';
function Hero() {
  return (
    <section className="hero">
      <img className='tiro-arco' src= {tiroArco} alt="S" />
      
      <img className='logo' src= {logoHuicha} alt="Imagen de portada" />
      {/* <img className='bosque' src= {forest} alt="Imagen de portada" /> */}
    </section>
  );
}

export default Hero;
