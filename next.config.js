/** @type {import('next').NextConfig} */

// https://github.com/vercel/next.js/issues/18356#issuecomment-720449235
const withOptimizedImages = require('next-optimized-images');

const prod = process.env.NODE_ENV === 'production'
const repoName = process.env.NEXT_PUBLIC_REPO_NAME;

module.exports = withOptimizedImages({
  assetPrefix: prod ? `/${repoName}/` : '.',
  reactStrictMode: true,
    // https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "custom",
  }
});
