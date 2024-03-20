import { style } from '@vanilla-extract/css';

export const button = style({
    cursor: 'pointer',
    height: 60,
    width: 230,
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    backgroundColor: '#0025FF',
    border: 'none',
    borderRadius: 30,
    transition: 'all 0.1s',

    '@media': {
        'screen and (max-width: 768px)': {
            height: 50,
            width: 160,
            fontSize: 16,
            fontWeight: 500,
        },
    },
});
