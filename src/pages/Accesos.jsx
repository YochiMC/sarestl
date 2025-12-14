import { Scanner } from "../components/Scanner"
export function Accesos() {
    return (
        <>
            <h1>Accesos</h1>
            <div>
                <h2>Accesos manual</h2>
                <label>
                    Ingresa tu número de control
                </label>
                <input name="numeroControl" type="text" placeholder="Ingresa tu número de control">
                </input>
                <h2>Acceso con credencial</h2>
                <p>Pon tu credencial cerca de la cámara</p>
                <Scanner/>
            </div>
        </>
    )
}