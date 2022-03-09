import * as React from 'react';
import { BasicButton } from '../../../../ui/BasicButton';
import photo from '../../../../media/photo.jpg'
import styles from './aboutMe.module.css';

type Props = {
    theme?: 'neonBlue' | 'turquoise'
};

export const AboutMe: React.FC<Props> = () => (
    <div className={(styles.wrapper)}>
        <div className={styles.greet}>
            <h1>Hi, I am John,
                <br/>
                Creative Technologist
            </h1>
            <div className={styles.text}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </div>
            <div className={styles.button}>
                <BasicButton
                    handleClick={() => ''}
                    color="red"
                >
                    Скачать блог
                </BasicButton>
            </div>
        </div>
        <img src={photo} className={styles.picture} />
    </div>
);
