import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import sepLogo from '../assets/img/sep.png';
import tecnmLogo from '../assets/img/tecnm.jpg';
import itlLogo from '../assets/img/itl.png';
import saresLogo from '../assets/img/sares.jpeg';

function Header() {
    const actual = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <header className="header-ext">
            <div className="logos">
                <img src={sepLogo} className="logo-sep" alt="SEP" />

                <img src={tecnmLogo} className="logo-tecnm" alt="TecNM" />
                <img src={itlLogo} className="logo-itl" alt="ITL" />

                {
                    actual.pathname === "/"
                        ? <img src={saresLogo} className="logo-sares-login" alt="SARES" />
                        : <img src={saresLogo} className="logo-sares" alt="SARES" />
                }

            </div>

            <button className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>


            <nav className={`nav-menu ${open ? "open" : ""}`}>
                <div className="header-ext">
                    <div className="logos-menu">
                        <img src={sepLogo} className="logo-sep" alt="SEP" />
                        <img src={tecnmLogo} className="logo-tecnm" alt="TecNM" />
                        <img src={itlLogo} className="logo-itl" alt="ITL" />

                        {
                            actual.pathname === "/"
                                ? <img src={saresLogo} className="logo-sares-login" alt="SARES" />
                                : <img src={saresLogo} className="logo-sares" alt="SARES" />
                        }
                    </div>
                </div>

                <NavLink to="/" onClick={() => setOpen(false)} className="nav-link">Inicio</NavLink>
                <NavLink to="/manual-de-usuario" onClick={() => setOpen(false)} className="nav-link">Manual Usuario</NavLink>
                <NavLink to="/visitas" onClick={() => setOpen(false)} className="nav-link">Acceso Visitantes</NavLink>
                <NavLink to="/mas" onClick={() => setOpen(false)} className="nav-link">Más</NavLink>
            </nav>
        </header>
    );
}

export default Header;