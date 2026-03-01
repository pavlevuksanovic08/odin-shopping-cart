import styles from "./Products.module.css"
import ProductCard from "./ProductCard/ProductCard"



function Products({ products }) {
    return (
        <section data-testid="products-section" className={styles.container}>
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