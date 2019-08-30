const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')

module.exports = phase => {
  const isProdBuild = phase === PHASE_PRODUCTION_BUILD
  const isDev = phase === PHASE_DEVELOPMENT_SERVER

  const nextConfig = {
    target: 'serverless',

    exportTrailingSlash: true,

    experimental: {
      publicDirectory: true
    },

    // Allow mdx and md files to be pages
    pageExtensions: ['jsx', 'js', 'mdx', 'md'],

    assetPrefix: isProdBuild || phase === 'phase-export' ? '/docs' : '',

    env: {
      VERSION: require('./package.json').version,
      API_URL: process.env.API_URL,
      IMAGE_ASSETS_URL: 'https://assets.zeit.co/image/upload/front',
      VIDEO_ASSETS_URL: 'https://assets.zeit.co/video/upload/front',
      RAW_ASSETS_URL: 'https://assets.zeit.co/raw/upload/front',
      ASSETS: isProdBuild ? '/docs/static' : '/static'
    },

    webpack(config, { isServer }) {
      if (isServer) {
        require('./scripts/generate-site-map')()
      }
      return config
    }
  }

  // This makes sure we only require build-time plugins at build time
  if (!isDev && !isProdBuild) {
    return nextConfig
  }

  const rehypePrism = require('@mapbox/rehype-prism')
  // Adds github.com/mdx-js/mdx to Next.js
  const withMDX = require('@next/mdx')({
    extension: /\.(md|mdx)?$/,
    options: {
      hastPlugins: [rehypePrism]
    }
  })

  return withMDX(nextConfig)
}
