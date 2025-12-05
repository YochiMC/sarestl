/* Esta la utlice para lo del manual de usuario */

export function Acordeon({ titulo, children, abierto, alCambiar }) {
    return (
        <div className="acordeon-item">
            <button className="acordeon-header" onClick={alCambiar}>
                <span>{titulo}</span>
                <i className={`fa-solid fa-chevron-down flecha ${abierto ? "rotar" : ""}`}></i>
            </button>

            {abierto && (
                <div className="acordeon-contenido">
                    {children}
                </div>
            )}
        </div>
    );
}
