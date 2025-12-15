import styles from '../assets/styles/Visitas.module.css'

export function Visitas() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Visita el campus</h1>
                    <article className={styles.instrucioncitas}>
                        <header >
                            <h2>Instrucciones para agendar tu cita</h2>
                        </header>
                        <ol className={styles.lista} type='I'>
                            <li className={styles.item}>Hay que dar clic en el enlace.</li>
                            <li className={styles.item}>Llena el formulario con tus datos</li>
                            <li className={styles.item}>Elige la fecha y hora que más te convenga</li>
                            <li className={styles.item}>Envía el formulario y espera la confirmación</li>
                        </ol>
                        <footer>
                            <small>En caso de dudas contactar al correo sarestl@gmail.com</small>
                        </footer>
                    </article>
                    <a href="https://forms.gle/7QDq8WDrrysN1udM7" target='_blank' className={styles.enlace}>Clic aquí para agendar</a>
                    <p>Estamos trabajando para dar un mejor servicio, agredecemos tu paciencia.</p>
                </div>
            </div>

        </>
    )
}