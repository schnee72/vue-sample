/* eslint-disable no-undef */
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpackConfig from './webpack.config.babel';

process.env.NODE_ENV = 'development';

const config = {
  ...webpackConfig,
  mode: process.env.NODE_ENV,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  output: {
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map'
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[id].css'
}));

export default config;
