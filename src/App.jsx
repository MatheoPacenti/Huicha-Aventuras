import './styles/global.css';
import '/src/styles/paleta-colores.css';

import Actividades from './components/sections/actividades';
import Hero from './components/sections/hero';
import NuestrasActividades from './components/sections/nuestrasActividades';
import Planes from './components/sections/planes';
import FAQ from './components/sections/faq';
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
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
