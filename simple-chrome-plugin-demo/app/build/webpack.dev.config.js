const webpackBaseConfig = require('./webpack.base.config.js')
const { merge } = require('webpack-merge')
const webpack = require('webpack')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 8000,
    // noInfo: true,
    // open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
