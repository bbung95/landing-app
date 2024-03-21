import { useEffect, useState } from 'react';

type InitialTime = number;

const useTimeWatch = (initilTime: InitialTime) => {
    const [timeLeft, setTimeLeft] = useState<number>(initilTime);
    const [time, setTime] = useState({
        day: '0',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    const updateTimer = () => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setTime({
            day: '0',
            hours: formattedHours,
            minutes: formattedMinutes,
            seconds: formattedSeconds,
        });
        setTimeLeft((prev) => prev - 1);
    };

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateTimer();
        }, 1000);

        if (timeLeft < 0) {
            clearInterval(intervalID);
        }

        return () => {
            clearInterval(intervalID);
        };
    }, [timeLeft]);

    return { time };
};

export default useTimeWatch;
