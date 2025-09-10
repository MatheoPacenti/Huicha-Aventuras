import { useEffect, useState } from "react";
import logoSinLetras from '../../assets/img/logo-sin-letas.png';
import "../../styles/paleta-colores.css";
import "./Header.css";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

// useEffect para manejar el scroll
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50); // Cambia a negro transparente después de 50px de scroll
  };

  window.addEventListener('scroll', handleScroll);
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const boxClass = !hasInteracted ? 'box' : isOpen ? "box open" : "box reverse";
  const showMenu = !hasInteracted ? 'menu' : isOpen ? 'menu-show' : 'menu-hidden';

  const menuHamburguesa = () => {
    setIsOpen(!isOpen); // Cambia el estado al valor opuesto
    setHasInteracted(true);
  };

const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId);
  if (el) {
    const headerHeight = 80; // Altura del header normal
    const elementPosition = el.offsetTop;
    const offsetPosition = elementPosition - headerHeight - 20; // 20px extra de margen
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
    setIsOpen(false); // Cierra el menú
  }
};
  return (
    
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container main-container">
        <a href="/" aria-label="Ir al inicio">
          <img
            className="header__logo"
            src={logoSinLetras}
            alt="Logo de Huicha Aventuras - Actividades de aventura en Tandil"
          />
        </a>
        <button 
          className={`${boxClass}`} 
          onClick={menuHamburguesa}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <div className="rectangle r1"></div>
          <div className="rectangle r2"></div>
          <div className="rectangle r3"></div>
        </button>
     {isOpen && (
          <div className="menu-overlay" onClick={menuHamburguesa}></div>
        )}
      <nav className= {`${showMenu}`}>
<ul className="desplegable">
  <li
    className="li-menu"
    onClick={() => scrollToSection("nuestras-actividades-section")}
    tabIndex={0}
    role="button"
  >
    <span className="text">Nuestras Actividades</span>
  </li>

  <li
    className="li-menu"
    onClick={() => scrollToSection("nuestras-actividades-section")}
    tabIndex={0}
    role="button"
  >
    <span className="text">Propuestas</span>
  </li>
  <li
    className="li-menu"
    onClick={() => scrollToSection("faq-section")}
    tabIndex={0}
    role="button"
  >
    <span className="text">Preguntas Frecuentes</span>
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
