import styles from "./Navigation.module.css"
import houseIcon from "../../../assets/icons/house.svg"
import storeIcon from "../../../assets/icons/store.svg"
import cartIcon from "../../../assets/icons/shopping-cart.svg"

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation}>
                <li className={styles.iconContainer}>
                    <a href="/" className={styles.navLink}>
                        <img src={houseIcon} alt="Home" className={styles.navIcon} />
                    </a>
                </li>
                <li className={styles.iconContainer}>
                    <a href="/shop" className={styles.navLink}>
                        <img src={storeIcon} alt="Shop" className={styles.navIcon} />
                    </a>
                </li>
                <li className={styles.iconContainer}>
                    <a href="/cart" className={styles.navLink}>
                        <img src={cartIcon} alt="Cart" className={styles.navIcon} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;