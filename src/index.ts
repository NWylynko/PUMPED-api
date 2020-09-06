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

const handler = async () => {
  console.log(`--- Stopping ${PUMPED} api ---`);

  const MSSinceStart = new Date().getTime() - StartingTime.getTime();
  console.log('alive: \t', timeConversion(MSSinceStart));

  await db.close();
  console.log('DB: \t', chalk.red('closed'));

  server.close();
  console.log('Port: \t', chalk.red('closed'));

  process.exit(0);
};

process.on('SIGINT', handler);
process.on('SIGTERM', handler);
process.on('SIGUSR2', handler);
