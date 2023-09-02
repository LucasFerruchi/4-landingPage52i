// import "./App.css";
//Importar el arreglo
import { detalleCard } from "./data/info.js";
import NavBar from "./components/NavBar";
import CarouselApp from "./components/CarouselApp";
import CardApp from "./components/CardApp";

function App() {
  return (
    <>
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
