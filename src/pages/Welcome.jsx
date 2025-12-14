import styles from '../assets/styles/Welcome.module.css'

const user_data = { clave: '21240551', 'name': 'Joseph Alexander Martínez Cortés', 'role': 'alumnno' }

export function Welcome() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>¡Bienvenido a nuestro SaresTL!</h1>
                    <h2>Noticias</h2>
                    <div>
                        <span>Update 1</span>
                        <span>Update 1</span>
                        <span>Update 1</span>
                        <span>Update 1</span>
                        <span>Update 1</span>
                        <span>Update 1</span>
                    </div>
                </div>
            </div>
        </>
    )
}