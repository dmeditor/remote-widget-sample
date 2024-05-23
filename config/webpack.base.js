const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const path = require('path');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: 'http://localhost:3002/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './main': './src/widgets/SampleWidget/index',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        dmeditor: {
          singleton: true,
          requiredVersion: deps.dmeditor,
        },
      },
    }),
  ],
};

module.exports = webpackConfig;
