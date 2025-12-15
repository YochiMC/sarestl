import { NavLink } from 'react-router-dom'
import { News } from '../components/news/News'
import styles from '../assets/styles/Welcome.module.css'

//const user_data = { clave: '21240551', 'name': 'Joseph Alexander Martínez Cortés', 'role': 'alumnno' }

export function Welcome() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>¡Bienvenido a nuestro sistema SaresTL!</h1>
                    <News />
                    <section className={styles.advice}>
                        <strong>Te invitamos a consultar nuestro manual de usuario que tenemos preparado para ti c:</strong>
                        <NavLink to="/ManualMiembros" className={styles.link}>Ir al manual de usuario</NavLink>
                    </section>
                </div>
            </div>
        </>
    )
}