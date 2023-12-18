import { getCommentsByPostId, getPostById } from "@/api/posts";
import { getUserById } from "@/api/users";
import Comment from "@/components/Comment/Comment";
import styles from '@/styles/pages/PostPage.module.scss'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Post',
    description: ':O',
  }

export default async function PostPage(props: any) {
    const post = await getPostById(props.params.id)
    const author = await getUserById(post.userId)
    const comments = await getCommentsByPostId(post.id)
    return (
        <div className="container">
            <div className={styles.post}>
                <p className={styles.post_title}>{post.title}</p>
                <p className={styles.post_body}>{post.body}</p>
                <p className={styles.author}>{author.name}</p>
            </div>
            <div className={styles.comments_list}>
                <p>Комментарии {`(${comments.length}):`}</p>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    )
}