import { useEffect, useRef, useState } from "react";
import { activities, formatId } from "../../components/data/activities.js";

import arbolesMarrones from '../../assets/img/arbolesMarrones.png';
import flechRight from "../../assets/img/flecha-carrusel-der.png";
import flechLeft from "../../assets/img/flecha-carrusel-izq.png";
import logoSinLetras from '../../assets/img/logo-sin-letas.png';
import BtnActivities from "../common/buttom-activities.jsx";
import "./nuestrasActividades.css";

function NuestrasActividades() {
 
  // Carrusel
  const carrusel = activities.map((activity) => activity.img);
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
    <section id="nuestras-actividades-section" className="nuestras-actividades-section">
      <div className="nuestras-actividades-container">
        <h2 className="company-name">Huicha Aventuras</h2>
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
          alt="Flecha para ver actividad anterior"
          onClick={handlePrev}
        />
        <img
          className={`img-carrusel ${isFading ? "fade" : ""}`}
          src={carrusel[currentIndex]}
          alt={`Imagen de ${activities[currentIndex]?.label || 'actividad'} en Huicha Aventuras`}
          loading="lazy"
        />
        <img
          className="flech-carrusel"
          src={flechRight}
          alt="Flecha para ver siguiente actividad"
          onClick={handleNext}
        />
      </div>
        <img className="logoSinLetras" src={logoSinLetras} alt="Logo de Huicha Aventuras" />

      <p className="info-company">
        ¿Buscas diversión al aire libre y momentos inolvidables en Tandil? En Huicha Aventuras,
        ofrecemos una variedad de actividades de aventura emocionantes para todos. Contamos con
        packs especiales para eventos únicos: cumpleaños de aventura, viajes de egresados y excursiones familiares.
      </p>

      <div className="event-list">
        <span className="event-groups">Egresados</span>
        <span className="event-groups">Excursiones para Estudiantes</span>
        <span className="event-groups">Cumpleaños</span>
      </div>

      <p className="info-company">
        Nuestros packs de aventura están diseñados para hacer de tu evento una experiencia
        memorable y llena de diversión en Tandil. Desde paintball y trekking hasta arquería y cocina rústica,
        tenemos actividades perfectas para grupos de todas las edades. ¡Te invitamos a descubrir todo lo que
        Huicha Aventuras tiene para ofrecerte en el corazón de la naturaleza!
      </p>

      <p className="info-company seo-content">
        En Huicha Aventuras, ubicados en Tandil, Buenos Aires, ofrecemos las mejores actividades de aventura 
        al aire libre de la región. Nuestro complejo cuenta con instalaciones especialmente diseñadas para 
        paintball, trekking por senderos naturales, tiro con arco profesional, y experiencias de cocina rústica 
        en un entorno natural único. Somos el destino preferido para cumpleaños de aventura, viajes de egresados 
        y excursiones familiares en Tandil.
      </p>

      <p className="info-company seo-content">
        Nuestras actividades de aventura en Tandil incluyen paintball táctico, trekking por las sierras de Tandil, 
        arquería tradicional y guerra con arco, juegos de orientación con brújula y mapas, footgolf en canchas 
        naturales, y cocina rústica al aire libre. Cada actividad está supervisada por instructores certificados 
        y equipada con materiales de primera calidad. Perfecto para grupos escolares, empresas, familias y 
        celebraciones especiales en Tandil.
      </p>

      </div>

      {/* Contenido SEO oculto para más palabras clave */}
      <div className="seo-hidden-content">
        <h3>Actividades de aventura en Tandil - Huicha Aventuras</h3>
        <p>
          Huicha Aventuras es el complejo de actividades de aventura más completo de Tandil, Buenos Aires. 
          Ofrecemos paintball en Tandil, trekking en las sierras de Tandil, arquería en Tandil, y cocina rústica 
          en Tandil. Nuestras instalaciones están ubicadas en Av. Estrada 2641, Tandil, y contamos con más de 
          6 actividades diferentes para todas las edades. Somos especialistas en cumpleaños de aventura en Tandil, 
          viajes de egresados en Tandil, y excursiones escolares en Tandil.
        </p>
        <p>
          Nuestras actividades incluyen: paintball táctico en Tandil, trekking por senderos naturales de Tandil, 
          tiro con arco en Tandil, guerra con arco en Tandil, juegos de orientación en Tandil, footgolf en Tandil, 
          y cocina rústica al aire libre en Tandil. Cada actividad está diseñada para grupos de diferentes tamaños 
          y edades, desde niños hasta adultos. Contamos con instructores certificados y equipamiento de primera calidad.
        </p>
        <p>
          Huicha Aventuras es el destino perfecto para eventos corporativos en Tandil, cumpleaños temáticos en Tandil, 
          despedidas de soltero en Tandil, y actividades de team building en Tandil. Nuestro complejo está abierto 
          todos los días y ofrecemos paquetes especiales para grupos grandes. Contactanos al +54 2494 38 1198 para 
          más información sobre nuestras actividades de aventura en Tandil.
        </p>
      </div>

<div className="arboles">
  <img className="arbol arbol-izquierda" src={arbolesMarrones} alt="Árbol marrón decorativo en el paisaje de Huicha Aventuras" loading="lazy" />
  <img className="arbol arbol-derecha" src={arbolesMarrones} alt="Árbol marrón decorativo en el paisaje de Huicha Aventuras" loading="lazy" />
</div>
    </section>
    
  );
}

export default NuestrasActividades;
