// import "./App.css";
//Importar el arreglo
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { detalleCard } from "./data/info.js";
import NavBar from "./components/NavBar";
import CarouselApp from "./components/CarouselApp";
import CardApp from "./components/CardApp";
import InicioScreen from "./pages/InicioScreen.jsx"
import ContactoScreen from "./pages/ContactoScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<InicioScreen/>}/>
        <Route path="/contacto" element={<ContactoScreen/>}/>
        <Route path="*" element={<ErrorScreen/>}/>
      </Routes>

      </BrowserRouter>


      <CarouselApp />
      <div className="container">
        <div className="row">
          {detalleCard.map((item, index) => (
            <CardApp key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
