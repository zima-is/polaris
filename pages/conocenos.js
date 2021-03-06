import Conocenos from '../components/Conocenos.js'
import Equipo from '../components/Equipo.js'
import Contacto from '../components/Contacto.js'

import { NextSeo } from 'next-seo'
 
export default function ConocenosPage() {

  const SEO = {
    title: 'Polaris | Conócenos',
    description: 'Conoce nuestro equipo de profesionales con más de 30 años de experiencia en el ámbito de la protección de datos'
  }

  return (
    <>
      < NextSeo {...SEO} 
          openGraph={{
            type: 'website',
            url: 'https://www.polarisdata.es/conocenos',
            title: 'Polaris | Conócenos',
            description: 'Conoce nuestro equipo de profesionales con más de 30 años de experiencia.',
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
      < Conocenos />
      < Equipo />
      < Contacto />
    </>
  )
}