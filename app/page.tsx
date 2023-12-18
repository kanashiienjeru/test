import { getPosts } from '@/api/posts'
import Pagination from '@/components/Pagination/Pagination'
import PostCard from '@/components/PostCard/PostCard'
import styles from '@/styles/pages/HomePage.module.scss'
import { Metadata, NextPage } from 'next'
import { AppInitialProps } from 'next/app'
import { Props } from 'next/script'

export const metadata: Metadata = {
  title: 'HomePage',
  description: ':O',
}


const Home:NextPage<any> = async ({ searchParams }) => {
  const posts = await getPosts(+searchParams?.page)
  return (
    <div className="container">
      <h1 className={styles.title}>Список постов:</h1>
      <Pagination currentPage={+searchParams.page}/>
      <div className={styles.posts_list}>
        {posts.map(post => <PostCard post={post} key={post.id}/>)}
      </div>
    </div>
  )
}

export default Home