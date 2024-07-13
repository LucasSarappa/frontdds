import React from 'react';
import BlurRectangle from '../../components/utils/BlurRectangle';
import imagenEjemplo from '../../components/imagenes/imagen-pagina-principal-con-fondo.jpg.jpg';
import Navbar from "../../components/navbar/Navbar";

const PaginaPrincipal = () => {
    return (
        <div>
            <img src={imagenEjemplo} alt="Descripción de la imagen" className="imagen-principal"/>
            <Navbar/>
            <BlurRectangle/>
        </div>
    );
};

export default PaginaPrincipal;