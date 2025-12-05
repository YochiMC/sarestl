import "../assets/styles/contraseña.css";
import person_circleLogo from '../assets/img/person-circle.svg'
import { Link } from "react-router-dom";
export function RestaurarContraseña(){
    return(
        <>
        <div className="ContenidoPrincipal">            
            <div className="OlvidarContraseña-Container">
                <div className="ContenedorImagen">
                    <img src={person_circleLogo} className="logotipo-sares" alt="" />                    
                 </div>
                 
                <h2>Restaurar Contraseña</h2>
                <form>
                    <label htmlFor="email">Nueva Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        name="password"                        
                        placeholder="••••••••"
                        required
                    />

                    <label htmlFor="email">Confirmar Nueva Contraseña</label>
                    <input
                        type="confirm-password"
                        id="confirm-password"
                        name="confirm-password"                        
                        placeholder="••••••••"
                        required
                    />
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