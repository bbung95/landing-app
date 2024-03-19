import { style } from '@vanilla-extract/css';

export const container = style({
    height: '100%',
    width: '100%',
    position: 'absolute',
});

export const contentsWarpper = style({
    maxWidth: 1280,
    maxHeight: 720,
    width: '100%',
    height: '0',
    paddingTop: '56%',
    position: 'relative',

    '@media': {
        'screen and (min-width: 1281px)': {
            margin: '200px auto 0',
        },
        'screen and (max-width: 1280px)': {
            top: '50%',
            transform: 'translateY(-50%)',
        },
    },
});

export const contents = style({
    maxWidth: 1280,
    maxHeight: 720,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
});
