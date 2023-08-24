// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// //Nuevas dependencias
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "font-awesome/css/font-awesome.css";
// // import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//----------------------------------------------------------
//PROMESAS

const generarInforme = () => {
  return new Promise((resolve, reject) => {
    let informe = false; //ej de respuesta

    setTimeout(() => {
      if (informe) {
        resolve("Recibimos el informe 🤩");
      } else {
        reject("Error 😪");
      }
    }, 2000);
  });
};

//resultado
/*
then: recibir resultdo positivo
catch: recibe error
finally: recibe ambos, pero hay q configurar
*/

generarInforme()
  .then((respuesta) => console.log(respuesta))
  .catch((error) => console.log(error));

console.log(generarInforme());

//por FETCH-----------------------------------------------
fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

//PROMESAS--------------------------------------------------------------------------

//!ASYNC/AWAIT------------------------------------------------------------------------------------------------------------
const obtenerClima = async () => {
  const resp = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
  );
  const data = await resp.json();

  return data;
};

obtenerClima().then((respuesta) => console.log(respuesta));
//!ASYNC/AWAIT------------------------------------------------------------------------------------------------------------
