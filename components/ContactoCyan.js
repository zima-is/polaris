import Image from 'next/image'

import styles from '../styles/ContactoCyan.module.css'

import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactoCyan = () => {
    return (
        <div className={styles.fullWidth}>
            <div className={styles.wrapperGrid}>
                <div className={styles.phone}>
                    <p>Estamos aquí para tí</p>
                    <p className={styles.phoneLink}><a href="tel:+34690093663">< FontAwesomeIcon icon={faPhoneAlt} />690 093 663</a></p>
                </div>
                <div className={styles.mail}>
                    <p>En Polaris encontrarás siempre a un profesional al otro lado del teléfono que <span className={styles.spanNavy}>te guiará</span>.</p>
                    <p>Si lo prefieres <span className={styles.spanNavy}><a href="mailto:polarisdata@polarisdata.es">puedes escribirnos aquí</a></span>.</p>
                </div>
                <div className={styles.star}>
                    <Image src='/illustrations/animation-star-cyan.gif' alt='' width={120} height={120}/>
                </div> 
            </div>

        </div>
    );
}
 
export default ContactoCyan;