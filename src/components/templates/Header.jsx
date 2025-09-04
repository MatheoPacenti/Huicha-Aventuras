import { useEffect, useState } from "react";
import logoSinLetras from '../../assets/img/logo-sin-letas.png';
import "../../styles/paleta-colores.css";
import "./Header.css";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden"; // Bloquea scroll
  } else {
    document.body.style.overflow = "auto"; // Restaura scroll
  }

  return () => {
    document.body.style.overflow = "auto"; // Limpieza por si se desmonta
  };
}, [isOpen]);

  const boxClass = !hasInteracted ? 'box' : isOpen ? "box open" : "box reverse";
  const showMenu = !hasInteracted ? 'menu' : isOpen ? 'menu-show' : 'menu-hidden';

  const menuHamburguesa = () => {
    setIsOpen(!isOpen); // Cambia el estado al valor opuesto
    setHasInteracted(true);
  };

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Cierra el menú
  }
};
  return (
    
    <header className="header">
      <div className="header__container main-container">
        <a href=""><img
          className="header__logo"
          src={logoSinLetras}
          alt="Logo de Huicha Cura"
          /></a>
        <div className={`${boxClass}`} onClick={menuHamburguesa}>
          <div className="rectangle r1"></div>
          <div className="rectangle r2"></div>
          <div className="rectangle r3"></div>
        </div>
     {isOpen && (
          <div className="menu-overlay" onClick={menuHamburguesa}></div>
        )}
      <nav className= {`${showMenu}`}>
<ul className="desplegable">
  <li className="li-menu" onClick={() => scrollToSection("nuestras-actividades-section")}>
    <span className="text">Nuestras Actividades</span>
  </li>
  <li className="li-menu" onClick={() => scrollToSection("nuestras-actividades-section")}>
    <span className="text">Quienes somos</span>
  </li>
  <li className="li-menu" onClick={() => scrollToSection("nuestras-actividades-section")}>
    <span className="text">Propuestas</span>
  </li>
<li
  className="li-menu"
  onClick={() => {
    scrollToSection("footer");
    const wppIcon = document.querySelector(".wpp");
    const contactSpan = document.querySelector(".contactanos .title");
    if (wppIcon) {
      wppIcon.classList.add("animate-growShrink");
      setTimeout(() => {
        wppIcon.classList.remove("animate-growShrink");
      }, 700);
    }
    if (contactSpan) {
      contactSpan.classList.add("animate-growShrink");
      setTimeout(() => {
        contactSpan.classList.remove("animate-growShrink");
      }, 700);
    }
  }}
>
  <span className="text">Contacto</span>
</li>
</ul>
      </nav>
        </div>

   
    </header>
  );
}

export default Header;
