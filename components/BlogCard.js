import Link from "next/link"
import styles from "../styles/BlogCard.module.css"
import moment from "moment";

export default function BlogPost({ title, author, coverPhoto, datePublished, slug }) {
    return (

        <div className={styles.card}>
            <div>
                <div className={styles.author}>
                    <img src={author.avatar.url}></img>
                    <h3>{author.name}</h3>
                </div>
                <div className={styles.text}>
                    <Link href={'/posts/' + slug}>
                        <h2>{title}</h2>
                    </Link>
                    <div className={styles.details}>
                        <div className={styles.date}>
                            <h3>{moment(datePublished).format("MMM d, YYYY")}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Link href={'/posts/' + slug}>
                <div className={styles.imgContainer}>
                    <img src={coverPhoto.url} alt="" />
                </div>
            </Link>
        </div>


    )
}