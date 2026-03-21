import { useEffect, useState } from 'react';
import './admin.css';

const API_BASE_URL = 'http://localhost:8000';

export default function AdminActividades() {
  const [actividades, setActividades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    imagen: null,
    icon: null,
  });

  const fetchActividades = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/actividades`);
      if (!response.ok) {
        throw new Error('Error al cargar actividades');
      }
      const data = await response.json();
      setActividades(data);
      setError('');
    } catch (err) {
      setError(`Error al cargar actividades: ${err.message}`);
      console.error('Error fetching actividades:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActividades();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] || null }));
  };

  const handleAddNew = () => {
    setFormData({ nombre: '', descripcion: '', imagen: null, icon: null });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (actividad) => {
    setFormData({
      nombre: actividad.nombre || '',
      descripcion: actividad.descripcion || '',
      imagen: null, // No podemos restaurar archivos desde URLs
      icon: null,   // Los usuarios tendrán que seleccionar nuevos si quieren cambiar
    });
    setEditingId(actividad.id);
    setShowForm(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('nombre', formData.nombre);
      formDataToSend.append('descripcion', formData.descripcion);
      
      if (formData.imagen) {
        formDataToSend.append('imagen', formData.imagen);
      }
      if (formData.icon) {
        formDataToSend.append('icon', formData.icon);
      }

      const method = editingId ? 'PATCH' : 'POST';
      const url = editingId ? `${API_BASE_URL}/actividades/${editingId}` : `${API_BASE_URL}/actividades`;

      const response = await fetch(url, {
        method,
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Error al guardar la actividad');
      }

      await fetchActividades();
      setShowForm(false);
      setFormData({ nombre: '', descripcion: '', imagen: null, icon: null });
    } catch (err) {
      setError(`Error al guardar la actividad: ${err.message}`);
      console.error('Error saving actividad:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de que quieres eliminar esta actividad?')) return;

    try {
      const response = await fetch(`${API_BASE_URL}/actividades/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Error al eliminar la actividad');
      }
      await fetchActividades();
    } catch (err) {
      setError(`Error al eliminar la actividad: ${err.message}`);
      console.error('Error deleting actividad:', err);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ nombre: '', descripcion: '', imagen: null, icon: null });
  };

  if (loading) {
    return (
      <div className="admin-section">
        <div className="loading">Cargando actividades...</div>
      </div>
    );
  }

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Gestión de Actividades</h2>
        <button onClick={handleAddNew} className="admin-btn-primary">
          + Nueva Actividad
        </button>
      </div>

      {error && <div className="error-message" style={{ marginBottom: '20px' }}>{error}</div>}

      {showForm && (
        <div className="admin-form-container">
          <form onSubmit={handleSave} className="admin-form">
            <h3>{editingId ? 'Editar' : 'Nueva'} Actividad</h3>

            <div className="form-group">
              <label>Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="admin-input" />
            </div>

            <div className="form-group">
              <label>Descripción</label>
              <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} required className="admin-textarea" rows="4" />
            </div>

            <div className="form-group">
              <label>Imagen de la actividad</label>
              <input 
                type="file" 
                name="imagen" 
                onChange={handleFileChange} 
                accept="image/*" 
                className="admin-input" 
              />
              {formData.imagen && (
                <div className="file-preview">
                  <small>Seleccionado: {formData.imagen.name}</small>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Ícono (PNG transparente)</label>
              <input 
                type="file" 
                name="icon" 
                onChange={handleFileChange} 
                accept=".png" 
                className="admin-input" 
              />
              {formData.icon && (
                <div className="file-preview">
                  <small>Seleccionado: {formData.icon.name}</small>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button type="submit" className="admin-btn-success">Guardar</button>
              <button type="button" onClick={handleCancel} className="admin-btn-secondary">Cancelar</button>
            </div>
          </form>
        </div>
      )
      }

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {actividades.length > 0 ? (
              actividades.map((actividad) => (
                <tr key={actividad.id}>
                  <td>{actividad.nombre}</td>
                  <td>{actividad.descripcion}</td>
                  <td className="action-buttons">
                    <button onClick={() => handleEdit(actividad)} className="admin-btn-edit">✏️ Editar</button>
                    <button onClick={() => handleDelete(actividad.id)} className="admin-btn-delete">🗑️ Eliminar</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="empty-message">No hay actividades registradas</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
