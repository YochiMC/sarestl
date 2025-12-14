import "../assets/styles/VisualizacionGeneral.css";
import { Link } from "react-router-dom";

const editButton =document.getElementById("editButton");
const buttons = document.querySelectorAll(".close-btn-VG, .cancel-btn-VG");

function openEditModal() {
    const editModal = document.getElementById("editModal_VG");
    editModal.style.display = "block";
}
function openDeleteModal() {
    const deleteModal = document.getElementById("deleteModal_VG");
    deleteModal.style.display = "block";
}
function closeModals() {
    document.querySelectorAll(".modal-VG").forEach(modal => {
        modal.style.display = "none"; // Si usas clases de CSS, puedes cambiar esto a modal.classList.add('hidden');
    });
}


export function VisualizacionGeneral() {
    return (
        <>
            <div className="main-content_VG">
                <div className="container_VG">
                    <div class="text-header-VG">
                        <h1 id="bienvenida">Visualización General </h1>
                    </div>

                    <div className="table-container-VG">
                        <div class="table-header-VG">
                            <button class="export-button-VG">
                                <svg id="icon_vg" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-floppy-fill" viewBox="0 0 16 16">
                                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z" />
                                    <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z" />
                                </svg>
                                Exportar
                            </button>
                            <input type="text" class="search-input-VG" placeholder="Buscar..." />
                        </div>

                        <table id="dataTable_VG">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Clave</th>
                                    <th>Nombre</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Tipo Registro</th>
                                    <th>Usuario</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Aquí se llenaran los datos con el backj xd */}
                                <tr>
                                    <td>1</td>
                                    <td>2124023</td>
                                    <td>Hugo Cerrillo</td>
                                    <td>2025-12-01</td>
                                    <td>08:30 AM</td>
                                    <td>Entrada</td>
                                    <td>EstudiHambre</td>
                                    <td>
                                        <button class="btn-edit" id="editButton" onClick={openEditModal}><i class="fas fa-edit"></i> Editar</button>
                                        <button class="btn-delete" onClick={openDeleteModal}><i class="fas fa-trash-alt"></i> Eliminar</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="pagination-VG">
                            <button class="page-btn">Anterior</button>
                            <button class="page-btn-active">1</button>
                            <button class="page-btn">2</button>
                            <button class="page-btn">3</button>
                            <button class="page-btn">Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal para editar registros*/}
            <div id="editModal_VG" class="modal-VG">
                <div class="modal-content-VG">
                    <div class="modal-header-VG">
                        <h3 class="modal-title-VG">Editar Registro</h3>                        
                        <button class="close-btn-VG" onClick={closeModals}>&times;</button>                        
                    </div>                    
                    <div class="modal-body-VG">
                        <form id="editForm_VG">
                            <input type="hidden" id="editId"></input>
                            <div class="form-group-VG">
                                 <label for="editNombre">Nombre:</label>
                                 <input type="text" id="editNombre" class="form-control-VG" required ></input>                                
                            </div>
                            <div class="form-group-VG">
                                <label for="editTipoR">Tipo Registro:</label>
                                <input type="text" id="editTipoR" class="form-control-VG" required ></input>                                
                            </div>
                            <div class="form-group-VG">
                                <label for="editFechaR">Fecha Registro:</label>
                                <input type="text" id="editFechaR" class="form-control-VG" required ></input>
                            </div>
                            <div class="form-group-VG">
                                <label for="editHoraR">Hora Registro:</label>
                                <input type="text" id="editHoraR" class="form-control-VG" required ></input>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer-VG">
                        <button class="save-btn-VG" id="saveEdit">Guardar Cambios</button>
                        <button class="cancel-btn-VG" onClick={closeModals}>Cancelar</button>
                    </div>
                </div>
            </div>
            {/*Modal para eliminar registros*/}
            <div id="deleteModal_VG" class="modal-VG">
                <div class="modal-content-VG">
                    <div class="modal-header-VG">
                        <h3 class="modal-title-VG">Confirmar Eliminación</h3>
                        <button class="close-btn-VG" onClick={closeModals}>&times;</button>
                    </div>
                    <div class="modal-body-VG">
                        <p class="p_vg">¿Está seguro que desea eliminar este registro? Esta acción no se puede deshacer.</p>
                        <input type="hidden" id="deleteId"></input>
                    </div>
                    <div class="modal-footer-VG">
                        <button class="delete-btn-VG" id="confirmDelete">Eliminar</button>
                        <button class="cancel-btn-VG" onClick={closeModals}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}