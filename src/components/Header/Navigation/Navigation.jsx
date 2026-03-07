import styles from "./Navigation.module.css"
import houseIcon from "../../../assets/icons/house.svg"
import storeIcon from "../../../assets/icons/store.svg"
import cartIcon from "../../../assets/icons/shopping-cart.svg"
import { Link } from "react-router-dom"

function Navigation({ cartLength }) {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigation}>
                <li className={styles.iconContainer}>
                    <Link to="/" className={styles.navLink}>
                        <img src={houseIcon} alt="Home" className={styles.navIcon} />
                    </Link>
                </li>
                <li className={styles.iconContainer}>
                    <Link to="/shop" className={styles.navLink}>
                        <img src={storeIcon} alt="Shop" className={styles.navIcon} />
                    </Link>
                </li>
                <li className={styles.iconContainer} style={{"position": "relative"}}>
                    <Link to="/cart" className={styles.navLink}>
                        <img src={cartIcon} alt="Cart" className={styles.navIcon} />
                        {cartLength !== 0 && 
                            <div data-testid="cartLength" className={styles.cartLength}>
                                {cartLength}
                            </div>
                        }
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;