import Image from 'next/image'
import styles from '../styles/Highlights.module.css'

const Highlights = () => {
    return (
        <div className={styles.fullWidth}>

            <div className={styles.wrapper}>
                <h2 className={styles.h2}>Nos encargamos de <span className={styles.spanCyan}>todo</span></h2>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <Image src='/illustrations/highlights-lupa-cyan.png' alt='' width={130} height={130} />
                        <p>Evaluar adecuadamente los tratamientos de datos</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/highlights-martillo-cyan.png' alt='' width={130} height={130} />
                        <p>Implementar medidas de seguridad eficaces</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/highlights-escudo-cyan.png' alt='' width={130} height={130} />
                        <p>Designar responsables del cumplimiento normativo</p>
                    </div>
                    <div className={styles.item}>
                        <Image src='/illustrations/highlights-personas-cyan.png' alt='' width={130} height={130} />
                        <p>Extender el cumplimiento a toda la empresa</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Highlights;