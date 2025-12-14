import styles from '../assets/styles/Visitas.module.css'

export function Visitas() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Holap gentecita, son bievenidos al campus</h1>
                    <p>Por favorcito, registrate en el forms o manda correo o manda mensaje a tal lado.</p>
                    <a href="#">Enlace</a>
                </div>
            </div>
        </>
    )
}