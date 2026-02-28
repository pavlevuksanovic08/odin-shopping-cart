import { Fragment } from "react";
import { ShoppingBasket, ShoppingCart } from "lucide-react";
import { useLoaderData } from "react-router-dom"
import styles from "./Cart.module.css"
import CartCard from "./CartCard/CartCard";

function Cart() {

    const testProducts = [
        {
            item: {
                id: 1,
                title: "Test Item",
                image: "https://picsum.photos/200/300",
                price: 100
            },
            quantity: 10
        },
        {
            item: {
                id: 1,
                title: "Test Item",
                image: "https://picsum.photos/200/300",
                price: 100
            },
            quantity: 10
        },
        {
            item: {
                id: 1,
                title: "Test Item",
                image: "https://picsum.photos/200/300",
                price: 100  
            },
            quantity: 10
        }
    ]

    const empty = []

    return (
        <main>
            <div className={styles.cart}>
                    <div className={styles.products}>
                        <h1 className={styles.productsHeader}>Shopping cart</h1>
                        <p className={styles.productsText}>EVERYTHING YOU'VE SELECTED IS RIGHT HERE. MAKE FINAL ADJUSTMENTS AND CONTINUE TO CHECKOUT.</p>
                        <hr className={styles.productsLine} />
                        <div className={styles.cards}>
                            {testProducts.length === 0 
                            ? <>
                                <div className={styles.empty}>
                                    <ShoppingBasket strokeWidth={1} className={styles.icon} />
                                    <p className={styles.mainTxt}>Your cart is <span style={{color: "#E2B82F"}}>empty</span>.</p>
                                    <p className={styles.txt}>Must add items on the cart before you preceed to checkout.</p>
                                    <button className={styles.emptyBtn}>RETURN TO SHOP</button>
                                </div>
                            </> 
                            : <>
                                <hr className={styles.splitLine} />
                                {testProducts.map((product, idx) => (
                                    <Fragment key={product.item.id + '-' + idx}>
                                        <CartCard product={product} />
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
                            <p>${}</p>
                        </div>
                        <hr />
                        <div className={styles.summaryComponent}>
                            <p>SHIPPING</p>
                            <p>$0.00</p>
                        </div>
                        <hr />
                        <div>
                            <p>TOTALY WITH SHIPPING</p>
                            <p className={styles.total}>${}</p>
                        </div>
                        <button className={styles.btn}>CHECKOUT</button>
                    </div>
            </div>
        </main>
    )
}

export default Cart