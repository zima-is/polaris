import styles from '../styles/ContactBanner.module.css'

import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ContactBanner = () => {
    return (
        <div className={styles.wrapper}>
            <p>Estamos aquí para ti <a href="https://wa.me/34690093663">< FontAwesomeIcon icon={faWhatsapp} className={styles.phoneLink} /><span className={styles.spanBold}>690 093 663</span></a></p>
        </div>
    );
}
 export default ContactBanner;