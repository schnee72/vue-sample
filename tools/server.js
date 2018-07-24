/* eslint-disable no-console */
/* eslint-disable no-undef */
import express from 'express';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.babel.dev';
import chalk from 'chalk';
import historyApiFallback from 'connect-history-api-fallback';
import morgan from 'morgan';

const port = process.env.PORT || 1337;
const app = express();

const bundler = webpack(config);

app.use(morgan('dev'));
app.use(historyApiFallback());
app.use(require("webpack-hot-middleware")(bundler));
app.use(require('webpack-dev-middleware')(bundler, {
  publicPath: config.output.publicPath,
  noInfo: true
}));

app.listen(port, err => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open('http://localhost:' + port);
    console.log(chalk.yellow(`Listening on port ${port}`));
  }
});
