import Hero from '../components/Hero.js'
import Highlights from '../components/Highlights.js'
import ContactoCyan from '../components/ContactoCyan.js'
import Packs from '../components/Packs.js'

import { NextSeo, LocalBusinessJsonLd } from 'next-seo'
import { LogoJsonLd } from 'next-seo'
 
export default function Home() {

  const SEO = {
    title: 'Polaris',
    description: 'Aportamos soluciones integrales en materia de Protección de Datos y Planes de Igualdad. Ayudamos a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD.'
  }

  return (
    <>
      < NextSeo {...SEO} 
          openGraph={{
              type: 'website',
              url: 'https://www.polarisdata.es',
              title: 'Polaris',
              description: 'Aportamos soluciones integrales en materia de Protección de Datos y Planes de Igualdad. Ayudamos a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD.',
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

      < LocalBusinessJsonLd
          type= 'ProfessionalService'
          id='http://www.polarisdata.es'
          url='http://www.polarisdata.es'
          images={[
            'https://polarisdata.vercel.app/_next/image?url=%2Fillustrations%2Fpolaris-navy.png&w=256&q=75'
          ]}
          name='Polaris'
          description='Polaris consultoría especializada en el Reglamento de Protección de Datos RGPD'
          telephone='+34690093663'
          address={
            {
              streetAddress: 'Carrer de Compte Güell, 54 4º1ª',
              addressLocality: 'Barcelona',
              addressRegion: 'Barcelona',
              postalCode: '08028',
              addressCountry: 'ES'
            }
          }
          geo={
            {
              latitude: '41.376836945212844',
              longitude: '2.123315198384843',
            }
          }
          openingHours={
            [
              {
                opens: '09:00',
                closes: '17:00',
                dayOfWeek: [
                  'Lunes',
                  'Martes',
                  'Miercoles',
                  'Jueves',
                  'Viernes',
                ],
              }
            ]
          }
      />
      <LogoJsonLd
        logo="https://polarisdata.vercel.app/_next/image?url=%2Fillustrations%2Fpolaris-navy.png&w=256&q=75"
        url="http://www.polarisdata.es"
      />
      < Hero />
      < Highlights />
      < Packs />
      < ContactoCyan />
    </>
  )
}
