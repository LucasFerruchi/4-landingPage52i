import React, { useState, useEffect } from "react";
//importar funcion
import { obtenerClima } from "../helpers/obtener-clima";
import "../css/navbar.css";

const NavBar = ({ modoOscuro, cambiarModoOscuro }) => {
  //Estado para manejar el clima
  const [tiempo, setTiempo] = useState(null);

  //useEffect -- ejecuta en el montaje del componente
  useEffect(() => {
    clima();
  }, []);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      obtenerClima(lat, long)
        .then((respuesta) => {
          const { main, weather } = respuesta;
          setTiempo({
            temp: main.temp,
            clima: weather[0],
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="fixed-top">
        <nav
          className={`navbar navbar-expand-lg ${
            modoOscuro ? "bg-dark navbar-dark" : "bg-light"
          }`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className="fa fa-ravelry" aria-hidden="true"></i>
              52Robots
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contactos
                  </a>
                </li>
              </ul>
              {/* DATOS DEL CLIMA */}
              {tiempo && (
                <div className="d-flex justify-content-center align-items-center ">
                  <img
                    src={`http://openweathermap.org/img/wn/${tiempo.clima.icon}@2x.png`}
                    alt="clima"
                    className="icon-tiempo"
                  />
                  <span className={modoOscuro ? "text-white" : ""}>
                    {Math.round(tiempo.temp)}°C
                  </span>
                </div>
              )}
              <div className="d-flex justify-content-center align-items-center gap-2">
                {modoOscuro ? (
                  <i className="fa fa-moon-o text-white" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-sun-o" aria-hidden="true"></i>
                )}

                <div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      onChange={cambiarModoOscuro}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
