import Formulario from '../components/Formulario.js';
import Servicios from '../components/Formulario.js'

import { NextSeo } from 'next-seo'
import { CorporateContactJsonLd } from 'next-seo'
 
const DejanosGuiartePage = () => {

    const SEO = {
        title: 'Polaris | Contacto',
        description: 'Profesionales de Polaris contestaran todas las consultas que nos hagas llegar a través del formulario de contacto'
    }

    return (
        <>
            < NextSeo {...SEO} />
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