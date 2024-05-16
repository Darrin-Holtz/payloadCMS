/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
            },
            {
                protocol: "https",
                hostname: "payloadtestcms.payloadcms.app"
            }
        ]
    }
};

export default nextConfig;
