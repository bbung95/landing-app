'use client';
import { motion } from 'framer-motion';

import useToast from '@/hooks/useToast';

import * as style from './toast.css';

interface Props {
    delay?: number;
    children: React.ReactNode;
}

const Toast = (props: Props) => {
    const { delay = 5000, children } = props;
    const { isShow } = useToast(delay);

    return (
        <>
            {isShow && (
                <motion.div
                    initial={{ opacity: 0, x: '-50%' }}
                    animate={{
                        opacity: 1,
                        y: -40,
                        x: '-50%',
                        transition: {
                            duration: 1,
                        },
                    }}
                    exit={{ opacity: 0 }}
                    className={style.toast}
                >
                    {children}
                </motion.div>
            )}
        </>
    );
};

export default Toast;
