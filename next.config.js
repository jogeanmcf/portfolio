/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = {
  i18n: {
    locales: ['en-US', 'pt'],
    defaultLocale: 'pt-BR',
  },
}

module.exports = nextConfig

