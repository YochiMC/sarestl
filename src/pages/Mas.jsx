import saresLogo from '../assets/img/sares.jpeg'
import appLogo from '../assets/img/app.png'
import credencialLogo from '../assets/img/credencial.png'
import accesoLogo from '../assets/img/acceso.png'

export function Mas() {
    return (
        <>
            <div class="mas">
                <div class="izquierda">
                    <div class="cuadro">
                        <img src={appLogo} class="img-mov" alt="" />
                            <p>¿Ya conoces nuestra app móvil?</p>
                    </div>

                    <div class="cuadro">
                        <img src={credencialLogo} alt="" />
                            <p>Genera tu credencial digital desde la app.</p>
                    </div>

                    <div class="cuadro">
                        <img src={accesoLogo} alt="" />
                            <p>Accesos rápidos y verificados.</p>
                    </div>

                    <div class="cuadro">
                        <img src={saresLogo} alt="" />
                            <p>Todo sincronizado con SARES TL.</p>
                    </div>
                </div>

                <div class="derecha">
                    <div class="derecha-contenido">

                        <h2 class="titulo-derecha">Información de Contacto</h2>

                        <div class="contact-item">
                            <i class="fa-solid fa-envelope icon"></i>
                            <div>
                                <h4>Correo de soporte</h4>
                                <p><a href="mailto:sarestlsystem@hotmail.com" class="texto-link">sarestlsystem@hotmail.com</a></p>
                            </div>
                        </div>

                        <div class="contact-item">
                            <i class="fa-solid fa-phone icon"></i>
                            <div>
                                <h4>Teléfono</h4>
                                <p><a href="tel:+521234567890" class="texto-link">+52 123 456 7890</a></p>
                            </div>
                        </div>

                        <h3 class="subtitulo-derecha">Síguenos en redes</h3>

                        <div class="redes">
                            <a href="https://facebook.com" target="_blank" class="red">
                                <i class="fa-brands fa-facebook"></i> Facebook
                            </a>
                            <a href="https://instagram.com" target="_blank" class="red">
                                <i class="fa-brands fa-instagram"></i> Instagram
                            </a>
                            <a href="https://tiktok.com" target="_blank" class="red">
                                <i class="fa-brands fa-tiktok"></i> TikTok
                            </a>
                            <a href="https://twitter.com" target="_blank" class="red">
                                <i class="fa-brands fa-x-twitter"></i> X (Twitter)
                            </a>
                        </div>

                    </div>
                </div>



            </div>
        </>
    )
}