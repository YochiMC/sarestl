import "../assets/styles/Perfil.css";
import person_circleLogo from '../assets/img/person-circle.svg'

export function Perfil() {
    return (
        <>
            <div className="main-content_perfil">
                <div className="container_perfil">
                    <div class="header-perfil">
                        <h1 class="page-title">Modificar datos</h1>
                        <p class="page-subtitle">Actualiza tu información personal y credenciales</p>
                    </div>

                    <div className="profile-card">
                        <div className="profile-header">
                            <div className="profile-photo-container">
                                <img src={person_circleLogo} alt="Foto de perfil" class="profile-photo"
                                    id="profile-photo"></img>
                                <label for="photo-upload" class="photo-overlay" title="Cambiar foto">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path
                                            d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z">
                                        </path>
                                        <circle cx="12" cy="13" r="4"></circle>
                                    </svg>
                                </label>
                                <input type="file" id="photo-upload" accept="image/*" style={{ display: 'none' }} />
                            </div>
                            <h2 class="profile-name">Hugo Emmanuel Cerrillo</h2>
                            <p class="profile-role">Administrador - TECNM Campus León</p>
                        </div>

                        <div className="form-container-perfil">
                            <form>
                                <div class="form-section">
                                    {/*Contraseña*/}
                                    <h3 class="section-title">Cambiar contraseña</h3>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="current-password">Contraseña actual</label>
                                            <div class="input-with-icon">
                                                <input type="password" id="current-password" placeholder="••••••••" />
                                                <span class="toggle-password" onclick="togglePasswordVisibility('current-password')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                        </path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="new-password">Nueva contraseña</label>
                                            <div class="input-with-icon">
                                                <input type="password" id="new-password" placeholder="••••••••" />
                                                <span class="toggle-password" onclick="togglePasswordVisibility('new-password')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                        </path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="confirm-password">Confirmar nueva contraseña</label>
                                            <div class="input-with-icon">
                                                <input type="password" id="confirm-password" placeholder="••••••••" />
                                                <span class="toggle-password" onclick="togglePasswordVisibility('confirm-password')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                        </path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*seccion info contacto*/}
                                <div class="form-section">
                                    <h3 class="section-title">Información de contacto</h3>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="current-phone">Teléfono actual</label>
                                            <input type="tel" id="current-phone" placeholder="+52 1 234 567 8901" readOnly />
                                        </div>
                                        <div class="form-group">
                                            <label for="new-phone">Nuevo teléfono</label>
                                            <input type="tel" id="new-phone" placeholder="+52 1 234 567 8901" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="current-email">Correo actual</label>
                                            <input type="email" id="current-email" placeholder="exameple@example.com" readOnly />
                                        </div>
                                        <div class="form-group">
                                            <label for="new-email">Nuevo correo</label>
                                            <input type="email" id="new-email" placeholder="example@exameple.com" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-footer">
                                    <button type="button" class="cancel-button">Volver</button>
                                    <button type="submit" class="save-button">Guardar cambios</button>

                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}