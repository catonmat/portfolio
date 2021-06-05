const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  output: {
    // cache assets: https://webpack.js.org/guides/caching/
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  // persistent in-memory caching to speed up dev builds
  cache: { type: 'memory' }
});
