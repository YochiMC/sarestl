import "../assets/styles/contraseña.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export function RestaurarContraseña() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <div className="ContenidoPrincipal">
                <div className="OlvidarContraseña-Container">
                    <div className="ContenedorImagen">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="logotipo-sares"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                        </svg>
                    </div>

                    <h2>Restaurar Contraseña</h2>
                    <form>
                        <label htmlFor="email">Nueva Contraseña</label>
                        <div class="password-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                required
                            />
                            <i
                                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                                onClick={() => setShowPassword(!showPassword)}

                            ></i>
                        </div>

                        <label htmlFor="email">Confirmar Nueva Contraseña</label>
                        <div class="password-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="••••••••"
                                required
                            />
                            <i
                                className={`fa-solid ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            ></i>
                        </div>

                        <button type="submit" className="btn-recuperar">
                            Guardar Cambios
                        </button>
                    </form>
                    <div className="form-return">
                        <Link to="/" className="link">
                            Cancelar
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}