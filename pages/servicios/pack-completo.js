import PackCompleto from '../../components/PackCompleto.js'

import { NextSeo } from 'next-seo'

export default function PackCompletoPage() {

  const SEO = {
    title: 'Polaris | Pack Completo',
    description: 'El servicio Pack Completo de Polaris ayuda a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD'
  }

  return (
    <>
      < NextSeo {...SEO} />
      < PackCompleto />
    </>
  )
}