import sepLogo from '../assets/img/sep.png';
import tecnmLogo from '../assets/img/tecnm.jpg';
import itlLogo from '../assets/img/itl.png';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header-ext">
            <div className="logos">
                <img src={sepLogo} className="logo-sep" alt="" />
                <img src={tecnmLogo} className="logo-tecnm" alt="" />
                <img src={itlLogo} className="logo-itl" alt="" />
            </div>

            <nav className="nav-menu">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Inicio</NavLink>
            </nav>
        </div>
    );
}

export default Header;