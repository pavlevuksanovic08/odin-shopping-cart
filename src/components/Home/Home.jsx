import styles from './Home.module.css'
import model1 from '../../assets/images/model1a.webp'
import Himher from './Herhim/Herhim';
import Products from '../Products/Products';
import Additional from './Additional/Additional';
import { useLoaderData, useOutletContext, Await } from 'react-router-dom';
import mobileImg from '../../assets/images/model1aPhone.webp'
import { Suspense, useEffect } from 'react';
import Loading from '../Loading/Loading';

export async function loader() {

    const response = fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            const filtered = data.filter(item => item.category == "jewelery")
            return filtered.slice(0, 4);
        })
    
    return {
        products: response
    }
}
function Home() {

    const data = useLoaderData();
    const cart = useOutletContext();

    if (!data) return <Loading />

    useEffect(() => {
        document.title = "PAULO® | Handcrafted Jewelry — Official Site";
    }, []);

    return (
        <main style={{height: "fit-content"}}>  
            <div data-testid="home-component" style={{height: 100 + "%"}} className={styles.home}>
                <section>
                    <div className={styles.modelContainer}>
                        <picture>
                            <source media="(max-width: 800px)" srcSet={mobileImg} />
                            <img src={model1} alt="Model" className={styles.modelImg} fetchPriority='high'/>

                        </picture>
                    </div>
                </section>
                <Himher />
                <Suspense fallback={<Loading />}>
                    <Await resolve={data.products}>
                        {(resolvedProducts) => (
                            <Products products={resolvedProducts} cart={cart}/>
                        )}
                    </Await>
                </Suspense>
                <Additional />
            </div>
        </main>
        
    );
}

export default Home;