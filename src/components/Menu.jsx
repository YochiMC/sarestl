import { NavLink } from "react-router-dom";
import styles from '../assets/styles/Menu.module.css'

export function Menu({ listItems }) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {listItems.map((item) =>
                    <NavLink key={item.id} to={item.linki} className={styles.link}>{item.name}</NavLink>
                )}
            </ul>   
        </nav>
    )
}