import QuantitySelector from "../../QuantitySelector/QuantitySelector"
import styles from "./CartCard.module.css"
import { X } from "lucide-react"

function CartCard({ product }) {

    return (
        <article>
            <div className={styles.card}>
                <div>
                    <img src={product.item.image} alt={product.item.title}/>
                </div>
                <div className={styles.cardData}>
                    <div className={styles.title}>
                        <p>{product.item.title}</p>
                    </div>
                    <div>
                        <p className={styles.price}>${product.item.price}</p>
                    </div>
                    <div>
                        <QuantitySelector value={product.quantity}/>
                    </div>
                </div>
                <div className={styles.xDiv}>
                    <X className={styles.x} size={32} />
                </div>
            </div>
        </article>
    )
}

export default CartCard