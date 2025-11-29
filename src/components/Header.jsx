import sepLogo from '../assets/sep.png'
import tecnmLogo from '../assets/tecnm.jpg'
import itlLogo from '../assets/itl.png'
import { NavLink } from "react-router-dom";
import '../styles/index.css'

function HeaderExt() {
    return (
        <div className="header-ext">
            <div className="logos">
                <img src={sepLogo} className="logo-sep" alt="" />
                <img src={tecnmLogo} className="logo-tecnm" alt="" />
                <img src={itlLogo} className="logo-itl" alt="" />
            </div>

            <nav className="nav-menu">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
                <NavLink to="/manual" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Manual Usuario</NavLink>
                <NavLink to="/acceso-visitantes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Acceso Visitantes</NavLink>
            </nav>
        </div>
    );
}

export default HeaderExt;