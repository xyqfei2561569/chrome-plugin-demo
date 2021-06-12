const webpackBaseConfig = require('./webpack.base.config.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new OptimizeCssAssetsPlugin()],
})
