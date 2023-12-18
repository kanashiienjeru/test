import Link from 'next/link'
import styles from './Pagination.module.scss'

const pages = [1,2,3,4,5]
const Pagination = ({ currentPage }: { currentPage: number}) => {
    return(
        <div className={styles.pagination}>
            {pages.map(page => <Link key={page} className={`${currentPage === page ? styles.active : null}`} href={`?page=${page}`}>{page}</Link>)}
        </div>
    )
}

export default Pagination