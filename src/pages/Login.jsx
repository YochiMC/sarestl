import saresLogo from '../assets/img/sares.jpeg'
import { Link } from "react-router-dom";
import { useState } from "react";

export function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="contenido">
                <div className="imagen">
                    <img src={saresLogo} className="logo-sares-tl" alt="" />
                    <p className="frase">¡Bienvenido a nuestro sistema!</p>
                </div>

                <div className="login">
                    <div className="login-container">
                        <h2>Iniciar Sesión</h2>

                        <form>
                            <label htmlFor="email">Usuario</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="usuario@ejemplo.com"
                                required
                            />

                            <label htmlFor="password">Contraseña</label>
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

                            <button type="submit" className="btn-login">
                                Iniciar Sesión
                            </button>
                        </form>

                        <div className="form-options">
                            <Link to="/olvidar-contraseña" className="link">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <div className="extra-options">
                            <p>¿No tienes cuenta?</p>
                            <Link to="/registro" className="link">
                                Crear cuenta
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}