/* eslint-disable no-console */
/* eslint-disable no-undef */
import webpack from 'webpack';
import chalk from 'chalk';
import config from '../webpack.config.babel.prod';

console.log(chalk.blue('Generating minified bundle for production...'));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors)
    return jsonStats.errors.map(err => console.log(chalk.red(err)));

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(chalk.green('Built and ready for production...'));

  return 0;
});
