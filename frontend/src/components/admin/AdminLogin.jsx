import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';
import './admin.css';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { isAdmin, login } = useAuth();

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin/dashboard');
    }
  }, [isAdmin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/dashboard');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h1>Acceso de Administrador</h1>
        <p className="admin-subtitle">Huicha Aventuras</p>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <label htmlFor="password">Contraseña de Administrador</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Ingresa la contraseña"
              className="admin-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="admin-login-btn">
            Ingresar
          </button>
        </form>

        <div className="info-box">
          <p>
            <strong>Demo:</strong> Usa la contraseña <code>admin123</code>
          </p>
        </div>
      </div>
    </div>
  );
}
