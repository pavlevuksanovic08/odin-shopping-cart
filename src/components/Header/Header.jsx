import Navigation from './Navigation/Navigation'
import styles from './Header.module.css'
import logo from '../../assets/logo/paulo_transparent.png'

function Header() {
    return (
        <header>
            <div className={styles.header}> 
                <img src={logo} alt="Logo" className={styles.logo} />
                <Navigation />
            </div>
        </header>
    )
}

export default Header;