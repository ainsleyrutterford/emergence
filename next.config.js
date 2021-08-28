/** @type {import('next').NextConfig} */

// https://github.com/vercel/next.js/issues/18356#issuecomment-720449235
const withOptimizedImages = require('next-optimized-images');

const prod = process.env.NODE_ENV === 'production'

module.exports = withOptimizedImages({
  assetPrefix: prod ? '/nextjs/' : '.',
  reactStrictMode: true,
    // https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "custom",
  }
});
