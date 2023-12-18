import { IComment } from "@/interfaces/posts"
import { FC } from "react"
import styles from './Comment.module.scss'

interface CommentProps {
    comment: IComment
}

const Comment:FC<CommentProps> = ({comment}) => {
    return(
        <div className={styles.comment}>
            <p className={styles.comment_body}>{comment.body}</p>
            <p className={styles.comment_name}>Автор: {comment.name}</p>
        </div>
    )
}

export default Comment