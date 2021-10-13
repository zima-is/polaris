import PackBasico from '../../components/PackBasico.js'

import { NextSeo } from 'next-seo'

export default function PackBasicoPage() {

  const SEO = {
    title: 'Polaris | Pack Básico',
    description: 'El servicio Pack Básico de Polaris ayuda a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD'
  }

  return (
    <>
      < NextSeo {...SEO} 
          openGraph={{
            type: 'website',
            url: 'https://www.polarisdata.es/servicios/pack-basico',
            title: 'Polaris | Pack Básico',
            description: 'Cumplimiento del Reglamento de Protección de Datos RGPD, 6 meses de consultoría y masterclass',
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
      < PackBasico />
    </>
  )
}