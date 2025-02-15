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
            }
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
    //     locales: ["id", "en"],
    //     defaultLocale: "id",
    //     localeDetection: true
    // },
}

module.exports = nextConfig
