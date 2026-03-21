import { useEffect, useState } from 'react';
import './jornadas.css';

const Jornadas = () => {
  const [jornadas, setJornadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJornadas = async () => {
      try {
        const response = await fetch('http://localhost:8000/jornadas');
        if (!response.ok) {
          throw new Error('Error al cargar jornadas');
        }
        const data = await response.json();
        setJornadas(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJornadas();
  }, []);

  if (loading) return <div className="loading">Cargando jornadas...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <section className="jornadas-section">
      <h2>Nuestras Jornadas</h2>
      <div className="jornadas-grid">
        {jornadas.map((jornada) => (
          <div key={jornada.id} className="jornada-card">
            <h3>{jornada.nombre}</h3>
            <p><strong>Duración:</strong> {jornada.duracionHoras} horas</p>
            <p><strong>Incluye:</strong> {jornada.incluye}</p>
            <p><strong>Plan:</strong> {jornada.plan?.nombre || 'Sin plan'}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jornadas;
