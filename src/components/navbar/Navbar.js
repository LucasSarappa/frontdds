import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <button className="inicio-btn boton-navbar-estilo-comun"><span></span><p>Inicio</p></button>
            <button className="nosotros-btn boton-navbar-estilo-comun"><span></span><p>Nosotros</p></button>
            <button className="faqs-btn boton-navbar-estilo-comun"><span></span><p>FAQs</p></button>
            <button className="noticias-btn boton-navbar-estilo-comun"><span></span><p>Noticias</p></button>
            <button className="mapa-btn boton-navbar-estilo-comun"><span></span><p>Mapa</p></button>
            <button className="login-btn boton-login-estilo"><span></span><p>Log In</p></button>

        </nav>
    );
};

export default Navbar;