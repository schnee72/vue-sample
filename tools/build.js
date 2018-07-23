/* eslint-disable no-console */
/* eslint-disable no-undef */
import webpack from 'webpack';
import path from 'path';
import webpackConfig from '../webpack.config.babel';
import chalk from 'chalk';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

process.env.NODE_ENV = 'production';

const config = {
  ...webpackConfig,
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[chunkhash].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  }
};

config.plugins.push(new MiniCssExtractPlugin({
  filename: '[name].[chunkhash].css',
  chunkFilename: '[id].[chunkhash].css'
}));

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(err => console.log(chalk.red(err)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(chalk.green('Built and ready for production...'));

  return 0;
});
