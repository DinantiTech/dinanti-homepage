/** @type {import('next').NextConfig} */
const nextConfig = {
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
