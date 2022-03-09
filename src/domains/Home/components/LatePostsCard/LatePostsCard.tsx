import * as React from 'react';

import styles from './latePostsCard.module.css';

type Props = {
    theme?: 'neonBlue' | 'turquoise'
};

export const LatePostsCard: React.FC<Props> = () => (
    <div className={styles.wrapper}>
        <div className={styles.header}>
        Making a design system from scratch
        </div>
        <div className={styles.split}>
            <div className={styles.text}>12 Feb 2020</div>
            <div className={styles.text}>Design, Pattern</div>
        </div>
        <div className={styles.footer}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </div>
    </div>
);
