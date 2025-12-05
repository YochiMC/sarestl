import "../assets/styles/ManualMiembros.css";
import textLogo from '../assets/img/file-text-fill.svg'
import videoLogo from '../assets/img/camera-reels-fill.svg'

export function ManualUsuarioMiembros(){
    return(
        <>
        <div className="ContenidoPrincipal">                    
            <div className="manual-miembros-container">
                <h2 className="titulo-manual">Manual de Usuario</h2> 
                <p className="text_manual">Guia completa para aprender a utilizar para usar el sistema SaresTL</p>
                <div className="manual-miembros-content">

                    <div class="manual-miembros-text">                        
                        <div className="manual-miembros-image">
                            <img src={textLogo} className="logotipo-texto" alt="" />
                            <h2 id="text_manual">Texto Manual</h2>                            
                        </div>
                        <details>
                            <summary>Descargar reporte de entradas y salidas</summary>
                            <p>1. Selecciona  en el menu "Visualización de Registros"</p>
                            <p>En esta sección podras visualizar tus registros de entrada y salida del semestre en curso</p>                                
                            <p>2. Selecciona la boton "Exportar"</p>
                            <p>3. Se te descargara un PDF con el reporte de tus registros del semestre en curso.</p>
                        </details>
                        <details>
                            <summary>Modificar datos de perfil</summary>
                            <p>1. Selecciona en el menu "Pefil"</p>
                            <p>En esta sección podras visualizar tus datos de contacto asi como cambiar tu contraseña en caso de ser necesario</p>
                            <p>2. Modifica los datos que necesites actualizar.</p>
                            <p>Selecciona el boton "Guardar cambios"</p>
                        </details>
        
                    <details>
                        <summary>Manual de usuario</summary>
                        <p>Una vez que inicies sesión, podrás acceder al manual de usuario en el menu</p>
                        <p>Puedes visualizarlo en texto o en un video</p>
                    </details>
                    </div>
                    <div className="manual-miembros-video">
                        <div className="manual-miembros-image_video">
                            <img src={videoLogo} className="logotipo-video" alt="" />
                            <h2 id="text_manual">Video Manual</h2>                            
                        </div>
                        <iframe
                            class="video-youtube"
                            src="https://www.youtube.com/embed/C1OJnKBC3cM"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                                          
                </div>
            </div>   
        </div>            
        </>
    )
}