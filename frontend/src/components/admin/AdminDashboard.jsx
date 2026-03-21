import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';
import AdminActividades from './AdminActividades';
import AdminPlanes from './AdminPlanes';
import AdminReservas from './AdminReservas';
import './admin.css';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [actividadesCount, setActividadesCount] = useState(0);
  const [planesCount, setPlanesCount] = useState(0);
  const [jornadasCount, setJornadasCount] = useState(0);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [aRes, pRes, jRes] = await Promise.all([
          fetch('http://localhost:8000/actividades'),
          fetch('http://localhost:8000/plans'),
          fetch('http://localhost:8000/jornadas'),
        ]);

        if (!aRes.ok || !pRes.ok || !jRes.ok) {
          throw new Error('Error al obtener estadísticas');
        }

        const [aData, pData, jData] = await Promise.all([aRes.json(), pRes.json(), jRes.json()]);
        setActividadesCount(Array.isArray(aData) ? aData.length : 0);
        setPlanesCount(Array.isArray(pData) ? pData.length : 0);
        setJornadasCount(Array.isArray(jData) ? jData.length : 0);
      } catch (err) {
        console.error('No se pudo obtener cantidades', err);
        setActividadesCount(0);
        setPlanesCount(0);
        setJornadasCount(0);
      }
    };

    fetchCounts();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <div className="admin-navbar-left">
          <h2 className="admin-logo">🏕️ ADMIN - Huicha Aventuras</h2>
        </div>
        <div className="admin-navbar-right">
          <button
            onClick={handleLogout}
            className="admin-logout-btn"
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>

      <div className="admin-container">
        <aside className="admin-sidebar">
          <div className="sidebar-menu">
            <button
              className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Dashboard
            </button>
            <button
              className={`sidebar-item ${activeTab === 'actividades' ? 'active' : ''}`}
              onClick={() => setActiveTab('actividades')}
            >
              🎯 Actividades
            </button>
            <button
              className={`sidebar-item ${activeTab === 'planes' ? 'active' : ''}`}
              onClick={() => setActiveTab('planes')}
            >
              📋 Planes
            </button>
            <button
              className={`sidebar-item ${activeTab === 'reservas' ? 'active' : ''}`}
              onClick={() => setActiveTab('reservas')}
            >
              📅 Reservas
            </button>
          </div>
        </aside>

        <main className="admin-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-section">
              <h1>Bienvenido al Panel de Administración</h1>
              <div className="dashboard-cards">
                <div className="stat-card" onClick={() => setActiveTab('actividades')} style={{ cursor: 'pointer' }}>
                  <div className="stat-icon">🎯</div>
                  <div className="stat-info">
                    <h3>Actividades</h3>
                    <p className="stat-number">{actividadesCount}</p>
                  </div>
                </div>
                <div className="stat-card" onClick={() => setActiveTab('planes')} style={{ cursor: 'pointer' }}>
                  <div className="stat-icon">📋</div>
                  <div className="stat-info">
                    <h3>Planes</h3>
                    <p className="stat-number">{planesCount}</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📅</div>
                  <div className="stat-info">
                    <h3>Reservas Activas</h3>
                    <p className="stat-number">24</p>
                  </div>
                </div>
                <div className="stat-card" onClick={() => setActiveTab('reservas')} style={{ cursor: 'pointer' }}>
                  <div className="stat-icon">👥</div>
                  <div className="stat-info">
                    <h3>Jornadas</h3>
                    <p className="stat-number">{jornadasCount}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'actividades' && <AdminActividades />}
          {activeTab === 'planes' && <AdminPlanes />}
          {activeTab === 'reservas' && <AdminReservas />}
        </main>
      </div>
    </div>
  );
}
