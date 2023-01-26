import styles from "./Navbar.module.css"
import logo from "../../img/logotype.png"
import { NavLink } from "react-router-dom"
import facebook from "../../img/facebook.png"
import inst from "../../img/inst.png"
import twitter from "../../img/twitter.png"
const Navbar = () => {

    return (
        <div className={styles.firstWrapper}>
            <div className={styles.wrapper}>
                <div className={styles.logoWrapper}>
                    <img src={logo} alt="" className={styles.logo} />
                    <div className={styles.navigation}>
                        <NavLink to="" className={styles.navlink}>Upcoming</NavLink>
                        <NavLink to="" className={styles.navlink}>Videos</NavLink>
                        <NavLink to="" className={styles.navlink}>Artists</NavLink>
                        <NavLink to="" className={styles.navlink}>Blog</NavLink>
                    </div>
                </div>
                <div className={styles.socialMediaWrapper}>
                    <div className={styles.authorization}>
                        <NavLink to="" className={styles.navlinkLogin}>Join</NavLink>
                        <span className={styles.slash}>/</span>
                        <NavLink to="" className={styles.navlinkLogin}>You're an Artist?</NavLink>
                        <span className={styles.slash}>/</span>
                        <NavLink to="" className={styles.navlinkLogin}>Log In</NavLink>
                    </div>
                    <div className={styles.socialMedia}>
                        <NavLink to="" className={styles.icon}><img src={facebook}></img></NavLink>
                        <NavLink to="" className={styles.icon}><img src={inst}></img></NavLink>
                        <NavLink to="" className={styles.icon}><img src={twitter}></img></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar