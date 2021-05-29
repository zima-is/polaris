import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
import Meta from './Meta'
import ContactBanner from './ContactBanner'

import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'


const Layout = ({children}) => {
    return (
        <>
            < DefaultSeo {...SEO} />
            < Navigation />
            < ContactBanner />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            < Footer />
        </>
    );
}
 
export default Layout;