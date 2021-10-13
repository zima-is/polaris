import PackCompleto from '../../components/PackCompleto.js'

import { NextSeo } from 'next-seo'

export default function PackCompletoPage() {

  const SEO = {
    title: 'Polaris | Pack Completo',
    description: 'El servicio Pack Completo de Polaris ayuda a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD'
  }

  return (
    <>
      < NextSeo {...SEO} 
          openGraph={{
            type: 'website',
            url: 'https://www.polarisdata.es/servicios/pack-completo',
            title: 'Polaris | Pack Completo',
            description: 'Cumplimiento del Reglamento de Protección de Datos RGPD, 12 meses de consultoría y masterclass',
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
      < PackCompleto />
    </>
  )
}