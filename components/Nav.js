import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import  IconMenuOpen from '../public/icon-open-menu.svg'
import  IconMenuClose from '../public/icon-close-menu.svg'

const Nav = () => {

    const [submenuState, setSubmenuState] = useState(false)
    const toggleSubmenu = () => setSubmenuState(!submenuState)
    const closeSubmenu = () => setSubmenuState(false)

    const [menuStateOpen, setMenuStateOpen] = useState(false)
    const toggleMenu = () => setMenuStateOpen(!menuStateOpen)

 
    return (
        <div className={navStyles.header}>

        <nav className={navStyles.navContainer}>
            <div className={navStyles.navHeader}>
                <Link href='/'><a className={navStyles.logo}>Polaris</a></Link>
                <div className={navStyles.menuIcons} onClick={toggleMenu}>
                    {
                        menuStateOpen ?
                        (< IconMenuClose width={18} />) :
                        (< IconMenuOpen width={18} />)
                    }
                </div>
            </div>
            <ul className={menuStateOpen ? navStyles.navLinksOpened : navStyles.navLinksClosed}>
                <li className={navStyles.hasSubmenu} onClick={toggleSubmenu}><a className={submenuState ? navStyles.hasSubmenuOpened : navStyles.hasSubmenuClosed}>Servicios</a>
                    <ul className={submenuState ? navStyles.submenu : navStyles.hidden}>
                        <li><Link href='/servicios/pack-basico'><a>Pack Básico</a></Link></li>
                        <li className={navStyles.newFlag}><Link href='/servicios/pack-completo'><a>Pack Completo</a></Link></li>
                    </ul>
                </li>
                <li><Link href='/consultoria'><a>Consultoría</a></Link></li>
                <li><Link href='/conocenos'><a>Conócenos</a></Link></li>
                <li><Link href='/articulos'><a>Artículos</a></Link></li>
                <li className={navStyles.contactButton}><Link href='/dejanos-guiarte'><a>Déjanos Guiarte</a></Link></li>
            </ul>
        </nav>

        </div>
    );
}
 
export default Nav;