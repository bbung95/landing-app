'use client';
import { useMemo } from 'react';

import useTimeWatch from '@/hooks/useTimeWatch';
import { getTimeLeft } from '@/utils/dateUtil';

import * as style from './timeWatch.css';

const TimeWatch = () => {
    const { time } = useTimeWatch(useMemo(() => getTimeLeft(), []));

    return (
        <div className={style.timewatch}>
            <span className={style.timeCircle}>{time.day}</span> :
            <span className={style.timeCircle}>{time.hours}</span> :
            <span className={style.timeCircle}>{time.minutes}</span> :
            <span className={style.timeCircle}>{time.seconds}</span>
        </div>
    );
};

export default TimeWatch;
