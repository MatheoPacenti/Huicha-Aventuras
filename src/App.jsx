// import Footer from './components/Footer';
// import Actividades from './components/sections/actividades.jsx';
import Actividades from './components/sections/actividades.jsx';
import Hero from './components/sections/hero.jsx';
import NuestrasActividades from './components/sections/nuestrasActividades.jsx';
import Footer from './components/templates/footer.jsx';
import Header from './components/templates/Header.jsx';
import './styles/global.css';
import "/src/styles/paleta-colores.css";


function App() {
  return (
    <>
    <div className="app-container">
      <Header />
      <Hero />
      <NuestrasActividades  />
      
      <Actividades />
      <Footer />
    </div>
      </>
  );
}

export default App;
