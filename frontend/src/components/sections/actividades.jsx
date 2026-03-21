import { useEffect, useMemo, useState } from "react";
import { activities, formatId } from "../../components/data/activities.js";
import CardActivities from "../common/card-activities";
import "./actividades.css";

function Actividades() {
  const [showAll, setShowAll] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState(null);
  
  const slugify = (label) => formatId(label).replace("actividad-", "");
  // Slugs en el mismo orden que activities
  const slugs = useMemo(() => activities.map((a) => slugify(a.label)), []);

  // Leer hash al entrar y cuando cambia (#cocina-rustica)
  useEffect(() => {
    const updateFromHash = () => {
      const raw = window.location.hash.replace("#", "");
      setSelectedSlug(raw || null);
      if (raw) setShowAll(false); // si el user elige una actividad, volvemos al modo "2 cards"
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  // Elegir qué actividades mostrar
  const activitiesToShow = useMemo(() => {
    if (showAll) return activities;

    if (!selectedSlug) {
      return activities.slice(0, 2);
    }

    const idx = slugs.indexOf(selectedSlug);
    if (idx === -1) return activities.slice(0, 2);
    if (idx === 0) {
      return activities.slice(0, 2);
    }

    return [activities[idx], activities[0]];
  }, [showAll, selectedSlug, slugs]);

  // Scroll suave a la actividad objetivo (si está)
  useEffect(() => {
    if (!selectedSlug) return;
    const t = setTimeout(() => {
      const el = document.getElementById(selectedSlug);
      if (el) {
        const headerHeight = 20; // Altura del header normal
        const windowHeight = window.innerHeight;
        const elementHeight = el.offsetHeight;
        const elementPosition = el.offsetTop;
        
        // Calcular posición para centrar la card en la pantalla
        const centerPosition = elementPosition - (windowHeight - elementHeight) / 2;
        const offsetPosition = Math.max(centerPosition - headerHeight, 0);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); // Aumentar el delay para asegurar que el DOM esté actualizado
    return () => clearTimeout(t);
  }, [selectedSlug, activitiesToShow]);

  // 🔹 función separada para el botón
  const handleToggleShowAll = () => {
    setShowAll((v) => {
      const newValue = !v;
      if (newValue) {
        setSelectedSlug(null); // limpiar solo el estado
      }
      return newValue;
    });
  };

  return (
    <section className="actividades-section">
      <div className="background">
        {activitiesToShow.map((activity) => (
          <CardActivities
            key={slugify(activity.label)}
            icon={activity.icon}
            label={activity.label}
            img={activity.img}
            infoActivitie={activity.infoActivitie}
          />
        ))}
      </div>

        <div className="ver-mas-container">
          <button className="ver-mas-btn text" onClick={handleToggleShowAll}>
            {showAll ? "Ver menos" : "Ver todas las actividades"}
          </button>
        </div>
    </section>
  );
}

export default Actividades;
