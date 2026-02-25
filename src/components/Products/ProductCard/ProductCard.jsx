import { useState } from "react"
import styles from "./ProductCard.module.css"

function ProductCard({product}) {
    const [quantity, setQuantity] = useState(1);

    function decreaseQuantity() {
        const newQuantity = quantity - 1;
        if (newQuantity > 0) setQuantity(newQuantity);
    }

    function increaseQuantity() {
        const newQuantity = quantity + 1;
        if (newQuantity < 100) setQuantity(newQuantity);
    }

    return (
        <article data-testid="product-card" style={{height: 100 + "%"}}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={product.image} alt={product.title} className={styles.image}/>
                </div>
                <div className={styles.productData}>
                    <p className={styles.title} data-testid="title">{product.title}</p>
                    <div className={styles.priceAndQuantity}>
                        <p className={styles.price} data-testid="price">${product.price}</p>
                        <div className={styles.addToCart}>
                            <div className={styles.quantitySelector} data-testid="selector">
                                <button className={styles.minusBtn} onClick={decreaseQuantity}>-</button>
                                <p className={styles.quantity} data-testid="quantity">{quantity}</p>
                                <button className={styles.plusBtn} onClick={increaseQuantity}>+</button>
                            </div>
                            <button className={styles.addToCartBtn}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;