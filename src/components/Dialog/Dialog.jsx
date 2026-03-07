import { CheckCircle } from "lucide-react"
import CartCard from "../Cart/CartCard/CartCard"
import { useNavigate } from "react-router-dom"
import styles from "./Dialog.module.css"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

function Dialog({ cart, show, setShow }){

    const dialogRef = useRef(null)

    const navigate = useNavigate()

    function closeDialog() {
        setShow(false);
    }

    useEffect(() => {
        if (show) {
            dialogRef.current.showModal(); // OVO mora biti showModal
        } else {
            dialogRef.current.close();
        }
    }, [show]);

    const dialog = <dialog ref={dialogRef} className={`${show ? `${styles.show}` : `${styles.hide}`} ${styles.dialog}`} data-testid="dialog">
            <div>
                {/*successfuly added to cart*/}
                <div className={styles.msg}>
                    <CheckCircle size={24} strokeWidth={1} />
                    <p>Product successfuly added to your cart.</p>
                </div>
                {/*total*/}
                <div data-testid="pricing">
                    <div className={styles.pricing}>
                        <p>Shipping:</p>
                        <p>$0.00</p>
                    </div>
                    <div className={styles.pricing}>
                        <p>Total:</p>
                        <p>${cart.totalPrice()}</p>
                    </div>
                </div>
                {/*buttons*/}
                <div className={styles.btns}>
                    <button className={styles.btn} onClick={() => navigate("/cart")}>VIEW CART</button>
                    <button className={styles.btn}>CHECKOUT</button>
                    <button className={styles.btn} onClick={closeDialog}>CONTINUE SHOPPING</button>
                </div>
            </div>
        </dialog>
    

    return createPortal(dialog, document.body)
}

export default Dialog