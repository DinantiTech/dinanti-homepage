/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: true,
    },
    compress: true,
    logging: {
        fetches: {
            fullUrl: true
        }
    },

    // i18n: {
    //     locales: ["id", "en"],
    //     defaultLocale: "id",
    //     localeDetection: true
    // },
}

module.exports = nextConfig
