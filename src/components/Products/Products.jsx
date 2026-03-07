import styles from "./Products.module.css"
import ProductCard from "./ProductCard/ProductCard"
import { useState } from "react";
import Dialog from "../Dialog/Dialog";



function Products({ products, cart }) {

    const [show, setShow] = useState(false)

    return (
        <section data-testid="products-section" className={styles.container}>
            <h2 className={styles.heading}>BEST GIFTS</h2>
            <div className={styles.centerDiv}>
                <div data-testid="products" className={styles.products}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} cart={cart} setShow={setShow} />
                    ))}
                </div>
            </div>
            <Dialog cart={cart} show={show} setShow={setShow} />
        </section>
    )
}

export default Products;