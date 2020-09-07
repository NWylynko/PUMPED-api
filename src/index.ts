/* eslint-disable no-console */
import 'source-map-support/register';

import chalk from 'chalk';
import net from 'net';
import { promisify } from 'util';
import { StartingTime, PUMPED } from './startInfo';
import db from './db';
import app from './app';
import timeConversion from './utils/timeConversion';

const port = process.env.PORT || 5000;

interface expressError extends Error {
  code: string;
  errno: number;
  syscall: string;
  address: string;
  port: number
}

let server = app.listen(port, () => {
  console.log('Port: \t', chalk.green(port));
}).on('error', (error: expressError) => {
  if (error.code === 'EADDRINUSE') {
    console.log(chalk.yellow(`port (${port}) in use, using random port`));
    server = app.listen(0, () => {
      const { port: randomPort } = server.address() as net.AddressInfo;
      console.log('port: \t', chalk.green(randomPort));
    });
  } else {
    throw new Error(error.code);
  }
});

const handler = async () => {
  console.log(`--- Stopping ${PUMPED} api ---`);

  const MSSinceStart = new Date().getTime() - StartingTime.getTime();
  console.log('alive: \t', timeConversion(MSSinceStart));

  const close = [{
    name: 'DB',
    closer: db.close,
  }, {
    name: 'Port',
    closer: promisify(server.close),
  }];

  let exitCode = 0;

  const closers = close.map(async ({ name, closer }) => {
    try {
      await closer();
      console.log(`${name}: \t`, chalk.red('closed'));
    } catch (error) {
      console.error(`${name}: \t`, chalk.red(error.message));
      exitCode += 1;
    }
  });

  await Promise.all(closers);

  console.log('GoodBye 👋');

  process.exit(exitCode);
};

process.on('SIGINT', handler);
process.on('SIGTERM', handler);
process.on('SIGUSR2', handler);
