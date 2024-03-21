'use client';
import * as style from './timeCircle.css';

interface Props {
    time: string;
    name: string;
}

const TimeCircle = (props: Props) => {
    const { time, name } = props;

    return (
        <div className={style.timeCircleBox}>
            <span className={style.timeCircle}>{time}</span>
            <span className={style.timeName}>{name}</span>
        </div>
    );
};

export default TimeCircle;
