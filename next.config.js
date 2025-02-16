const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        webVitalsAttribution: ["CLS", "LCP"],
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.ts',
                },
            },
            resolveExtensions: [
                '.mdx',
                '.tsx',
                '.ts',
                '.jsx',
                '.js',
                '.mjs',
                '.json',
            ],
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com"
            },
        ]
    },
    compiler: {
        // removeConsole: true,
    },
    compress: true,
    // logging: {
    //     fetches: {
    //         fullUrl: true,
    //     },
    // },

    // i18n: {
    //     locales: ['default', 'en', 'de', 'fr'],
    //     defaultLocale: 'default',
    //     localeDetection: false,
    // },
    // trailingSlash: true,
}

module.exports = withNextIntl(nextConfig);
