import Navigation from './Navigation/Navigation'
import styles from './Header.module.css'
import logo from '../../assets/logo/paulo_transparent.png'
import { useEffect, useState } from 'react'

function Header({ cartLength }) {
    const [show, setShow] = useState(true);
    const [transparent, setTransparent] = useState(true)

    useEffect(() => {
        let lastScroll = window.scrollY;

        function handleScroll() {
            let currentScroll = window.scrollY;

            if (currentScroll < 20) setTransparent(true);

            if (currentScroll >= 20) setTransparent(false);

            if (currentScroll > lastScroll && currentScroll > 50) setShow(false);

            if (currentScroll < lastScroll) setShow(true);

            lastScroll = currentScroll
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

    return (
        <header className={`${styles.header} ${show ? "" : `${styles.hide}`} ${!transparent ? "" : `${styles.transparent}`}`}>
            <div className={styles.headerDiv}> 
                <img src={logo} alt="Logo" className={styles.logo} />
                <Navigation cartLength={cartLength}/>
            </div>
        </header>
    )
}

export default Header;