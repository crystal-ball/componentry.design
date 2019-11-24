/* global module */

const path = require('path') // eslint-disable-line
const webpackBase = require('@crystal-ball/webpack-base')

const { resolve } = path

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

  // Configure project so that componentry can be used from Github or as a
  // linked package -> either way the src files won't be transpiled and need to
  // be aliased to the src/index.js and run through a Babel loader. React also
  // has to be aliased or two copies will be bundled (one from this directory and
  // one from symlinked package directory)
  // configs.resolve.alias.react = resolve('node_modules/react')
  // configs.resolve.alias.componentry = resolve('node_modules/componentry/src')
  // configs.module.rules.push({
  //   test: /\.js$/,
  //   include: [resolve('../componentry/src')],
  //   use: [{ loader: 'babel-loader' }],
  // })

  // During development use the RHL patched version of react-dom
  if (process.env.NODE_ENV === 'development') {
    configs.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  return configs
}
