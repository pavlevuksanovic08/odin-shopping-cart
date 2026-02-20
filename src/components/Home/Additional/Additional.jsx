import { HandHeart, Truck, Gift, ShieldCheck } from "lucide-react"
import styles from "./Additional.module.css"

function Additional() {

    let size = 80;
    let strokeWidth = 1;

    return (
        <section data-testid="additional">
            <div className={styles.placeholder}>
                <div className={styles.card}>
                    <HandHeart size={size} strokeWidth={strokeWidth} aria-label="Hand heart icon" />
                    <p className={styles.text}>Free 30-day returns</p>
                </div>
                <div className={styles.separator} />
                <div className={styles.card}>
                    <Truck size={size} strokeWidth={strokeWidth} aria-label="Truck icon" />
                    <p className={styles.text}>Get your gifts in time - Free shipping on orders $75+</p>
                </div>
                <div className={styles.separator} />
                <div className={styles.card}>
                    <Gift size={size} strokeWidth={strokeWidth} aria-label="Gift icon" />
                    <p className={styles.text}>Gift packaging available</p>
                </div>
                <div className={styles.separator} />
                <div className={styles.card}>
                    <ShieldCheck size={size} strokeWidth={strokeWidth} aria-label="Shield check icon" />
                    <p className={styles.text}>Complimentary 1-year warranty</p>
                </div>
            </div>
        </section>
    )
}

export default Additional;