const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  entry:  './src/index.js',
  // persistent caching to speed up dev builds
  cache: { type: 'memory' },
  // source maps for error logging
  devtool: 'inline-source-map',
  output: {
    // cache assets: https://webpack.js.org/guides/caching/
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    // Codesplit boilerplate into `runtime` chunk to speed up caching  https://webpack.js.org/configuration/optimization/#optimizationruntimechunk
    runtimeChunk: 'single',
    // cache bust when specific file changes only: https://webpack.js.org/guides/caching/
    moduleIds: 'deterministic',
    // code splitting node_modules into `vendor` to speed up caching: https://webpack.js.org/plugins/split-chunks-plugin/
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Richard Jarram",
      template: "src/index.html"
    }),
    new WebpackManifestPlugin()
  ],
  module: {
    rules: [
      {
        // stylesheets
        // style-loader: https://webpack.js.org/loaders/style-loader/
        // css-loader: https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader']
      },
      {
        // images
        // https://webpack.js.org/guides/asset-modules/
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource'
      },
      {
        // fonts
        // https://webpack.js.org/guides/asset-modules/
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: path.resolve(__dirname, 'src'),
        type: 'asset/resource'
      }
    ]
  }
};
