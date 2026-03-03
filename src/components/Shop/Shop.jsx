import ProductCard from "../Products/ProductCard/ProductCard"
import { useLoaderData, useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css"

export async function loader() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const filtered = await data.filter(item => item.category == "jewelery");
    return filtered;
}

function Shop() {
    const products = useLoaderData();

    const cart = useOutletContext();

    return (
        <main>
            <div className={styles.shop}>
                <h1 className={styles.heading}>Shop</h1>
                <div className={styles.productsContainer}>
                    <div className={styles.products}>
                        {products.map(product => (
                            <ProductCard product={product} key={product.id} cart={cart}/>
                        ))}
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default Shop