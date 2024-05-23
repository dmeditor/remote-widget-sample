const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.base');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {};

module.exports = merge(sharedWebpackConfig, webpackConfig);
