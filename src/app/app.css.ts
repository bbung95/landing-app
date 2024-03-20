import { style } from '@vanilla-extract/css';

export const container = style({
    height: '100%',
    width: '100%',
    position: 'absolute',
});

export const contentsWarpper = style({
    width: '100%',
    height: '0',
    position: 'relative',

    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    '@media': {
        'screen and (min-width: 1281px)': {
            width: 1280,
            height: 720,
        },
        'screen and (max-width: 1280px)': {
            paddingTop: '56%',
        },
    },
});

export const contents = style({
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
});
