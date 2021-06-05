const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// Css minification: https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  // load terser plugin for treeshaking: https://webpack.js.org/plugins/terser-webpack-plugin/
  mode: 'production',

  output: {
    // cache assets: https://webpack.js.org/guides/caching/
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true
  },

  // https://github.com/webpack-contrib/mini-css-extract-plugin#getting-started
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },

  optimization: {
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
})
