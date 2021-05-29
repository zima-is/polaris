import Link from'next/link'

import styles from '../styles/PostCard.module.css'

const PostCard = ({ date, title, summary, slug }) => {

    //DATE PARSING to set custom date format 
    const day = date.slice(8,10)
    const month = date.slice(5,7)
    const year = date.slice(0,4)

    const parsedDate = `${day}.${month}`

    return (
            <div className={styles.postGrid}>
                <div className={styles.date}>
                    <p>{parsedDate}</p>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.summary}>{summary}</p>
                <div className={styles.link}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            Leer más
                        </a>   
                    </Link>
                </div>
                <div className={styles.deco}></div>
            </div>
    );
}

export default PostCard;