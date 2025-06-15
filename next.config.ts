import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wp.mentorofcure.com',
                // port: '', // Optional, if your domain uses a specific port
                // pathname: '/images/**', // Optional, if images are under a specific path
            },
            {
                protocol: 'https',
                hostname: 'wp.mentorofcure.com',
            },
        ],
    },
};

export default nextConfig;
