import type { Metadata } from 'next';

import Ga from './Ga';

export const metadata: Metadata = {
    title: 'BOUN studio',
    description: 'BOUN studio',
    robots: 'https://boun-studio.vercel.app/',
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: 'https://boun-studio.vercel.app/',
        title: 'BOUN studio',
        siteName: 'BOUN studio',
        images: [
            {
                url: '/share.png',
                width: 285,
                height: 167,
                alt: 'BOUN studio',
            },
        ],
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='ko'>
            <head>
                <link
                    rel='stylesheet'
                    as='style'
                    href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css'
                />

                <Ga />
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
