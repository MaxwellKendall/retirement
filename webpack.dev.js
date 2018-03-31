/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const backEndDev = 'http://localhost:9001';

const PATHS = {
  source: path.join(__dirname, 'src'),
  jsout: path.join(__dirname, 'dist'),
  htmlout: path.join(__dirname),
};

const styleOpts = {
  configFile: path.join(__dirname, '.stylelintrc'),
  context: path.join(__dirname, 'scss'),
  files: '**/*.scss',
};

module.exports = {
  entry: {
    App: [
      'react-hot-loader/patch',
      `${PATHS.source}/index.js`,
    ],
    vendor: [
      'react',
    ],
  },
  output: {
    path: PATHS.jsout,
    publicPath: '/',
    filename: 'App.min.js',
  },
  devtool: 'eval',
  module: {
    rules: [
      { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true }},
            { loader: 'postcss-loader', options: { sourceMap: true }},
            { loader: 'sass-loader', options: { sourceMap: true }},
          ],
        }),
      },
      { test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[hash].[ext]',
          },
        },
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: 'file-loader?name=fonts/[name].[ext]' },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  plugins: [
    new ExtractTextPlugin('global.css'),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['vendor.js'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.jsout}/index.html`,
      template: './index.html',
      title: 'Retirement App',
    }),
    new StyleLintPlugin(styleOpts),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    port: 9000,
    contentBase: './dist',
    historyApiFallback: true,
    proxy: {
      '**': `${backEndDev}`,
    },
    hot: true,
    open: true,
  },
};
