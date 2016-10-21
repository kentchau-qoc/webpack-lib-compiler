/*global __dirname: true*/

import webpack from 'webpack';
import path from 'path';
import {argv} from 'yargs';
import CleanWebpackPlugin from 'clean-webpack-plugin';

/**
 * TODO - need to make this read from the command line or some config file
 */
const LIBRARY_NAME = 'QOC';
const PATHS = {
  DIST_FOLDER_PATH: 'dist',
  ENTRY_FILEPATH: 'index.js',
  SRC_FOLDER_PATH: 'src',
};

const ENV_MODE = argv.mode;
const PROD_EXTENSION = '.min.js';
const DEV_EXTENSION = '.js';
const LIBRARY_FILENAME = LIBRARY_NAME +
  (ENV_MODE === 'build' ? PROD_EXTENSION : DEV_EXTENSION);

const UglifyWebpackPlugin = webpack.optimize.UglifyJsPlugin;
const plugins = [];

/**
 * Clean the distribution folder
 */
plugins.push(
  new CleanWebpackPlugin(
    [PATHS.DIST_FOLDER_PATH],
    {
      root: __dirname,
      verbose: true,
      dry: false,
    }
  )
);

/**
 * Production mode
 */
if (ENV_MODE === 'build') {

  /**
   * Minify source code
   */
  plugins.push(
    new UglifyWebpackPlugin({
      minimize: true
    })
  );
}

/**
 * WebPack configuration
 */
const config = {

  /**
   * TODO - need to define this as an argument
   */
  entry: __dirname + '/' + PATHS.SRC_FOLDER_PATH + '/' + PATHS.ENTRY_FILEPATH,
  devtool: 'source-map',
  output: {
    path: PATHS.DIST_FOLDER_PATH,
    filename: LIBRARY_FILENAME,
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins,
};

export default config;
