const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve('./src');
const dist = path.resolve('./dist');

module.exports = {
  entry: {
    'js/app': [
      'webpack-dev-server/client?http://localhost:8088',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      path.join(src, '/js/app.jsx')
    ]
  },
  output: {
    path: dist,
    publicPath: 'http://localhost:8088/',
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.join(src, '/js'),
      path.join(src, '/css'),
      'node_modules'
    ],
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|pcss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'postcss-loader'
            }
          ]
        })
      },
      {
        test: /\.(png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new ExtractTextPlugin('css/app.min.css'),
    new HtmlWebpackPlugin({
      template: path.join(src, '/html/index.html')
    })
  ]
};
