import { useState } from 'react';
import './admin.css';

export default function AdminReservas() {
  const [reservas, setReservas] = useState([
    { 
      id: 1, 
      cliente: 'Juan García', 
      email: 'juan@example.com',
      plan: 'Plan Familia',
      fecha: '2026-04-15',
      personas: 4,
      estado: 'confirmada',
      monto: 500
    },
    { 
      id: 2, 
      cliente: 'María López', 
      email: 'maria@example.com',
      plan: 'Plan Empresa',
      fecha: '2026-05-20',
      personas: 30,
      estado: 'pendiente',
      monto: 2000
    },
    { 
      id: 3, 
      cliente: 'Carlos Martín', 
      email: 'carlos@example.com',
      plan: 'Plan Familia',
      fecha: '2026-03-10',
      personas: 5,
      estado: 'completada',
      monto: 500
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    cliente: '',
    email: '',
    plan: '',
    fecha: '',
    personas: '',
    estado: 'pendiente',
    monto: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setFormData({ cliente: '', email: '', plan: '', fecha: '', personas: '', estado: 'pendiente', monto: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (reserva) => {
    setFormData(reserva);
    setEditingId(reserva.id);
    setShowForm(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingId) {
      setReservas(reservas.map(r =>
        r.id === editingId ? { ...formData, id: editingId } : r
      ));
    } else {
      setReservas([...reservas, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setFormData({ cliente: '', email: '', plan: '', fecha: '', personas: '', estado: 'pendiente', monto: '' });
  };

  const handleDeleteReserva = (id) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta reserva?')) {
      setReservas(reservas.filter(r => r.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ cliente: '', email: '', plan: '', fecha: '', personas: '', estado: 'pendiente', monto: '' });
  };

  const getEstadoBadge = (estado) => {
    const badges = {
      'confirmada': 'estado-confirmada',
      'pendiente': 'estado-pendiente',
      'completada': 'estado-completada',
      'cancelada': 'estado-cancelada',
    };
    return badges[estado] || 'estado-pendiente';
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Gestión de Reservas</h2>
        <button onClick={handleAddNew} className="admin-btn-primary">
          + Nueva Reserva
        </button>
      </div>

      {showForm && (
        <div className="admin-form-container">
          <form onSubmit={handleSave} className="admin-form">
            <h3>{editingId ? 'Editar' : 'Nueva'} Reserva</h3>
            
            <div className="form-row">
              <div className="form-group half">
                <label>Nombre del Cliente</label>
                <input
                  type="text"
                  name="cliente"
                  value={formData.cliente}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                />
              </div>
              <div className="form-group half">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Plan</label>
                <input
                  type="text"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                />
              </div>
              <div className="form-group half">
                <label>Fecha de Reserva</label>
                <input
                  type="date"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Cantidad de Personas</label>
                <input
                  type="number"
                  name="personas"
                  value={formData.personas}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                />
              </div>
              <div className="form-group half">
                <label>Monto</label>
                <input
                  type="number"
                  name="monto"
                  value={formData.monto}
                  onChange={handleInputChange}
                  required
                  className="admin-input"
                  placeholder="0.00"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Estado</label>
              <select
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
                className="admin-input"
              >
                <option value="pendiente">Pendiente</option>
                <option value="confirmada">Confirmada</option>
                <option value="completada">Completada</option>
                <option value="cancelada">Cancelada</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="submit" className="admin-btn-success">
                Guardar
              </button>
              <button type="button" onClick={handleCancel} className="admin-btn-secondary">
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Fecha</th>
              <th>Personas</th>
              <th>Monto</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reservas.length > 0 ? (
              reservas.map(reserva => (
                <tr key={reserva.id}>
                  <td>{reserva.cliente}</td>
                  <td>{reserva.email}</td>
                  <td>{reserva.plan}</td>
                  <td>{new Date(reserva.fecha).toLocaleDateString('es-ES')}</td>
                  <td>{reserva.personas}</td>
                  <td>${reserva.monto}</td>
                  <td>
                    <span className={`estado-badge ${getEstadoBadge(reserva.estado)}`}>
                      {reserva.estado}
                    </span>
                  </td>
                  <td className="action-buttons">
                    <button
                      onClick={() => handleEdit(reserva)}
                      className="admin-btn-edit"
                    >
                      ✏️ Editar
                    </button>
                    <button
                      onClick={() => handleDeleteReserva(reserva.id)}
                      className="admin-btn-delete"
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="empty-message">No hay reservas registradas</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
