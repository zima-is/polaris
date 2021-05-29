import styles from '../styles/PackBasico.module.css'

import { faPhoneAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PackBasico = () => {
    return (
        <div className={styles.fullWidth}>

            <div className={styles.cardGrid}>
                <div className={styles.cardHeader}>
                    <h1>PACK BÁSICO</h1>
                    <p>Te ayudamos a cumplir lo que estrictamente marca la ley</p>
                    <p>Desde <span>125€</span></p>
                    <p className={styles.emailLink}>
                        <a href="/dejanos-guiarte">Solicitar</a>
                    </p>
                </div>
                <div className={styles.cardContent}>
                    <p className={styles.intro}>< FontAwesomeIcon icon={faCheck} />Documentación + píldora formativa + 6 meses de consultoría</p>
                    <p className={styles.documentacion}>DOCUMENTACIÓN ENTREGABLE</p>
                    <ul>
                        <li>< FontAwesomeIcon icon={faCheck} />Acta de inicio de Trabajo de adaptación RGPD</li>
                        <li>< FontAwesomeIcon icon={faCheck} />Documento de necesidad DPD</li>
                        <li>< FontAwesomeIcon icon={faCheck} />Documentación necesaria en formato digital</li>

                        <li>< FontAwesomeIcon icon={faCheck} />PDF explicativo documentación</li>
                        <li>< FontAwesomeIcon icon={faCheck} />Masterclass</li>
                        <li>< FontAwesomeIcon icon={faCheck} />Consultoría: 6 meses</li>
                    </ul>
                </div>
                <div className={styles.cardFooter}>
                    <p>¿Necesitas más información?</p>
                    <p>Estamos aquí para ti</p>
                    <p className={styles.phoneLink}><a href="tel:+34690093663">< FontAwesomeIcon icon={faPhoneAlt} />690 093 663</a></p>
                    <p>También <a href="mailto:testr@test.com">puedes escribirnos aquí</a></p>
                </div>
            </div>

        </div>

    );
}
 
export default PackBasico;