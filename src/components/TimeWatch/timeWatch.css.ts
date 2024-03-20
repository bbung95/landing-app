import { style } from '@vanilla-extract/css';

export const timewatch = style({
    marginTop: 14,
    marginBottom: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    color: '#000',
    fontSize: 16,
});

export const timeCircle = style({
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    borderRadius: 20,
    color: '#fff',
    lineHeight: 120,
    backgroundColor: '#000',
});
