import "../assets/styles/ManualMiembros.css";

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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="logotipo-texto"
                                viewBox="0 0 16 16"
                            >
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
                            </svg>
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
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                fill="black"
                                className="logotipo-video"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
                            </svg>                                                  
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