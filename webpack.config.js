/* global module */

const path = require('path') // eslint-disable-line
const webpackBase = require('@crystal-ball/webpack-base')

/*
 * 📦 Single webpack configuration file handles different environment build targets
 * by using webpack-base to merge configurations common to all environments with
 * configurations unique to targeted environment.
 *
 * 📝 https://github.com/crystal-ball/webpack-base
 */
module.exports = () => {
  /*
   * Generate the base configuration object by passing the environment flags and
   * optional options object available for customizing the standard project
   * conventions.
   */
  const { configs } = webpackBase({
    envVars: { PACKAGE_VERSION: '0.0.0' },
  })

  /*
   * Handle non-standard, advanced project customization by directly updating
   * the generated base configs.
   */

  // Add a loader rule for Componentry source
  configs.resolve.alias.componentry = path.resolve('node_modules/componentry/src')
  configs.module.rules.push({
    test: /\.js$/,
    include: path.resolve('node_modules/componentry/src'),
    use: [{ loader: 'babel-loader' }],
  })

  return configs
}
