import PackBasico from '../../components/PackBasico.js'

import { NextSeo } from 'next-seo'

export default function PackBasicoPage() {

  const SEO = {
    title: 'Polaris | Pack Básico',
    description: 'El servicio Pack Básico de Polaris ayuda a tu empresa a cumplir con el Reglamento de Protección de Datos RGPD'
  }

  return (
    <>
      < NextSeo {...SEO} />
      < PackBasico />
    </>
  )
}