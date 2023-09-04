import React from 'react';
import "../css/footer.css";

const Footer = () => {
    return (
    <>
    <div className="container-footer">
        <div className="grupo-1">
            <div className="box">
                <i className="fa fa-ravelry" aria-hidden="true"></i>
            </div>
            <div className="box">
                <ul>
                    <li><a href="">CONTACTO COMERCIAL</a></li>
                    <li><a href="">ACERCA DE NOSOTROS</a></li>
                    <li><a href="">TÉRMINOS Y CONDICIONES</a></li>
                </ul>
            </div>
            <div className="box">
                <div className="red-social">
                    <a href="" className="fa fa-facebook"></a>
                    <a href="" className="fa fa-instagram"></a>
                    <a href="" className="fa fa-twitter"></a>
                    <a href="" className="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div className="grupo-2">
            <small>&copy; 2023 <b>52 Robots</b> - Todos los Derechos Reservados.</small>
        </div>
    </div>
    </>
    ) 
}

export default Footer