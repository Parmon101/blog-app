import * as React from 'react';
import { Spot } from '../../../../ui/Spot';
import photo from '../../../../media/photo.jpg'


import styles from './lateWorksCard.module.css';

type Props = {
    year: number;
    text: string;
    theme: string;
};

export const LateWorksCard: React.FC<Props> = ({year, text, theme}) => (
    <div className={styles.wrapper}>
        <img src={photo} className={styles.picture}></img>
        <div className={styles.worksInfo}>
            <div className={styles.header}>{theme}</div>
            <div className={styles.split}>
                <Spot year={year}/>
                <div className={styles.info}>{text}</div>
            </div>
            <div className={styles.text}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
    </div>
);
