import "./faq.css";

function FAQ() {
  return (
    <section id="faq-section" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Preguntas Frecuentes - Huicha Aventuras</h2>
        
        <div className="faq-list">
          <div className="faq-item">
            <h3 className="faq-question">¿Dónde está ubicado Huicha Aventuras en Tandil?</h3>
            <p className="faq-answer">
              Huicha Aventuras está ubicado en Av. Estrada 2641, Tandil, Buenos Aires. 
              Somos el complejo de actividades de aventura más completo de Tandil, 
              ofreciendo paintball, trekking, arquería y más actividades al aire libre.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">¿Qué actividades de aventura ofrecen en Tandil?</h3>
            <p className="faq-answer">
              Ofrecemos paintball táctico, trekking por las sierras de Tandil, arquería tradicional, 
              guerra con arco, juegos de orientación, footgolf y cocina rústica al aire libre. 
              Todas nuestras actividades están supervisadas por instructores certificados.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">¿Hacen cumpleaños de aventura en Tandil?</h3>
            <p className="faq-answer">
              Sí, somos especialistas en cumpleaños de aventura en Tandil para niños hasta 13 años. 
              Ofrecemos fiestas de cumpleaños temáticas con actividades seguras y supervisadas, 
              perfectas para crear recuerdos inolvidables en Tandil.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">¿Tienen paquetes para egresados en Tandil?</h3>
            <p className="faq-answer">
              Sí, ofrecemos los mejores paquetes para egresados en Tandil y excursiones escolares en Tandil. 
              Nuestras actividades están diseñadas para grupos de estudiantes, combinando diversión, 
              aprendizaje y trabajo en equipo. Perfecto para colegios y escuelas de Tandil.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">¿Qué incluyen las actividades familiares en Tandil?</h3>
            <p className="faq-answer">
              Nuestras actividades familiares en Tandil incluyen trekking familiar, arquería para todas las edades, 
              juegos de orientación educativos y cocina rústica al aire libre. Diseñadas para fomentar 
              el trabajo en equipo familiar y la conexión con la naturaleza de Tandil.
            </p>
          </div>

          <div className="faq-item">
            <h3 className="faq-question">¿Cómo puedo contactar Huicha Aventuras?</h3>
            <p className="faq-answer">
              Puedes contactarnos al teléfono +54 2494 38 1198 o por email a info@huichaaventuras.com. 
              También nos encuentras en Instagram @huicha.aventuras. Estamos ubicados en Av. Estrada 2641, Tandil.
            </p>
          </div>
        </div>

        {/* Contenido SEO oculto adicional */}
        <div className="seo-hidden-content">
          <h3>Información adicional sobre Huicha Aventuras en Tandil</h3>
          <p>
            Huicha Aventuras es el complejo de actividades de aventura más completo de Tandil, Buenos Aires. 
            Ubicados en Av. Estrada 2641, Tandil, ofrecemos paintball en Tandil, trekking en Tandil, 
            arquería en Tandil, y cocina rústica en Tandil. Somos especialistas en cumpleaños de aventura 
            en Tandil, viajes de egresados en Tandil, y actividades familiares en Tandil.
          </p>
          <p>
            Nuestras instalaciones están diseñadas para grupos de todas las edades, desde niños hasta adultos. 
            Cada actividad está supervisada por instructores certificados y equipada con materiales de primera calidad. 
            Perfecto para eventos corporativos en Tandil, team building en Tandil, y celebraciones especiales en Tandil.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
