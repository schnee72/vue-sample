import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

// const config = {
//   ...webpackConfig,
//   mode: process.env.NODE_ENV
// };

//config.plugins.push(new WebpackMd5Hash());

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(webpackConfig).run((err, stats) => {
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

  console.log(chalk.green(stats));

  console.log(chalk.green('Built and ready for production...'));

  return 0;
});
