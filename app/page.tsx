import { getPosts } from '@/api/posts'
import PostCard from '@/components/PostCard/PostCard'
import styles from '@/styles/pages/HomePage.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomePage',
  description: ':O',
}


export default async function Home() {
  const posts = await getPosts()
  return (
    <div className="container">
      {/* На создание фейковой пагинации с серверным рендерингом знаний у меня не хватило, простите :( */}
      <h1 className={styles.title}>Список постов:</h1>
      <div className={styles.posts_list}>
        {posts.map(post => <PostCard post={post} key={post.id}/>)}
      </div>
    </div>
  )
}
