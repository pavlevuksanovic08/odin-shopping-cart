import QuantitySelector from "../../QuantitySelector/QuantitySelector"
import styles from "./CartCard.module.css"
import { X } from "lucide-react"
import { useState } from "react";

function CartCard({ product, cart }) {

    const [quantity, setQuantity] = useState(product.quantity);
    
    function handleQuantityChange(newQuantity) {
        cart.changeQuantity(product.item.id, newQuantity)
        setQuantity(newQuantity);
    }


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
                        <QuantitySelector value={quantity} handler={handleQuantityChange}/>
                    </div>
                </div>
                <div className={styles.xDiv}>
                    <X className={styles.x} size={32} onClick={() => cart.removeFromCart(product.item.id)}/>
                </div>
            </div>
        </article>
    )
}

export default CartCard