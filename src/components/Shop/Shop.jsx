import ProductCard from "../Products/ProductCard/ProductCard"
import { useLoaderData, useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css"
import Dialog from "../Dialog/Dialog";
import { useState, useEffect, Suspense } from "react";
import { Await } from "react-router-dom";
import Loading from "../Loading/Loading";

export async function loader() {
    const response = fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            return data.filter(item => item.category == "jewelery")
        })
    
    return {
        products: response
    }
}

function Shop() {
    const products = useLoaderData();

    const cart = useOutletContext();

    const [show, setShow] = useState(false);

    useEffect(() => {
        document.title = "PAULO® | Shop Our Original Collection";
    }, []);

    return (
        <main>
            <div className={styles.shop}>
                <h1 className={styles.heading}>Shop</h1>
                <div className={styles.productsContainer}>
                    <div className={styles.products}>
                        <Suspense fallback={<Loading />}>
                            <Await resolve={products.products}>
                                {(resolved) => resolved.map(product => (
                                    <ProductCard product={product} key={product.id} cart={cart} setShow={setShow} />
                                ))}
                            </Await>
                        </Suspense>                       
                    </div>
                </div>
                
            </div>
            <Dialog cart={cart} show={show} setShow={setShow}/>
        </main>
    )
}

export default Shop