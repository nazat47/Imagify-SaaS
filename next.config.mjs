/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // port: "8014",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
