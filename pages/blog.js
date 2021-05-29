import Link from 'next/link'

import styles from '../styles/ArticulosPage.module.css'
import PostCard from '../components/PostCard.js'

import { NextSeo } from 'next-seo'

let client = require('contentful').createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
    let data = await client.getEntries({
        content_type: 'article',
        order: '-fields.date'
    })

    return {
        props: {
            posts: data.items
        },
        revalidate: 1
    }
}

const ArticulosPage = ({ posts }) => {

    const SEO = {
        title: 'Polaris | Blog',
        description: 'Con el blog de Polaris podrás estar informado de estrategias de protección de datos y privaciad relevantes para tu empresa'
    }

    return (
        <>
            < NextSeo {...SEO} />
            <div className={styles.postsContainer}>
                <ul className={styles.postsWrapper}>
                    {
                        posts.map((post) => (
                            <li key={post.sys.id} className={styles.postCard}>
                                < PostCard date={post.fields.date} title={post.fields.title} summary={post.fields.summary} slug={post.fields.slug} />            
                            </li>
                        ))        
                    }
                </ul>
            </div>
        </>
    );
}
 
export default ArticulosPage;

