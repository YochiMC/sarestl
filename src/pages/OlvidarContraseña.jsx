import "../assets/styles/contraseña.css";
import { Link } from "react-router-dom";
export function OlvidarContraseña(){
    return(
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
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path
                            fillRule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                    </svg>
                   
                 </div>
                 
                <h2>Recuperar Contraseña</h2>
                <form>
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        name="email"                        
                        placeholder="example@example.com"
                        required
                    />
                    <button type="submit" className="btn-recuperar">
                        Enviar Instrucciones
                    </button>
                </form>
                <div className="form-return">
                    <Link to="/" className="link">
                        Regresar
                    </Link>
                </div>
            </div>
        </div>            
        </>
    )
}