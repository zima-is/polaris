import styles from '../styles/Contacto.module.css'

import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Nuestros valores se basan en la <span className={styles.spanCyan}>resolución</span>, <span className={styles.spanCyan}>efectividad</span> y <span className={styles.spanCyan}>rapidez de respuesta.</span></h2>
                <p>Déjanos guiarte</p>
                <p className={styles.phoneLink}><a href="tel:+34690093663">< FontAwesomeIcon icon={faPhoneAlt} />690 093 663</a></p>
            </div>
        </>
    );
}
 
export default Contacto;