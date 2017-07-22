const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const src = path.resolve('./src');
const lib = path.resolve('./lib');

module.exports = {
  entry: {
    app: [
      path.join(src, '/js/app.jsx')
    ]
  },
  output: {
    path: lib,
    filename: '[name].js',
    libraryTarget: 'umd'
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
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new ExtractTextPlugin('[name].min.css'),
    new CopyWebpackPlugin([
      {
        from: path.join(src, '/img/'),
        to: path.join(lib, '/img/')
      }
    ])
  ]
};
