import type { Metadata } from 'next';

import { META_DATA } from '@/constants/metadata';

import Ga from './Ga';

export const metadata: Metadata = {
    title: META_DATA.title,
    description: META_DATA.description,
    robots: META_DATA.url,
    openGraph: {
        type: 'website',
        locale: 'ko_KR',
        url: META_DATA.url,
        title: META_DATA.title,
        siteName: META_DATA.title,
        images: [
            {
                url: META_DATA.image,
                width: 285,
                height: 167,
                alt: META_DATA.title,
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
