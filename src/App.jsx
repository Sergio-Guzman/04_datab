import './App.css';
import { AppRouter } from './AppRouter';
import Footer from './Componentes/Pagina-principal/Footer'
import Banner from './Componentes/Pagina-principal/Banner'
// import  Hamburguesa  from './Componentes/Header-1/Hambuguesa';
// import  Carrito  from './Componentes/Header-1/Carrito';



function App() {
  return (
    <div>
      {/* <Hamburguesa />
      <Carrito /> */}
      <AppRouter />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
