import saresLogo from '../assets/img/sares.jpeg'

export function Login() {
    return (
        <>
            <div className="contenido">
                <div className="imagen">
                    <img src={saresLogo} className="logo-sares" alt="" />
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
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                required
                            />

                            <button type="submit" className="btn-login">
                                Iniciar Sesión
                            </button>
                        </form>

                        <div className="form-options">
                            <a href="#" className="link">¿Olvidaste tu contraseña?</a>
                        </div>

                        <div className="extra-options">
                            <p>¿No tienes cuenta?</p>
                            <a href="#" className="link">Crear cuenta</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}