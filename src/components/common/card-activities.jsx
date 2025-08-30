import "./card-activities.css";
function CardActivities({icon, label, img, infoActivitie }) {

  const classLabel =     label
      .toLowerCase()
      .replace(/\s+/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  return (
    <section  id={classLabel} className={`card-activities background-activities ${classLabel}`} >
      <div className="main-container">
        <div className="activity-name-container">
            <img className= {`activity-background ${classLabel} `} src={icon} alt="" />
          <h3 className="activity-name">{label}</h3>
            <img className= {`activity-background ${classLabel} reverse`} src={icon} alt="" />
        </div>
        <img className={`${classLabel}-img img-activities`} src={img} alt="" />
        <p className="text">{infoActivitie}</p>
      </div>
    </section>
  );
}

export default CardActivities;
