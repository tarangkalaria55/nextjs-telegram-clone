import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "standalone",
	reactStrictMode: true,
	images: {
		remotePatterns: [{ protocol: "https", hostname: "img.clerk.com" }],
	},
};

export default nextConfig;
