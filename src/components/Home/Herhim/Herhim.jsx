import styles from "./Herhim.module.css";
import herImg from "../../../assets/images/womanModel.jpg";
import himImg from "../../../assets/images/manModel.jpg";

function Himher() {
    return (
        <section className={styles.himher}>
            <h2 className={styles.heading}>Buy more than a gift</h2>
            <div className={styles.himherContainer}>
                <div className={styles.item}>
                    <img src={herImg} alt="Woman model" className={styles.modelImg} />
                    <p className={styles.itemTxt}>Buy for her</p>
                </div>
                <div className={styles.item}>
                    <img src={himImg} alt="Man model" className={styles.modelImg} />
                    <p className={styles.itemTxt}>Buy for him</p>
                </div>
            </div>
        </section>
    )
}

export default Himher;