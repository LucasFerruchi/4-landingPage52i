// import "./App.css";
//Importar el arreglo
import { useState } from "react";
import { detalleCard } from "./data/info.js";
import NavBar from "./components/NavBar";
import CarouselApp from "./components/CarouselApp";
import CardApp from "./components/CardApp";

function App() {
  //Estado modoOscuro
  const [modoOscuro, setModoOscuro] = useState(false);

  //Funcion para manejar el modoOscuro
  const cambiarModoOscuro = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <>
      <div className={modoOscuro ? "bg-secondary" : ""}>
        <NavBar modoOscuro={modoOscuro} cambiarModoOscuro={cambiarModoOscuro} />
        <CarouselApp />
        <div className="container">
          <div className="row">
            {detalleCard.map((item, index) => (
              <CardApp key={index} item={item} modoOscuro={modoOscuro} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
