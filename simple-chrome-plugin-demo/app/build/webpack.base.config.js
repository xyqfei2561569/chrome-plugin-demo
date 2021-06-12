const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'
const PROJECT_PATH = path.resolve(__dirname, `../`)

module.exports = {
  entry: {
    index: path.resolve(PROJECT_PATH, './index'),
  },
  output: {
    path: path.resolve(PROJECT_PATH, './dist'),
    filename: `[name]${NODE_ENV === 'production' ? '_[contenthash:6]' : ''}.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx'],
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['css-loader', 'less-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      title: 'lhf-test',
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
    }),
  ],
}
