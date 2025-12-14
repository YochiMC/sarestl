export function HistorialRegUsers() {

    return (
        <>
            <div className="paginita">
                <div className="contenido-admin">
                    <h1>HISTORIAL DE REGISTROS E/S</h1>
                </div>

                <div className="crud-aux">
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
                                    <th>ID</th>
                                    <th>Clave</th>
                                    <th>Nombre</th>
                                    <th>Tipo Usuario</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Tipo de Registro</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>21240200</td>
                                    <td>Gabriela del Goretti Navarro Basurto</td>
                                    <td>Estudihambre</td>
                                    <td>2025-12-04</td>
                                    <td>08:32:05</td>
                                    <td>Entrada</td>
                                </tr>

                                <tr>
                                    <td>2</td>
                                    <td>21240200</td>
                                    <td>Gabriela del Goretti Navarro Basurto</td>
                                    <td>Estudihambre</td>
                                    <td>2025-12-04</td>
                                    <td>10:37:54</td>
                                    <td>Salida</td>
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
                        <button className="btn-paginacion">2</button>
                        <button className="btn-paginacion">3</button>
                        <button className="btn-paginacion">4</button>
                        <button className="btn-paginacion">5</button>

                        <button className="btn-paginacion">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}