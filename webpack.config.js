const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: "./dist"
  },
  devtool: 'eval-source-map',
  // The plugins key below this line is also new!
  plugins: [
    new ESLintPlugin(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new HtmlWebpackPlugin({
      title: 'Calculator',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};