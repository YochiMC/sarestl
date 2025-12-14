export function ModalA({ onClose, modo = "crear" }) {
    return (
        <div className="modal-crud">
            <div className="modal-content-crud">
                <h2>{modo === "editar" ? "Editar Usuario" : "Crear Usuario"}</h2>

                <button className="btn-cerrar-modal-crud" onClick={onClose}>
                    ×
                </button>

                <form className="modal-form-crud">
                    <div className="form-grid-crud">
                        <div className="form-group-crud">
                            <label>Clave:</label>
                            <input type="text" placeholder="Clave" />
                        </div>

                        <div className="form-group-crud">
                            <label>Nombre:</label>
                            <input type="text" placeholder="Nombre" />
                        </div>

                        <div className="form-group-crud">
                            <label>Correo:</label>
                            <input type="email" placeholder="Correo electrónico" />
                        </div>

                        <div className="form-group-crud">
                            <label>Género:</label>
                            <div className="checkbox-row-crud">
                                <div className="activo">
                                    <input type="radio" name="genero" id="genero-m" value="M" />
                                    <label htmlFor="genero-m">Masculino</label>
                                </div>

                                <div className="inactivo">
                                    <input type="radio" name="genero" id="genero-f" value="F" />
                                    <label htmlFor="genero-f">Femenino</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group-crud">
                            <label>Tipo:</label>
                            <select>
                                <option value="">Seleccione...</option>
                                <option value="administrador">Administrador</option>
                                <option value="estudiante">Estudiante</option>
                                <option value="docente">Docente</option>
                                <option value="administrativo">Administrativo</option>
                                <option value="intendente">Intendente</option>
                                <option value="guardia">Guardia de Seguridad</option>
                            </select>
                        </div>

                        <div className="form-group-crud">
                            <label>Edad:</label>
                            <input type="number" placeholder="Edad" />
                        </div>

                        <div className="form-group-crud">
                            <label>Área:</label>
                            <input type="text" placeholder="Área" />
                        </div>

                        <div className="form-group-crud">
                            <label>Estado:</label>
                            <div className="checkbox-row-crud">
                                <div className="activo">
                                    <input type="radio" name="estado" id="estado-activo" />
                                    <label htmlFor="estado-activo">Activo</label>
                                </div>

                                <div className="inactivo">
                                    <input type="radio" name="estado" id="estado-inactivo" />
                                    <label htmlFor="estado-inactivo">No Activo</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-buttons-crud">
                        <button type="button" className="btn-cancelar" onClick={onClose}>
                            Cancelar
                        </button>

                        <button type="submit" className="btn-guardar">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}