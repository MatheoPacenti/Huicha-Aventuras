// import Footer from './components/Footer';
import Actividades from './components/sections/actividades.jsx';
import Hero from './components/sections/hero.jsx';
import NuestrasActividades from './components/sections/nuestrasActividades.jsx';
import Footer from './components/templates/footer.jsx';
import Header from './components/templates/Header.jsx';
// import Section1 from './components/Section1';
// import Section2 from './components/Section2';
import './styles/global.css';
import "/src/styles/paleta-colores.css";

function App() {
  return (
    <>
    <div className="app-container">
      <Header />
      <Hero />
      <NuestrasActividades  />
      <Actividades  />
      <Actividades  />
      <Footer />
    </div>
      </>
  );
}

export default App;
