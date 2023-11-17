/** @type {import('next').NextConfig} */
const nextConfig = {
    // for configurate in ott
    images: {
        remotePatterns: [
            {
                hostname: "fakestoreapi.com",
                hostname: "dummyimage.com"
            }
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
