import { AboutMe } from './components/AboutMe';
import { LatePosts } from './components/LatePosts';
import { LateWorks } from './components/LateWorks';
import styles from './home.module.css'

type Props = {
    title?: string;
  }

const Home:React.FC<Props> = () => {
    return(
        <div className={styles.header}>
            <AboutMe/>
            <LatePosts/>
            <LateWorks/>
        </div>
    )
}

export default Home;
