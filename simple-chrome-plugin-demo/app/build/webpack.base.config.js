const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'
const PROJECT_PATH = path.resolve(__dirname, `../`)

module.exports = {
  mode: NODE_ENV,
  entry: {
    index: path.resolve(PROJECT_PATH, './index'),
  },
  output: {
    path: path.resolve(PROJECT_PATH, './dist'),
    filename: `[name]${NODE_ENV === 'production' ? '_[contenthash:6]' : ''}.js`,
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.tsx'],
    alias: {
      '@': path.join(__dirname, './src'),
      // crypto: false,
    },
    // fallback: {
    //   // util: false,
    //   // assert: false,
    // },
  },
  // externals: [nodeExternals()],
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'lhf-test',
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
    }),
  ],
}
