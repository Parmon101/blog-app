import * as React from 'react';
import { LateWorksCard } from '../LateWorksCard';

import styles from './lateWorks.module.css';

type Props = {
    theme?: 'neonBlue' | 'turquoise'
};

export const LateWorks: React.FC<Props> = () => (
    <div className={(styles.wrapper)}>
        <div>
            последние работы
        </div>
        <LateWorksCard year={2020} text='Dashboard' theme='Designing Dashboards'/>
        <LateWorksCard year={2021} text='Learn hook' theme='Text for 2'/>
        <LateWorksCard year={2022} text='Route v6' theme='abracadabra'/>
    </div>
);
