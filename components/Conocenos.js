import Image from 'next/image'
import Head from 'next/head'

import styles from '../styles/Conocenos.module.css'

const Conocenos = () => {
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/ScalaSans-BoldItalic.woff"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Let us guide you</h1>
                    <h2>Más de <span className={styles.spanCyan}>30 años</span> de experiencia en el sector</h2>
                </div>
                <div className={styles.text}>
                    <p>Polaris forma parte de un grupo de empresas del sector de la <span className={styles.spanCyan}>formación</span> y la <span className={styles.spanCyan}>consultoría</span> en Recursos Humanos,
                    que tiene un equipo de profesionales con <span className={styles.spanCyan}>más de 30 años de experiencia</span> en el sector, con un claro enfoque al cliente y
                    a la Calidad, para ofrecer una óptima adaptación a la nueva legislación.
                    </p>
                    <div className={styles.illustration}>
                        <Image src='/illustrations/conocenos.png' alt='' width={549} height={280} />
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Conocenos;