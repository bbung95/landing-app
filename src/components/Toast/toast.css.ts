import { style } from '@vanilla-extract/css';

export const toast = style({
    position: 'fixed',
    bottom: 20,
    left: '50%',
    '@media': {
        'screen and (max-width: 768px)': {
            bottom: 10,
        },
    },
});
