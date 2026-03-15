import styles from './Home.module.css'
import model1 from '../../assets/images/model1a.jpg'
import Himher from './Herhim/Herhim';
import Products from '../Products/Products';
import Additional from './Additional/Additional';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import mobileImg from '../../assets/images/model1aPhone.jpg'
import { useEffect } from 'react';

export async function loader() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const filtered = await data.filter(item => item.category == "jewelery");
    const arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(filtered[i])
    }
    return arr;
}

function Home() {

    const products = useLoaderData();
    const cart = useOutletContext();

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
                            <img src={model1} alt="Model" className={styles.modelImg}/>

                        </picture>
                    </div>
                </section>
                <Himher />
                <Products products={products} cart={cart}/>
                <Additional />
            </div>
        </main>
        
    );
}

export default Home;