import '@/styles/reset.css';
import '@/styles/global.css';

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
        description: META_DATA.description,
        images: [
            {
                url: META_DATA.image,
                alt: META_DATA.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: META_DATA.title,
        description: META_DATA.description,
        images: [
            {
                url: META_DATA.image,
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
                <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
                <meta name='theme-color' content='#ffffff' />
                <Ga />
            </head>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
