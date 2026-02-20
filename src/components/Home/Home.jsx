import styles from './Home.module.css'
import model1 from '../../assets/images/model1a.jpg'
import Himher from './Herhim/Herhim';
import Products from './Products/Products';
import Additional from './Additional/Additional';

function Home() {
    return (
        <main style={{height: "fit-content"}}>  
            <div data-testid="home-component" style={{height: 100 + "%"}} className={styles.home}>
                <section>
                    <div className={styles.modelContainer}>
                        <img src={model1} alt="Model" className={styles.modelImg}/>
                    </div>
                </section>
                <Himher />
                <Products />
                <Additional />
            </div>
        </main>
        
    );
}

export default Home;