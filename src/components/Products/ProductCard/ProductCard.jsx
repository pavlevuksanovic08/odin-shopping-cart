import { useState } from "react"
import styles from "./ProductCard.module.css"
import QuantitySelector from "../../QuantitySelector/QuantitySelector";

function ProductCard({ product, cart, setShow }) {

    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(newQuantity) {
        setQuantity(newQuantity);
    }

    function addToCartHandler() {
        cart.addToCart(product, quantity);
        setQuantity(1)
        setShow(true);
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
                            <QuantitySelector value={quantity} handler={handleQuantityChange} />
                            <button className={styles.addToCartBtn} onClick={addToCartHandler}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard;