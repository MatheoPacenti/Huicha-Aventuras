import { useState } from "react";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const boxClass = !hasInteracted ? 'box' : isOpen ? "box open" : "box reverse";
  const showMenu = !hasInteracted ? 'menu' : isOpen ? 'menu-show' : 'menu-hidden';

  const menuHamburguesa = () => {
    setIsOpen(!isOpen); // Cambia el estado al valor opuesto
    setHasInteracted(true);
  };

  return (
    <header className="header">


      <div className="header__container main-container">
        <a href=""><img
          className="header__logo"
          src="/img/logo-sin-letas.png"
          alt="Logo de Huicha Cura"
          /></a>
        <div className={`${boxClass}`} onClick={menuHamburguesa}>
          <div className="rectangle r1"></div>
          <div className="rectangle r2"></div>
          <div className="rectangle r3"></div>
        </div>

      <nav className= {`${showMenu}`}>
        <ul className="desplegable">
            <li className="li-menu"><span className="text">Nuestras Actividades</span></li>
            <li className="li-menu"><span className="text">Quienes somos</span></li>
            <li className="li-menu"><span className="text">Propuestas</span></li>
            <li className="li-menu"><span className="text">Contacto</span></li>
        </ul>
      </nav>
      </div>

    </header>
  );
}

export default Header;
