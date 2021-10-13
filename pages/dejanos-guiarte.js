import Formulario from '../components/Formulario.js';
import Servicios from '../components/Formulario.js'

import { NextSeo } from 'next-seo'
import { CorporateContactJsonLd } from 'next-seo'
 
const DejanosGuiartePage = () => {

    const SEO = {
        title: 'Polaris | Contacto',
        description: 'Profesionales de Polaris contestarán todas las consultas que nos hagas llegar a través del formulario de contacto'
    }

    return (
        <>
            < NextSeo {...SEO} 
                    openGraph={{
                    type: 'website',
                    url: 'https://www.polarisdata.es/dejanos-guiarte',
                    title: 'Polaris | Contacto',
                    description: 'Profesionales de Polaris contestarán todas las consultas que nos hagas llegar',
                    images: [
                        {
                        url: '/illustrations/og-card.webp',
                        width: 1200,
                        height: 630,
                        alt: '',
                        }
                    ],
                }}
            />
            < CorporateContactJsonLd
                url='http://www.polarisdata.es'
                logo='https://polarisdata.vercel.app/_next/image?url=%2Fillustrations%2Fpolaris-navy.png&w=256&q=75'
                contactPoint={[
                    {
                        telephone: '+34-690-093-663',
                        contactType: 'Teléfono atención al cliente',
                        areaServed: 'ES',
                        availableLanguage: ['Spanish', 'Catalan']
                    }
                ]}           
            
            
            />
            < Formulario />
        </>
    );
}
 
export default DejanosGuiartePage;