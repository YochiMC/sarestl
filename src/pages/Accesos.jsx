import { Scanner } from "../components/Scanner"
import { useState } from "react"
import styles from '../assets/styles/Accesos.module.css'

export function Accesos() {

    const [matricula, setMatricula] = useState("")

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <section className={styles.capturando}>
                        <h1 className={styles.h1}>Acceso a la institución</h1>
                        <label htmlFor="numeroControl" className={styles.etiqueta}>
                            Ingresa tu número de control:
                            <input id="numeroControl" name="numeroControl" type="text" placeholder="Ingresa tu número de control" value={matricula} onChange={e=>setMatricula(e.target.value)}/>
                        </label>
                        <Scanner onDetected={setMatricula} />
                    </section>
                    <section className={styles.welcome}>
                        <p>Bienvenido {matricula}</p>
                    </section>
                </div>
            </div >
        </>
    )
}