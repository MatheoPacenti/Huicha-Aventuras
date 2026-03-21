import { Navigate } from 'react-router-dom';
import { useAuth } from '../../utils/authContext';

export default function ProtectedRoute({ children }) {
  const { isAdmin, isLoading } = useAuth();

  if (isLoading) {
    return <div className="admin-loading">Cargando administrador...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
