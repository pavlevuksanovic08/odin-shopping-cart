import { useState } from "react"
import styles from "./QuantitySelector.module.css"

function QuantitySelector({ value }) {
    const [quantity, setQuantity] = useState(value);

    function decreaseQuantity() {
        const newQuantity = quantity - 1;
        if (newQuantity > 0) setQuantity(newQuantity);
    }

    function increaseQuantity() {
        const newQuantity = quantity + 1;
        if (newQuantity < 100) setQuantity(newQuantity);
    }

    function inputChange(e) {
        if (e.target.value === "") {
            setQuantity("");
            return;
        }
        const val = Number(e.target.value);
        if (val < 1) setQuantity(1);
        else if (val > 99) setQuantity(99);
        else setQuantity(val)
}

    return (
        <div className={styles.quantity} data-testid="quantity">
            <button className={`${styles.btn} ${styles.left}`} onClick={decreaseQuantity}>-</button>
            <input
                type="number"
                className={styles.input}
                data-testid="quantity"
                value={quantity}
                onChange={inputChange}
            />                                
            <button className={`${styles.btn} ${styles.right}`} onClick={increaseQuantity}>+</button>
        </div>
    )
}

export default QuantitySelector