import styles from '../styles/Layout.module.css'
import Navigation from './Navigation.js'
import Footer from './Footer.js'
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