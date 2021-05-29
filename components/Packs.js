import Image from 'next/image'
import Link from 'next/link'

import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Packs.module.css'

const Packs = () => {
    return (
        <div className={styles.wrapper} id='Servicios'>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2>PACK BÁSICO</h2>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardIntro}>
                        <Image src='/illustrations/pack-basico.webp' alt='' width={266.4} height={188.2} />
                        <div className={styles.text}>
                            <p>< FontAwesomeIcon icon={faCheck} />Adaptación RGPD</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Píldora formativa</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Consultoría: 6 meses</p>
                        </div>
                    </div>
                    <p className={styles.linkPack}><Link href='/servicios/pack-basico'><a>Más información</a></Link></p>
                </div>
                <div className={styles.styleBar}></div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h2>PACK COMPLETO</h2>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.cardIntro}>
                        <Image src='/illustrations/pack-completo.webp' alt='' width={266.4} height={188.2} />
                        <div className={styles.text}>
                            <p>< FontAwesomeIcon icon={faCheck} />Adaptación RGPD</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Píldora formativa</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Consultoría: 12 meses</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Complementos</p>
                            <p>< FontAwesomeIcon icon={faCheck} />Masterclass específica</p>
                        </div>
                    </div>
                    <p className={styles.linkPack}><Link href='/servicios/pack-completo'><a>Más información</a></Link></p>
                </div>
                <div className={styles.styleBar}></div>
            </div>
        </div>
    );
}
 
export default Packs;