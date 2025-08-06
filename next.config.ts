/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp', 'image/png'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },

    // Enable static exports for Netlify
    output: 'export',

    // Disable image optimization for static export
    images: {
        unoptimized: true,
    },

    // Headers for video caching
    async headers() {
        return [
            {
                source: '/videos/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
            {
                source: '/_next/static/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000, immutable',
                    },
                ],
            },
        ]
    },

    // Trailing slashes for Netlify compatibility
    trailingSlash: true,
}

module.exports = nextConfig