import './styles/global.css';
import '/src/styles/paleta-colores.css';

import Actividades from './components/sections/actividades';
import Hero from './components/sections/hero';
import NuestrasActividades from './components/sections/nuestrasActividades';
import Planes from './components/sections/planes';
import Footer from './components/templates/footer';
import Header from './components/templates/Header';
//soy salame e importo todo mal

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <NuestrasActividades />
      <Actividades />
      <Planes />
      <Footer />
    </div>
  );
}

export default App;
