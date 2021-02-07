'use strict'

const { babelBase } = require('@crystal-ball/babel-base')

module.exports = function babelConfigs(api) {
  api.cache(() => process.env.NODE_ENV)

  return babelBase({ env: process.env.NODE_ENV, target: 'react' })
}
