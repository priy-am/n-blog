import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/content/:path*",
                destination: "/_next/static/content/:path*",
            },
        ];
    },
    experimental: {
        outputFileTracingRoot: path.join(process.cwd(), "../../"),
    },
};

export default nextConfig;
