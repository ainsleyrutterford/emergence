/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: prod ? '/nextjs/' : '',
  reactStrictMode: true,
  // https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "imgix",
    path: "https://noop/",
  }
}
