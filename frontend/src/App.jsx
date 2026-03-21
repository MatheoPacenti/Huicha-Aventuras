import './styles/global.css';
import '/src/styles/paleta-colores.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import AdminLogin from './components/admin/AdminLogin';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Actividades from './components/sections/actividades';
import FAQ from './components/sections/faq';
import Hero from './components/sections/hero';
import Jornadas from './components/sections/jornadas';
import NuestrasActividades from './components/sections/nuestrasActividades';
import Planes from './components/sections/planes';
import Footer from './components/templates/footer';
import Header from './components/templates/Header';
import { AuthProvider } from './utils/authContext';

function Home() {
  return (
    <>
      <Header />
      <main className='app-container'>
        <Hero />
        <NuestrasActividades />
        <Actividades />
        <Planes />
        <Jornadas />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
