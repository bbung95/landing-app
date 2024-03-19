import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['boun-studio.vercel.app'],
    },
};

export default withVanillaExtract(nextConfig);
