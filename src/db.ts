/* eslint-disable no-unused-vars */
import chalk from 'chalk';
import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import { promises as fs } from 'fs';
import loadSQL from './utils/loadSQL';

// eslint-disable-next-line import/no-mutable-exports
let db: sqlite3.Database = new sqlite3.Database('./main.db', (err) => {
  if (err) throw new Error(err.message);
  // eslint-disable-next-line no-console
  console.log('DB: \t', chalk.green('open'));
});

export const openDB = (file: string) => new Promise((resolve, reject) => {
  db = new sqlite3.Database(file, (err) => {
    if (err) reject(err);

    // eslint-disable-next-line no-console
    console.log('DB: \t', chalk.green('open'));
    resolve();
  });
});

interface DBAsync {
  run: (sql: string) => Promise<sqlite3.RunResult>;
  close: () => Promise<number>;
}

const dbAsync: DBAsync = {
  run: promisify(db.run),
  close: () => new Promise((resolve) => {
    db.close((error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error('DB: \t', chalk.red(error.message));
      } else {
        // eslint-disable-next-line no-console
        console.log('DB: \t', chalk.red('closed'));
      }
      resolve(error ? 1 : 0);
    });
  }),
};

export const SQL = {
  tables: loadSQL('tables'),
};

export const resetDB = async (file: string) => {
  await dbAsync.close();

  return fs.unlink(file);
};

export default dbAsync;
