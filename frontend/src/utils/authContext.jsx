import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [adminName, setAdminName] = useState('');

  const checkAuth = () => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsAdmin(true);
      setAdminName('Administrador');
      setIsLoading(false);
      return true;
    }
    setIsAdmin(false);
    setAdminName('');
    setIsLoading(false);
    return false;
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = (password) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      setAdminName('Administrador');
      localStorage.setItem('adminToken', 'autenticado');
      setIsLoading(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setAdminName('');
    localStorage.removeItem('adminToken');
  };

  return (
    <AuthContext.Provider value={{ isAdmin, isLoading, adminName, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
