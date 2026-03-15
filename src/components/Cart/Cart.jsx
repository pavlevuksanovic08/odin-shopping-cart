import { Fragment, useEffect } from "react";
import { ShoppingBasket } from "lucide-react";
import { useNavigate, useOutletContext } from "react-router-dom"
import styles from "./Cart.module.css"
import CartCard from "./CartCard/CartCard";


function Cart() {

    const cart = useOutletContext();
    const navigate = useNavigate();
    
    function totalPrice() {
        return cart.cartItems.reduce((total, current) => total + current.item.price * current.quantity, 0)
    }

    useEffect(() => {
        document.title = "PAULO® | Your Shopping Bag — Authentic Selection";
    }, []);

    return (
        <main>
            <div className={styles.cart}>
                    <div className={styles.products}>
                        <h1 className={styles.productsHeader}>Shopping cart</h1>
                        <p className={styles.productsText}>EVERYTHING YOU'VE SELECTED IS RIGHT HERE. MAKE FINAL ADJUSTMENTS AND CONTINUE TO CHECKOUT.</p>
                        <hr className={styles.productsLine} />
                        <div className={styles.cards}>
                            {cart.cartItems.length === 0 
                            ? <>
                                <div className={styles.empty}>
                                    <ShoppingBasket strokeWidth={1} className={styles.icon} />
                                    <p className={styles.mainTxt}>Your cart is <span style={{color: "#E2B82F"}}>empty</span>.</p>
                                    <p className={styles.txt}>Must add items on the cart before you preceed to checkout.</p>
                                    <button className={styles.emptyBtn} onClick={() => navigate("/shop")}>RETURN TO SHOP</button>
                                </div>
                            </> 
                            : <>
                                <hr className={styles.splitLine} />
                                {cart.cartItems.map((product, idx) => (
                                    <Fragment key={product.item.id + '-' + idx}>
                                        <CartCard product={product} cart={cart} />
                                        <hr className={styles.splitLine} />
                                    </Fragment>
                                ))}
                            </>}
                        </div>
                    </div>
                    <div className={styles.summary}>
                        <h1 className={styles.summaryHeader}>ORDER SUMMARY</h1>
                        <hr />
                        <div className={styles.summaryComponent}>
                            <p>TOTALY</p>
                            <p>${totalPrice()}</p>
                        </div>
                        <hr />
                        <div className={styles.summaryComponent}>
                            <p>SHIPPING</p>
                            <p>$0.00</p>
                        </div>
                        <hr />
                        <div>
                            <p>TOTALY WITH SHIPPING</p>
                            <p className={styles.total}>${totalPrice()}</p>
                        </div>
                        <button className={styles.btn}>CHECKOUT</button>
                    </div>
            </div>
        </main>
    )
}

export default Cart