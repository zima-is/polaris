import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Polaris',
    keywords: 'protección de datos, consultoría',
    description: 'Polaris consultoría de protección de datos'
}

 
export default Meta;