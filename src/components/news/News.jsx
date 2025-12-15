import styles from '../../assets/styles/News.module.css'
export function News() {
    return (
        <>
            <section className={styles.newsDiv}>
                <div className={styles.prin}>
                    <h2>Noticias</h2>
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
                            <a href='https://github.com/YochiMC/sarestl/tree/main' target='_blank' rel='noreferrer'>Ver más...</a>
                        </footer>
                    </article>
                </div>
                <div className={styles.sec}>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <h3>Lanzamiento oficial de SaresTL</h3>
                            <time dateTime='2025-12-13'>13 de diciembre de 2025</time>
                        </header>
                        <p>Bienvenido a SaresTL y muchas gracias por el gran apoyo</p>
                        <footer>
                            <a href='https://github.com/YochiMC/sarestl/tree/main' target='_blank' rel='noreferrer'>Ver más...</a>
                        </footer>
                    </article>
                    <article className={styles.article}>
                        <header className={styles.header}>
                            <h3>Lanzamiento oficial de SaresTL</h3>
                            <time dateTime='2025-12-13'>13 de diciembre de 2025</time>
                        </header>
                        <p>Bienvenido a SaresTL y muchas gracias por el gran apoyo</p>
                        <footer>
                            <a href='https://github.com/YochiMC/sarestl/tree/main' target='_blank' rel='noreferrer'>Ver más...</a>
                        </footer>
                    </article>
                </div>
            </section >
        </>
    )
}