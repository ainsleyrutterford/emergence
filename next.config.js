/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: prod ? 'https://cdn.statically.io/gh/ainsleyrutterford/nextjs/gh-pages/' : '',
  distDir: 'build',
  reactStrictMode: true,
}
