/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "dheunoflmddynuaxiksw.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.juicer.io",
      },
    ],
  },
};

export default nextConfig;
