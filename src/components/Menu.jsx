import { NavLink } from "react-router-dom";
import {useState} from "react";
import styles from '../assets/styles/Menu.module.css'

export function Menu({ listItems }) {

    const [isOpen, setIsOpnen] = useState(false);

    function handleClick(){
        setIsOpnen(!isOpen)
    }

    return (
        <nav className={styles.barrita}>
            <button className={styles.buttonMenu} onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
            </button>
            <ul className={isOpen ? styles.menu : styles.menuClosed}>
                {listItems.map((item) =>
                    <li key={item.id} className={styles.item}>
                        <NavLink key={item.id} to={item.linki} className={styles.link}>{item.name}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}