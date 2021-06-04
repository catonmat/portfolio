const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // stylesheets
        // style-loader: https://webpack.js.org/loaders/style-loader/
        // css-loader: https://webpack.js.org/loaders/css-loader/
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        // images
        // https://webpack.js.org/guides/asset-modules/
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        // fonts
        // https://webpack.js.org/guides/asset-modules/
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
};
