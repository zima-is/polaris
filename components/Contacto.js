import styles from '../styles/Contacto.module.css'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contacto = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <h2>Nuestros valores se basan en la <span className={styles.spanCyan}>resolución</span>, <span className={styles.spanCyan}>efectividad</span> y <span className={styles.spanCyan}>rapidez de respuesta.</span></h2>
                <p>Déjanos guiarte</p>
                <p className={styles.phoneLink}><a href="https://wa.me/34602256136" target="_blank">< FontAwesomeIcon icon={faWhatsapp} />602 256 136</a></p>
            </div>
        </>
    );
}
 
export default Contacto;