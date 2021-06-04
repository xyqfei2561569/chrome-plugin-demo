const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../build/webpack.dev.config')
const net = require('net')
const chalk = require('chalk')

// Project is running at http://localhost:8000/

let PORT = 8080

function start(port) {
  const server = new webpackDevServer(webpack(webpackConfig), {
    hot: true,
    // publicPath: '',
    // noInfo: true,
    historyApiFallback: true,
    // stats: 'minimal',
    stats: {
      preset: 'minimal',
      colors: true,
      chunkGroups: false,
      version: false,
      assets: false,
      entrypoints: false,
      modules: false,
    },
  })
  server.listen(port, 'localhost', function () {
    console.log(chalk.green(`Server running at http://localhost:${port}/`))
  })
}

function portIsOccupied(port) {
  let netServer = net.connect(port)

  netServer.on('connect', function () {
    portIsOccupied(++port)
  })

  netServer.on('error', function (err) {
    start(port)
  })
}

portIsOccupied(PORT)
