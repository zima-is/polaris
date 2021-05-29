import styles from '../styles/Equipo.module.css'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Equipo = () => {
    return (
        <>
            <div className={styles.fullWidth}>
                <div className={styles.wrapper}>
                    <h2 className={styles.h2}>Nuestro equipo</h2>
                    <div className={styles.equipoGrid}>
                        <div className={`${styles.check} ${styles.consultoresCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.consultores}>
                            <p>Consultores</p>
                        </div>
                        <div className={`${styles.check} ${styles.tecnicosCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.tecnicos}>
                            <p>Técnicos</p>
                        </div>
                        <div className={`${styles.check} ${styles.auditoresCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.auditores}>
                            <p>Auditores</p>
                        </div>
                        <div className={`${styles.check} ${styles.abogadosCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.abogados}>
                            <p>Abogados</p>
                        </div>
                        <div className={`${styles.check} ${styles.expertosCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.expertos}>
                            <p>Expertos en TIC<br/>y Ciberseguridad</p>
                        </div>
                        <div className={`${styles.check} ${styles.formadoresCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.formadores}>
                            <p>Formadores acreditados</p>
                        </div>
                        <div className={`${styles.check} ${styles.gestoresCheck}`}>
                            < FontAwesomeIcon icon={faCheck} />
                        </div>
                        <div className={styles.gestores}>
                            <p>Gestores administrativos</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Equipo;