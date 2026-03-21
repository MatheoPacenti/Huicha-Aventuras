import "./buttom-activities.css";

function BtnActivities({ icon, label, target }) {
  // Sanitizamos el label para usarlo como clase (ej: "Egresados Especiales" => "egresados-especiales")

  const classLabel =     label
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  return (
    <section className="btn-section">
      <a href={`#${classLabel}`} className="btn-activity">
        <div className={`activity-button ${classLabel}`}>
          <img src={icon} alt={label} className="activity-icon" />
          <span>{label}</span>
        </div>
      </a>
    </section>
  );
}

export default BtnActivities;
