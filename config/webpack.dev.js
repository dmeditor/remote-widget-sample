const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.base');
const CopyPlugin = require('copy-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.ts'),
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    port: 3002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'dmeditor.json', to: path.resolve(__dirname, '../dist') }],
    }),
  ],
};

module.exports = merge(sharedWebpackConfig, webpackConfig);
