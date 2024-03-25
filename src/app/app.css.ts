import { style } from '@vanilla-extract/css';

export const container = style({
    height: '100%',
    width: '100%',
    paddingBottom: 200,
    overflow: 'hidden',
});

export const contentsInfo = style({
    paddingTop: 60,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#000',
});

export const imageWarpper = style({
    width: 180,
    margin: '24px 0',
    '@media': {
        'screen and (max-width: 767px)': {
            width: 140,
        },
    },
});

export const title = style({
    fontSize: 36,
    margin: '22px 0 48px',
    width: 400,
    fontWeight: 600,
    textAlign: 'center',
    '@media': {
        'screen and (max-width: 767px)': {
            fontSize: 28,
            width: 320,
        },
    },
});

export const contentsWarpper = style({
    width: '100%',
    height: '0',
    position: 'relative',
    margin: '0 auto',
    '@media': {
        'screen and (min-width: 768px)': {
            width: 768,
            height: 430,
        },
        'screen and (max-width: 767px)': {
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
    fontSize: 18,
    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: 22,
        },
    },
});

export const description = style({
    fontSize: 18,
    fontWeight: 650,
    textAlign: 'center',
    lineHeight: '140%',

    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: 22,
        },
    },
});

export const subDescription = style({
    fontSize: 16,
    fontWeight: 650,
    textAlign: 'center',
    lineHeight: '140%',

    '@media': {
        'screen and (min-width: 768px)': {
            fontSize: 20,
        },
    },
});

export const highlight = style({
    color: '#0025FF',
    fontWeight: 700,
});
