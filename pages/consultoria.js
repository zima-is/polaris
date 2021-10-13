import Consultoria from '../components/Consultoria.js'
import Servicios from '../components/Servicios.js'

import { NextSeo } from 'next-seo'

export default function ConsultoriaPage() {

  const SEO = {
    title: 'Polaris | Consultoría',
    description: 'Nuestro servicio de consultoría es integral, especializado y totalmente personalizado a las necesidades de tu empresa'
  }

  return (
    <>
      < NextSeo {...SEO} 
          openGraph={{
            type: 'website',
            url: 'https://www.polarisdata.es/consultoria',
            title: 'Polaris | Consultoría',
            description: 'Servicio de consultoría integral, especializado y totalmente personalizado a las necesidades de tu empresa.',
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
      < Consultoria />
      < Servicios />
    </>
  )
}