import { IPost } from "@/interfaces/posts"
import { Button, Card } from "@mui/material"
import Link from "next/link"
import { FC } from "react"
import styles from './PostCard.module.scss'

interface PostCardProps {
    post: IPost
}


const PostCard: FC<PostCardProps> = ({ post }) => {
    return (
        <Card className={styles.card}>
            <p>{post.title}</p>
            <Link href={`/post/${post.id}`}><Button variant='contained' size='small' sx={{ mt: 2 }}>Перейти к посту</Button></Link>
        </Card>
    )
}

export default PostCard