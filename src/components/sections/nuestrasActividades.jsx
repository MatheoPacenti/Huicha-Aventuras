import { useEffect, useRef, useState } from "react";

import arbolesMarrones from '../../assets/img/arbolesMarrones.png';
import flechRight from "../../assets/img/flecha-carrusel-der.png";
import flechLeft from "../../assets/img/flecha-carrusel-izq.png";
import logoSinLetras from '../../assets/img/logo-sin-letas.png';
import BtnActivities from "../common/buttom-activities.jsx";
import "./NuestrasActividades.css";

// svg
import arco from "/src/assets/img/btn-svg-activities/archery-men.png";
import archeryShot from "/src/assets/img/btn-svg-activities/archery-shot.png";
import rusticKitchen from "/src/assets/img/btn-svg-activities/cocinaRustica.png";
import football from "/src/assets/img/btn-svg-activities/football.png";
import orientationGames from "/src/assets/img/btn-svg-activities/juegosOrientacion.png";
import Paintball from "/src/assets/img/btn-svg-activities/Paintball.png";
import Trekking from "/src/assets/img/btn-svg-activities/trekking-svgrepo-com.png";

// img carrusel
import archery from "../../assets/img/arqueria.png";
import ejCarr from "../../assets/img/ejemplo.png";
import PaintballCarr from "../../assets/img/paintball.png";
import trekkingCarr from "../../assets/img/trekking.png";

function NuestrasActividades() {
  // Botones de actividades
  const activities = [
    { icon: arco, label: "Guerra con arco" },
    { icon: archeryShot, label: "Arquería" },
    { icon: Paintball, label: "Paintball" },
    { icon: Trekking, label: "Trekking" },
    { icon: rusticKitchen, label: "Cocina Rústica" },
    { icon: orientationGames, label: "Juegos de orientación" },
    { icon: football, label: "Footgolf" },
  ];

  const formatId = (label) =>
    "actividad-" +
    label
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  // Carrusel
  const carrusel = [archery, PaintballCarr, trekkingCarr, ejCarr];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef(null);
  const delayRef = useRef(3000); // empieza con 3 segundos

  function changeImage(next = true) {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (next) {
          return prev === carrusel.length - 1 ? 0 : prev + 1;
        } else {
          return prev === 0 ? carrusel.length - 1 : prev - 1;
        }
      });
      setIsFading(false);
    }, 300); // duración del fade
  }

  function handleNext() {
    delayRef.current = 10000; // usuario hizo clic → 10s
    resetInterval();
    changeImage(true);
  }

  function handlePrev() {
    delayRef.current = 10000;
    resetInterval();
    changeImage(false);
  }

  function resetInterval() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      changeImage(true);
      delayRef.current = 3000; // volver a 3s después de una vez
      resetInterval(); // reinicia con nuevo delay
    }, delayRef.current);
  }

  useEffect(() => {
    resetInterval();
    return () => clearInterval(intervalRef.current);
  }, []);
// fin carrusel
  return (
    <section className="nuestras-actividades-section">
      <div className="nuestras-actividades-container">
        <h1 className="company-name">Huicha Aventuras</h1>
        <h2 className="Text-bienvenidos">
          ¡Bienvenidos a nuestras actividades de aventura en Tandil!
        </h2>
      

      <div className="activities-grid">
        {activities.map((activity, index) => (
          <BtnActivities
            key={index}
            icon={activity.icon}
            label={activity.label}
            target={formatId(activity.label)}
          />
        ))}
      </div>

      <div className="company-presentation">
        <img
          className="flech-carrusel"
          src={flechLeft}
          alt="anterior"
          onClick={handlePrev}
        />
        <img
          className={`img-carrusel ${isFading ? "fade" : ""}`}
          src={carrusel[currentIndex]}
          alt="actividad actual"
        />
        <img
          className="flech-carrusel"
          src={flechRight}
          alt="siguiente"
          onClick={handleNext}
        />
      </div>
        <img className="logoSinLetras" src={logoSinLetras} alt="Logo Huicha cura" />

      <p className="info-company">
        ¿Buscas diversión al aire libre y momentos inolvidables? En Huicha Aventuras,
        ofrecemos una variedad de actividades emocionantes para todos. Contamos con
        packs especiales para eventos únicos.
      </p>

      <div className="event-list">
        <span className="event-groups">Egresados</span>
        <span className="event-groups">Excursiones para Estudiantes</span>
        <span className="event-groups">Cumpleaños</span>
      </div>

      <p className="info-company">
        Nuestros packs están diseñados para hacer de tu evento una experiencia
        memorable y llena de diversión. ¡Te invitamos a descubrir todo lo que
        Huicha Aventuras tiene para ofrecerte!
      </p>

      </div>
<div className="arboles">
  <img className="arbol arbol-izquierda" src={arbolesMarrones} alt="árbol marrón" />
  <img className="arbol arbol-derecha" src={arbolesMarrones} alt="árbol marrón" />
</div>
    </section>
    
  );
}

export default NuestrasActividades;
