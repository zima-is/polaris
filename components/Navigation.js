import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Navigation.module.css'
import IconMenuOpen from '../public/icon-open-menu.svg'
import IconMenuClose from '../public/icon-close-menu.svg'


const Navigation = () => {

    //menu toggle state
    const [menuState, setMenuState] = useState(false)
    const toggleMenu = () => setMenuState(!menuState)

    return (
        <div className={styles.header}>

            <nav className={styles.navWrapper}>

                <div className={styles.navHeader}>
                    <Link href='/'><a><Image src='/illustrations/polaris-navy.png' alt='Ilustración del logo de Polaris' width={175} height={60.34} /></a></Link>
                    <div className={styles.iconToggleMenu} onClick={toggleMenu}>
                        {
                            menuState ?
                            (< IconMenuClose width={28} />) :
                            (< IconMenuOpen width={18} />)
                        }                     
                    </div>
                    
                </div>

                <div className={`${styles.navLinks} ${menuState ? styles.displayFlex : ''}`}>

                    <div className={`${styles.item} ${styles.servicios}`}>
                        <a href='/#Servicios'>
                            <span>Servicios</span>
                        </a>
                        <div className={styles.dropdown}>
                            <Link href='/servicios/pack-basico'><a className={styles.subitem} onClick={toggleMenu}>Pack Básico</a></Link>
                            <Link href='/servicios/pack-completo'><a className={styles.subitem} onClick={toggleMenu}>Pack Completo</a></Link>
                            <Link href='/servicios/plan-igualdad-empresas'><a className={styles.subitem} onClick={toggleMenu}>Plan de Igualdad <span className={styles.tag}>NUEVO</span></a></Link>
                        </div>
                    </div>
  
                    <Link href='/consultoria'><a className={styles.item} onClick={toggleMenu}>Consultoría</a></Link>
                    <Link href='/conocenos'><a className={styles.item} onClick={toggleMenu}>Conócenos</a></Link>
                    <Link href='/blog'><a className={styles.item} onClick={toggleMenu}>Blog</a></Link>
                    <Link href='/dejanos-guiarte'><a className={`${styles.item} ${styles.guia}`} onClick={toggleMenu}>Déjanos Guiarte</a></Link>

                </div>

            </nav>

        </div>
    );
}
 
export default Navigation;