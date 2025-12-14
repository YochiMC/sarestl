import { useEffect } from "react";

export function Notificaciones() {
    useEffect(() => {
        document.title = "Notificaciones";
    }, []);

    /* solo para ver como se veriria el diseño :) con todad las notificaciones */
    const notificaciones = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        texto: "Ha realizado un registro",
        tipo: i % 2 === 0 ? "Entrada" : "Salida",
        fecha: "03/12/2025 - 10:45 AM"
    }));
    return (
        <>
            <div className="contenedor-notificaciones">
                <div className="contenedor-espacio-notificaciones">
                    <div className="lista-notificaciones">

                        <p className="titulo-notif-todas">Notificaciones</p>

                        <table className="tabla-notificaciones">
                            <thead>
                                <tr>
                                    <th>Nota</th>
                                    <th>Tipo</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <i className="fas fa-info-circle icono-notificacion-i"></i>
                                        Ha realizado un registro
                                    </td>
                                    <td className="tipo entrada">Entrada</td>
                                    <td>03/12/2025</td>
                                    <td>10:45 AM</td>
                                </tr>

                                <tr>
                                    <td>
                                        <i className="fas fa-info-circle icono-notificacion-i"></i>
                                        Ha realizado un registro
                                    </td>
                                    <td className="tipo salida">Salida</td>
                                    <td>03/12/2025</td>
                                    <td>10:47 AM</td>
                                </tr>

                                {notificaciones.map((item) => {
                                    const [fecha, hora] = item.fecha.split(" - ");

                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <i className="fas fa-info-circle icono-notificacion-i"></i>
                                                {item.texto}
                                            </td>

                                            <td className={`tipo ${item.tipo === "Salida" ? "salida" : "entrada"}`}>
                                                {item.tipo}
                                            </td>

                                            <td>{fecha}</td>
                                            <td>{hora}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>





                    </div>

                </div>
            </div>
        </>
    )
}