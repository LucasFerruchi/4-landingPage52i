// import "./App.css";
//Importar el arreglo
import { detalleCard } from "./data/info.js";
import NavBar from "./components/NavBar";
import CarouselApp from "./components/CarouselApp";
import CardApp from "./components/CardApp";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ContactoScreen from "./pages/ContactoScreen.jsx";
import InicioScreem from "./pages/InicioScreen.jsx";
import ErrorScreen from "./pages/ErrorScreen.jsx";

function App() {
  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route path="contacto" element={<ContactoScreen/>} />
        <Route path="/" element={<InicioScreem/>} />
        <Route path="*" element={<ErrorScreen/>} />
      </Routes>

      </BrowserRouter>
      

      <NavBar />
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
