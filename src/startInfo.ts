/* eslint-disable no-console */

import chalk from 'chalk';

export const StartingTime = new Date();

export const PUMPED = chalk.red('P')
+ chalk.blue('U')
+ chalk.red('M')
+ chalk.blue('P')
+ chalk.red('E')
+ chalk.blue('D');

console.log(`--- Starting ${PUMPED} api ---`);
console.log('PID: \t', process.pid);
console.log('Dir: \t', __dirname);
console.log('Time: \t', StartingTime.toDateString());
