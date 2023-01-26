import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Watch and interact with your favorite musicians Live from their studio.</h1>
            <NavLink to="" className={styles.join}>Join Echio for free</NavLink>
        </div>
    )
}

export default Header