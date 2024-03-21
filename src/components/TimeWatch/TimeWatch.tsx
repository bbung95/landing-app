'use client';
import { useMemo } from 'react';

import useTimeWatch from '@/hooks/useTimeWatch';
import { getTimeLeft } from '@/utils/dateUtil';

import TimeCircle from '../TimeCircle';
import * as style from './timeWatch.css';

const TimeWatch = () => {
    const { time } = useTimeWatch(useMemo(() => getTimeLeft(), []));

    return (
        <div className={style.timewatch}>
            <TimeCircle time={time.day} name='D' />
            <span className={style.colon}>:</span>
            <TimeCircle time={time.hours} name='H' />
            <span className={style.colon}>:</span>
            <TimeCircle time={time.minutes} name='M' />
            <span className={style.colon}>:</span>
            <TimeCircle time={time.seconds} name='S' />
        </div>
    );
};

export default TimeWatch;
