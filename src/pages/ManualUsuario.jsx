import Manual from '../assets/video/video-muestra.mp4';
import { useState } from "react";
import { Acordeon } from '../components/Acordeon';

export function ManualUsuario() {
    const [contenido, abrirContenido] = useState(null);

    const mostrar = (actual) => {
        abrirContenido(contenido === actual ? null : actual);
    };

    return (
        <>
            <div className="manual-usuario">
                <div className="global">
                    <h1>Manual de Usuario</h1>
                    <p>Guía completa para aprender a utilizar nuestro sistema de forma rápida y eficiente.</p>
                </div>

                <div className="contenido-manual">
                    <div className="informacion">
                        <div className="contenido-info">
                            <section className="manual-header">
                                <h2>
                                    <i class="fas fa-file-lines icono-texto"></i>
                                    Texto Manual
                                </h2>
                            </section>

                            <div className="cont-pasos">
                                <Acordeon
                                    titulo="Crear Cuenta de Usuario"
                                    abierto={contenido === 0}
                                    alCambiar={() => mostrar(0)}
                                >
                                    • Selecciona <strong>Crear cuenta</strong> en el inicio.<br />
                                    • Ingresa tus datos personales en el formulario.<br />
                                    • Luego podrás iniciar sesión sin problemas.<br />

                                </Acordeon>

                                <Acordeon
                                    titulo="Iniciar Sesión"
                                    abierto={contenido === 1}
                                    alCambiar={() => mostrar(1)}
                                >
                                    • Escribe tu clave institucional.<br />
                                    • Ingresa tu contraseña.<br />
                                    • Presiona <strong>Iniciar Sesión</strong>.<br />
                                </Acordeon>

                                <Acordeon
                                    titulo="Recuperar Contraseña"
                                    abierto={contenido === 2}
                                    alCambiar={() => mostrar(2)}
                                >
                                    • Haz clic en <strong>¿Olvidaste tu contraseña?</strong> en la pantalla de inicio.<br />
                                    • Ingresa tu correo registrado.<br />
                                    • Revisa tu bandeja de entrada para restablecer tu contraseña.<br />
                                    • Crea una nueva y vuelve a iniciar sesión.
                                </Acordeon>

                                <Acordeon
                                    titulo="Acceso para Usuarios Externos"
                                    abierto={contenido === 3}
                                    alCambiar={() => mostrar(3)}
                                >
                                    Si no formas parte de la institución:<br />
                                    • Dirígete a <strong>Acceso Visitantes</strong>.<br />
                                    • Llena el formulario y envíalo.<br />
                                    • Recibirás respuesta en tu correo en un tiempo estimado.
                                </Acordeon>

                                <Acordeon
                                    titulo="Más"
                                    abierto={contenido === 4}
                                    alCambiar={() => mostrar(4)}
                                >
                                    Si quieres conocer más sobre nuestro sistema accede a "Más" que esta situado en la parte superior de este sitio, ahí encontrarás información de contacto para soporte, así como información de nuestro servicio de App Móvil.
                                </Acordeon>

                            </div>
                        </div>
                    </div>

                    <div className="manual">
                        <div className="info">
                            <h2>
                                <i class="fa-solid fa-video icono-video"></i>
                                Vídeo Manual
                            </h2>

                            <p>El contenido de este vídeo te ayudará a conocer cómo se usa nuestro sistema.</p>
                        </div>

                        <div className="video-box">
                            <video controls>
                                <source src={Manual} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}