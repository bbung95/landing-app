export const getCurrentDate = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentSecond = now.getSeconds();

    return {
        hour: currentHour,
        minute: currentMinute,
        second: currentSecond,
    };
};

export const getTimeLeft = () => {
    const { hour, minute, second } = getCurrentDate();

    const remainingHours = 24;
    const remainingMinutes = hour === 23 ? 0 : 0;
    const remainingSeconds = 0;

    const timeleft =
        (remainingHours - hour) * 3600 +
        (remainingMinutes - minute) * 60 +
        (remainingSeconds - second);

    return timeleft;
};
