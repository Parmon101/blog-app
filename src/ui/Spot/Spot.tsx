import * as React from 'react';

import styles from './spot.module.css';

let cn = require('classnames');

type Props = {
    year: number,
}

export const Spot: React.FC<Props> = ({
    year,
}) => (
    <div
        className={cn(styles.containter,
            {[styles.blue]: Boolean(year)},
        )}
    >
        {year}
    </div>
);
