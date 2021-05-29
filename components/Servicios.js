import Image from 'next/image'
import styles from '../styles/Servicios.module.css'

const Servicios = () => {
    return (
        <div className={styles.fullWidth}>

            <div className={styles.wrapper}>
                <h2 className={styles.h2}>Servicio especializado, personalizado y seguro</h2>
                <div className={styles.container}>
                    <div className={styles.item}>
                        <div className={styles.illustration}>
                            <Image src='/illustrations/servicios-lupa-navy.png' alt='' width={74} height={74} />
                        </div>
                        <p>Diagnóstico inicial de la situación de la organización</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.illustration}>
                            <Image src='/illustrations/servicios-escudo-navy.png' alt='' width={63} height={78} />
                        </div>
                        <p>Verificación de la seguridad del entorno tecnológico y organizativo</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.illustration}>
                            <Image src='/illustrations/servicios-plan-navy.png' alt='' width={56.4} height={75} />
                        </div>       
                        <p>Plan de acción a medida</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.illustration}>
                            <Image src='/illustrations/servicios-formacion-navy.png' alt='' width={119.85} height={75} />
                        </div>
                        <p>Formación bonificable y especializada</p>
                    </div>

                </div>
            </div>

        </div>
    );
}
 
export default Servicios;