/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  pageExtensions: ["js", "jsx"],
  images: {
    domains: ["i.postimg.cc"], // tashqi ruxsat etilgan rasm domenlari shu yerga yoziladi
  },
};

export default nextConfig;
