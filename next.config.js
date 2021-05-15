module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            // SVGO strips out `viewbox` attrs by default which makes it impossible to
            // scale attrs so it needs to be explicitly disabled
            svgoConfig: {
              plugins: [{ removeViewBox: false }],
            },
          },
        },
      ],
    })

    return config
  },
}
