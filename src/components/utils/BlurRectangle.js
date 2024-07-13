import React from 'react';
import './BlurRectangle.css'; // Importa los estilos
import imagenPaginaPrincipal from '../imagenes/imagen-pagina-principal-sin-fondo.jpg'; // Importa la imagen
import logoSinFondo from '../imagenes/logo3-sin-fondo.png'; // Ajusta la ruta según la ubicación de tu imagen

const BlurRectangle = () => {
    return (
        <div className="container">
            <div className="blue-section">
                {/* <div className="blur-rectangle top-left"></div> */}
                <div className="circle top-left"></div>
                <div className="circle bottom-right"></div>
                <img src={imagenPaginaPrincipal} alt="Descripción de la imagen" className="imagen-principal"/>
                <img src={logoSinFondo} alt="Logo" className="imagen-logo-esquina"/>

            </div>
            <div className="white-section">
                <div className="blur-rectangle bottom-right"></div>
                <button className="colaborar-btn boton-estilo-comun"><span></span><p>COLABORAR</p></button>
                <button className="solicitar-btn boton-estilo-comun"><span></span><p>SOLICITAR</p></button>
            </div>
        </div>
    );
};

export default BlurRectangle;