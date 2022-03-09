import * as React from 'react';
import { LatePostsCard } from '../LatePostsCard';

import styles from './latePosts.module.css';

type Props = {
    theme?: 'neonBlue' | 'turquoise'
};

export const LatePosts: React.FC<Props> = () => (
    <div className={styles.wrapper}>
        {/* <div className={styles.container}> */}
            <div className={styles.one}>
                <div style={{padding:'10px 55px'}}>
                    Последний пост
                </div>
                    <LatePostsCard/>
            </div>
            <div className={styles.two}>
                <div style={{padding:'10px 55px'}}>
                    <a href=''>Показать все</a>
                </div>
                    <LatePostsCard/>
            </div>
        {/* </div> */}
    </div>
);
