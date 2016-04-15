var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

module.exports = {
  entry: PATHS.app,
  esolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: PATHS.app
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: 'errors-only',
    port: process.env.PORT,
    host: process.env.HOST
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({
      title: 'My app',
      template: 'index.ejs'
    })
  ]
};
