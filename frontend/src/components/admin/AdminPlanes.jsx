import React, { useState, useEffect } from 'react';
import './admin.css';

const API_BASE_URL = 'http://localhost:8000';

export default function AdminPlanes() {
  const [planes, setPlanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    duracion: '',
    capacidad: '',
    precio: '',
  });

  const fetchPlanes = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/plans`);
      if (!response.ok) {
        throw new Error('Error al cargar los planes');
      }
      const data = await response.json();
      setPlanes(data);
      setError('');
    } catch (err) {
      setError(`Error al cargar los planes: ${err.message}`);
      console.error('Error fetching planes:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanes();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNew = () => {
    setFormData({ nombre: '', descripcion: '', duracion: '', capacidad: '', precio: '' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (plan) => {
    setFormData({
      nombre: plan.nombre || '',
      descripcion: plan.descripcion || '',
      duracion: plan.duracion || '',
      capacidad: plan.capacidad || '',
      precio: plan.precio || '',
    });
    setEditingId(plan.id);
    setShowForm(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const url = editingId ? `${API_BASE_URL}/plans/${editingId}` : `${API_BASE_URL}/plans`;
      const method = editingId ? 'PATCH' : 'POST';

      const payload = {
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        duracion: Number(formData.duracion),
        capacidad: Number(formData.capacidad),
        precio: Number(formData.precio),
      };

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el plan');
      }

      await fetchPlanes();
      setShowForm(false);
      setFormData({ nombre: '', descripcion: '', duracion: '', capacidad: '', precio: '' });
    } catch (err) {
      setError(`Error al guardar el plan: ${err.message}`);
      console.error('Error saving plan:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('驴Est谩s seguro de que quieres eliminar este plan?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/plans/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Error al eliminar el plan');
      }
      await fetchPlanes();
    } catch (err) {
      setError(`Error al eliminar el plan: ${err.message}`);
      console.error('Error deleting plan:', err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ nombre: '', descripcion: '', duracion: '', capacidad: '', precio: '' });
  };

  if (loading) {
    return (
      <div className="admin-section">
        <div className="loading">Cargando planes...</div>
      </div>
    );
  }

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Gesti贸n de Planes</h2>
        <button onClick={handleAddNew} className="admin-btn-primary">+ Nuevo Plan</button>
      </div>

      {error && <div className="error-message" style={{ marginBottom: '20px' }}>{error}</div>}

      {showForm && (
        <div className="admin-form-container">
          <form onSubmit={handleSave} className="admin-form">
            <h3>{editingId ? 'Editar' : 'Nuevo'} Plan</h3>

            <div className="form-group">
              <label>Nombre del Plan</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="admin-input" />
            </div>

            <div className="form-group">
              <label>Descripci贸n</label>
              <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} required className="admin-textarea" rows="4" />
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label>Duraci贸n (horas)</label>
                <input type="number" name="duracion" value={formData.duracion} onChange={handleInputChange} required className="admin-input" />
              </div>
              <div className="form-group half">
                <label>Capacidad (personas)</label>
                <input type="number" name="capacidad" value={formData.capacidad} onChange={handleInputChange} required className="admin-input" />
              </div>
            </div>

            <div className="form-group">
              <label>Precio Total</label>
              <input type="number" name="precio" value={formData.precio} onChange={handleInputChange} required className="admin-input" placeholder="0.00" />
            </div>

            <div className="form-actions">
              <button type="submit" className="admin-btn-success">Guardar</button>
              <button type="button" onClick={handleCancel} className="admin-btn-secondary">Cancelar</button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripci贸n</th>
              <th>Duraci贸n</th>
              <th>Capacidad</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {planes.length > 0 ? (
              planes.map((plan) => (
                <tr key={plan.id}>
                  <td>{plan.nombre}</td>
                  <td>{plan.descripcion}</td>
                  <td>{plan.duracion ? `${plan.duracion}h` : '-'}</td>
                  <td>{plan.capacidad ? `${plan.capacidad} personas` : '-'}</td>
                  <td>${plan.precio || 0}</td>
                  <td className="action-buttons">
                    <button onClick={() => handleEdit(plan)} className="admin-btn-edit">鉁忥笍 Editar</button>
                    <button onClick={() => handleDelete(plan.id)} className="admin-btn-delete">矸戯笍 Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="empty-message">No hay planes registrados</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
