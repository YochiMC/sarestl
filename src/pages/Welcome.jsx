import { NavLink } from 'react-router-dom'
import { News } from '../components/news/News'
import styles from '../assets/styles/Welcome.module.css'

//const user_data = { clave: '21240551', 'name': 'Joseph Alexander Martínez Cortés', 'role': 'alumnno' }

export function Welcome() {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>¡Bienvenido Nombrecito chido y dinamico!</h1>
                    <div className="profile-photo-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="profile-photo"
                            id="profile-photo"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                        </svg>                        
                    </div>
                    <News />
                    <section className={styles.advice}>
                        <strong>Te invitamos a consultar nuestro manual de usuario que tenemos preparado para ti c:</strong>
                        <NavLink to="/ManualMiembros" className={styles.enlace}>Ir al manual de usuario</NavLink>
                    </section>
                </div>
            </div>
        </>
    )
}