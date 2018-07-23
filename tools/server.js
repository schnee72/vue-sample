import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import chalk from 'chalk';
import historyApiFallback from 'connect-history-api-fallback';
import morgan from 'morgan';

process.env.NODE_ENV = 'development'

const port = process.env.PORT || 1337;
const app = express();

const config = {
  ...webpackConfig,
  mode: process.env.NODE_ENV,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, '../src/index')
  ],
  output: {
    publicPath: '/'
  }
};

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoEmitOnErrorsPlugin());

const bundler = webpack(config);

app.use(morgan('dev'));
app.use(historyApiFallback());
app.use(require("webpack-hot-middleware")(bundler));
app.use(require('webpack-dev-middleware')(bundler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});
