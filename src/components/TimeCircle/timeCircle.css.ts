import { style } from '@vanilla-extract/css';

export const timeCircleBox = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
});

export const timeCircle = style({
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontWeight: 500,
    lineHeight: 120,
    borderRadius: 20,
    backgroundColor: '#000',
});

export const timeName = style({
    fontSize: 14,
    fontWeight: 600,
});
