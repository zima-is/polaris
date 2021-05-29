import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


import styles from '../../styles/Articulo.module.css'

import { NextSeo } from 'next-seo'


let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'article'
    })
    
    return {
        paths: data.items.map(item => ({
            params: { slug: item.fields.slug}
        })),
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    let data = await client.getEntries({
        content_type: 'article',
        'fields.slug': params.slug
    })

    return {
        props: {
            post: data.items[0]
        },
        revalidate: 1
    }
}

const Post = ({ post }) => {

    //DATE PARSING to set custom date format 
    const date = post.fields.date

    const day = date.slice(8,10)
    let month = date.slice(5,7)
    switch(month) {
        case '01' :
            month = 'Enero';
            break;
        case '02':
            month = 'Febrero';
            break;
        case '03': 
            month = 'Marzo';
            break;
        case '04':
            month = 'Abril';
            break;
        case '05' :
            month = 'Mayo';
            break;
        case '06':
            month = 'Junio';
            break;
        case '07': 
            month = 'Julio';
            break;
        case '08':
            month = 'Agosto';
            break;
        case '09' :
            month = 'Septiembre';
            break;
        case '10':
            month = 'Octubre';
            break;
        case '11': 
            month = 'Noviembre';
            break;
        case '12':
            month = 'Diciembre';
            break;
    }
    const year = date.slice(0,4)

    const parsedDate = `${day} ${month}, ${year}`


    if(!post){
        return <div>404</div>
    } else {
        const SEO = {
            title: `Polaris | ${post.fields.title}`,
            description: `${post.fields.summary}`
        }

        return (
            <>
                < NextSeo {...SEO} />
                <div className={styles.container}>
                    <div className={styles.postImage}>
                        < Image className={styles.image} src={'https:' + post.fields.picture.fields.file.url} width={post.fields.picture.fields.file.details.image.width} height={post.fields.picture.fields.file.details.image.height} alt='' />
                    </div>            
                    <div className={styles.postEntry}>
                        <h1 className={styles.postTitle}>{post.fields.title}</h1>
                        <p className={styles.postDate}>Polaris / {parsedDate} </p>
                        <div className={styles.postContent}>
                            {documentToReactComponents(post.fields.content)}
                        </div>
                        <div className={styles.backButton}>
                            <Link href="/blog"><a className={styles.backLink}>Ver más entradas</a></Link>
                        </div>         
                    </div>
                </div>
            </>
        );
    }
}
 
export default Post;