import { AboutMe } from '../Home/components/AboutMe';
import { LatePosts } from '../Home/components/LatePosts';
import { LateWorks } from '../Home/components/LateWorks';
import styles from './blog.module.css'

type Props = {
    title?: string;
  }

const Blog:React.FC<Props> = () => {
    return(
        <div className={styles.header}>
            <AboutMe/>
            <LatePosts/>
            <LateWorks/>
        </div>
    )
}

export default Blog;
