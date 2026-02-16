import styles from "./Products.module.css"
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard"

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const productsFetch = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            const filtered = await data.filter(item => item.category == "jewelery");
            setProducts(filtered);
        }
        productsFetch();
    }, []);

    return (
        <section data-testid="products-section" style={{height: 100 + "%"}}>
            <h2 className={styles.heading}>BEST GIFTS</h2>
            <div className={styles.centerDiv}>
                <div data-testid="products" className={styles.products}>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;