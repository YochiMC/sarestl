import { useState } from "react";
import { ModalA } from '../components/ModalA';

export function Crud() {
    const [modalAbierto, setModalAbierto] = useState(false);
    const [modalEditar, setModalEditar] = useState(false);

    return (
        <>
            <div className="paginita">
                <div className="contenido-admin">
                    <h1>ADMIN DASHBOARD</h1>
                </div>

                <div className="crud-aux">
                    <button className="btn btn-primary" onClick={() => setModalAbierto(true)}>
                        <i className="fas fa-plus"></i>
                        Nuevo
                    </button>

                    <button className="btn btn-secondary">
                        <i class="fa-solid fa-download"></i>
                        PDF
                    </button>

                    <div className="search-box">
                        <i className="fas fa-search search-icon"></i>
                        <input type="text" placeholder="Buscar..." class="search-input" />
                    </div>

                    <div className="resultados">
                        <p>
                            Mostrar
                            <select className="filter-select">
                                <option value="5" selected>5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                            por página
                        </p>
                    </div>
                </div>

                <div className="table">
                    <div className="contenedor-tabla">
                        <table className="datos">
                            <thead>
                                <tr>
                                    <th>Clave</th>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Género</th>
                                    <th>Tipo Usuario</th>
                                    <th>Edad</th>
                                    <th>Área</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>21240200</td>
                                    <td>Gabriela del Goretti Navarro Basurto</td>
                                    <td>21240200@leon.tecnm.mx</td>
                                    <td>Femenino</td>
                                    <td>Estudihambre</td>
                                    <td>22</td>
                                    <td>ISC</td>
                                    <td><span className="estado estado-activo">Activo</span></td>
                                    <td className="acciones">
                                        <button className="btn-icono btn-edit" title="Editar" onClick={() => setModalEditar(true)}>
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        {/*<button className="btn-icono btn-delete" title="Eliminar">
                                            <i className="fas fa-trash"></i>
                                        </button>*/}
                                    </td>
                                </tr>

                                <tr>
                                    <td>21240200</td>
                                    <td>Gabriela del Goretti Navarro Basurto</td>
                                    <td>21240200@leon.tecnm.mx</td>
                                    <td>Femenino</td>
                                    <td>Estudihambre</td>
                                    <td>22</td>
                                    <td>ISC</td>
                                    <td><span className="estado estado-inactivo">Inactivo</span></td>
                                    <td className="acciones">
                                        <button className="btn-icono btn-edit" title="Editar" onClick={() => setModalEditar(true)}>
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        {/*<button className="btn-icono btn-delete" title="Eliminar">
                                            <i className="fas fa-trash"></i>
                                        </button>*/}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className="paginacion">
                    <p className="paginacion-info">
                        Mostrando <span className="font-medium">1-5</span> de <span className="font-medium">50</span> resultados
                    </p>

                    <div className="paginacion-buttons">

                        <button className="btn-paginacion" disabled>
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <button className="btn-paginacion active">1</button>
                        <button className="btn-paginacion">2</button>
                        <button className="btn-paginacion">3</button>
                        <button className="btn-paginacion">4</button>
                        <button className="btn-paginacion">5</button>

                        <button className="btn-paginacion">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                </div>

                {/* ---------------------- Aquí se muestra el modal ---------------------- */}
                {modalAbierto && (
                    <ModalA
                        onClose={() => setModalAbierto(false)}
                        modo="crear"
                    />
                )}

                {modalEditar && (
                    <ModalA
                        onClose={() => setModalEditar(false)}
                        modo="editar"
                    />
                )}
            </div>
        </>
    )
}