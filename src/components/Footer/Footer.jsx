import logo from "../../assets/logo/paulo_transparent.png"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <img src={logo} alt="Logo" className={styles.logo}/>
                <p data-testid="copyRight" className={styles.text}>© 2026 PAULO. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;