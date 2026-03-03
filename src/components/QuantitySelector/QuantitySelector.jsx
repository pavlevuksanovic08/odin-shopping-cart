import { useState } from "react"
import styles from "./QuantitySelector.module.css"

function QuantitySelector({ value, handler }) {

    function decreaseQuantity() {
        const newQuantity = value - 1;
        if (newQuantity > 0) handler(newQuantity);
    }

    function increaseQuantity() {
        const newQuantity = value + 1;
        if (newQuantity < 100) handler(newQuantity);
    }

    function inputChange(e) {
        if (e.target.value === "") {
            handler("");
            return;
        }
        const val = Number(e.target.value);
        if (val < 1) handler(1);
        else if (val > 99) handler(99);
        else handler(val)
}

    return (
        <div className={styles.quantity} data-testid="quantity">
            <button className={`${styles.btn} ${styles.left}`} onClick={decreaseQuantity}>-</button>
            <input
                type="number"
                className={styles.input}
                data-testid="quantity"
                defaultValue={value}
                onChange={inputChange}
            />                                
            <button className={`${styles.btn} ${styles.right}`} onClick={increaseQuantity}>+</button>
        </div>
    )
}

export default QuantitySelector