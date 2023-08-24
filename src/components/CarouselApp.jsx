import React from "react";
//CSS
import "../css/carousel.css";
//Importar las img
import image1 from "../img/02.jpg";
import image2 from "../img/03.jpg";

const CarouselApp = () => {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        // -------------------------
        data-bs-ride="carousel"
      >
        <div className="carousel-inner container-carousel">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="imagen 2" />
          </div>

          <div className="overlay">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-white p-3">
              <h3 className="text-center">
                52Robots, mejoramos tu calidad de vida!
              </h3>
              <button className="btn btn-outline-light btn-lg">Ver mas</button>
            </div>
          </div>
        </div>

        {/* <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
    </>
  );
};

export default CarouselApp;
