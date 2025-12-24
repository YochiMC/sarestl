import styles from '../../assets/styles/News.module.css'
export function News() {
    return (
        <>
            <section className={styles.newsDiv}>
                <div className={styles.prin}>
                    <h2>Eres un: Estudihambre en TECNM Campus León</h2>
                    <h3>Noticias</h3>
                    <p>Mantente informado con las noticias del día...</p>
                </div>
                <div className={styles.prin}>
                    <article className={styles.article}>
                        
                        <header className={styles.header}>
                            <h3>Lanzamiento oficial de SaresTL</h3>
                            <time dateTime='2025-12-13'>13 de diciembre de 2025</time>
                        </header>
                        <p>Bienvenido a SaresTL y muchas gracias por el gran apoyo</p>
                        <footer>
                            <a href='https://github.com/YochiMC/sarestl/tree/main' className={styles.enlace} target='_blank' rel='noreferrer'>Ver más</a>
                        </footer>
                    </article>
                </div>
                <div className={styles.sec}>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <h3>¿Ya probaste la aplicación movil de SarersTL?</h3>
                            <time dateTime='2026-01-10'>10 de enero de 2020</time>
                        </header>
                        <p>Ingresa al siguiente link para descargar la aplicación móvil de SaresTL</p>
                        <footer>
                            <a href='https://github.com/YochiMC/sarestl/tree/main' className={styles.enlace} target='_blank' rel='noreferrer'>Ver más</a>
                        </footer>
                    </article>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <h3>¿Sabias que ya puedes descargar el historial de tus registros?</h3>
                            <time dateTime='2026-01-10'>10 de enero de 2026</time>
                        </header>
                        <p>Con SaresTL ya puedes disponer de un historial de tus entradas y salidas</p>
                        <footer>
                            <a href='https://github.com/YochiMC/sarestl/tree/main' className={styles.enlace} target='_blank' rel='noreferrer'>Ver más</a>
                        </footer>
                    </article>
                </div>
            </section >
        </>
    )
}