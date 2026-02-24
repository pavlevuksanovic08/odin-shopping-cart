import { Link} from "react-router-dom"
import styles from "./ErrorPage.module.css"

function ErrorPage() {
    return (
        <section className={styles.section} >
            <h1 className={styles.heading}><span className={styles.status}>404</span><br/>Page Not Found</h1>
            <p className={styles.msg}>The piece you're looking for may have been moved or no longer exists.</p>
            <Link to="/" className={styles.link}>Go Back</Link>
        </section>
    )
}

export default ErrorPage