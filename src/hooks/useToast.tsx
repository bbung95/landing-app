import { useEffect, useState } from 'react';

type ToastDelay = number;

const useToast = (delay: ToastDelay) => {
    const [isShow, setIsShow] = useState<boolean>(false);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setIsShow(true);
        }, delay);

        return () => clearTimeout(timeoutID);
    }, [delay]);

    return { isShow };
};

export default useToast;
