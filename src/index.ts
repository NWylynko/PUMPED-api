/* eslint-disable no-console */
import 'source-map-support/register';

import chalk from 'chalk';
import net from 'net';
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

const stopExpressApi: () => Promise<number> = () => new Promise((resolve) => {
  server.close((error) => {
    if (error) {
      console.error('Port: \t', chalk.red(error.message));
    } else {
      console.log('Port: \t', chalk.red('closed'));
    }
    resolve(error ? 1 : 0);
  });
});

const exitHandler = async () => {
  console.log(`--- Stopping ${PUMPED} api ---`);

  const MSSinceStart = new Date().getTime() - StartingTime.getTime();
  console.log('alive: \t', timeConversion(MSSinceStart));

  const exitCodes = await Promise.all([db.close(), stopExpressApi()]);

  const exitCode = exitCodes.reduce((sum, value) => value + sum);

  console.log('GoodBye 👋');

  process.exit(exitCode);
};

process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);
process.on('SIGUSR2', exitHandler);
