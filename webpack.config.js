const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
};
