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

                        <div className="notificacion-item-i">
                            <i className="fas fa-info-circle icono-notificacion-i"></i>

                            <div className="notificacion-detalles">
                                <p className="texto-notificacion">Ha realizado un registro</p>
                                <p className="tipo-notificacion">Entrada</p>
                            </div>

                            <p className="fecha-notificacion">03/12/2025 - 10:45 AM</p>
                        </div>

                        <div className="notificacion-item-i">
                            <i className="fas fa-info-circle icono-notificacion-i"></i>

                            <div className="notificacion-detalles">
                                <p className="texto-notificacion">Ha realizado un registro</p>
                                <p className="tipo-notificacion salida">Salida</p>
                            </div>

                            <p className="fecha-notificacion">03/12/2025 - 10:47 AM</p>
                        </div>

                        {notificaciones.map((item) => (
                            <div className="notificacion-item-i" key={item.id}>
                                <i className="fas fa-info-circle icono-notificacion-i"></i>

                                <div className="notificacion-detalles">
                                    <p className="texto-notificacion">{item.texto}</p>
                                    <p className={`tipo-notificacion ${item.tipo === "Salida" ? "salida" : ""}`}>
                                        {item.tipo}
                                    </p>
                                </div>

                                <p className="fecha-notificacion">{item.fecha}</p>
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}