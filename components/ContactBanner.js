import styles from '../styles/ContactBanner.module.css'

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactBanner = () => {
    return (
        <div className={styles.wrapper}>
            <p>Estamos aquí para ti <a href="https://wa.me/34602256136" target="_blank">< FontAwesomeIcon icon={faWhatsapp} className={styles.phoneLink} /><span className={styles.spanBold}>602 256 136</span></a></p>
        </div>
    );
}
 export default ContactBanner;