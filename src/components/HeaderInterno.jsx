import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import sepLogo from '../assets/img/sep.png';
import tecnmLogo from '../assets/img/tecnm.jpg';
import itlLogo from '../assets/img/itl.png';
import saresLogo from '../assets/img/sares.jpeg'
import userFoto from '../assets/img/usuario.jpg';

function Header() {
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [menuNotifAbierto, setMenuNotifAbierto] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
        setMenuNotifAbierto(false);
    };

    const toggleMenuNotif = () => {
        if (location.pathname === "/notificaciones") return;
        setMenuNotifAbierto(!menuNotifAbierto);
        setMenuAbierto(false);
    };


    return (
        <div className="header-ext" >
            <div className="logos">
                <img src={sepLogo} className="logo-sep" alt="" />
                <img src={tecnmLogo} className="logo-tecnm" alt="" />
                <img src={itlLogo} className="logo-itl" alt="" />
                <img src={saresLogo} className="logo-sares" alt="" />
            </div>

            <div className="otros">
                <i className="fas fa-bell icono-notificacion" onClick={toggleMenuNotif}></i>

                <span className="nombre-usuario">Goretti Navarro</span>

                <div className="foto-usuario" onClick={toggleMenu}>
                    <img src={userFoto} alt="Foto de usuario" />
                </div>

                {/* ----------------------------------- Aqui van los menús ---------------------------------- */}
                {menuAbierto && (
                    <div className="menu-usuario">
                        <button className="menu-item">
                            <i className="fas fa-user-circle icono-menu"></i>
                            Perfil
                        </button>

                        <button className="menu-item">
                            <i className="fas fa-sign-out-alt icono-menu"></i>
                            Cerrar sesión
                        </button>
                    </div>
                )}

                {menuNotifAbierto && (
                    <div className="menu-notificaciones">
                        <p className="titulo-notif">Notificaciones</p>

                        <div className="notif-item">
                            <i className="fas fa-info-circle"></i>
                            <span>Mensajito very gu</span>
                            <span className="notif-fecha">03/12/2025 - 10:45 AM</span>
                        </div>

                        <div className="notif-item">
                            <i className="fas fa-info-circle"></i>
                            <span>Mensajito very gu</span>
                            <span className="notif-fecha">04/12/2025 - 08:45 AM</span>
                        </div>

                        <div className="ver-todo-notif">
                            <p className="ver-todo-texto" onClick={() => {
                                setMenuNotifAbierto(false);
                                navigate("/notificaciones");
                            }}>Ver todas</p>
                        </div>
                    </div>
                )}

            </div>

        </div>
    );
}

export default Header;