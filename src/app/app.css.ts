import { style } from '@vanilla-extract/css';

export const container = style({
    height: '100%',
    width: '100%',
    paddingBottom: 200,
    overflow: 'hidden',
});

export const contentsInfo = style({
    paddingTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: 600,
});

export const logo = style({
    fontSize: 20,
});

export const description = style({
    textAlign: 'center',
    '@media': {
        'screen and (max-width: 550px)': {
            width: 280,
        },
    },
});

export const contentsWarpper = style({
    width: '100%',
    height: '0',
    position: 'relative',
    margin: '0 auto',
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

export const subContentsInfo = style({
    paddingTop: 20,
    margin: '0 auto ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const subDescription = style({
    fontWeight: 700,
    textAlign: 'center',
});

export const highlight = style({
    color: '#0025FF',
});
