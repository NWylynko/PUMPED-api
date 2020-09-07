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
  run: (sql: string) => Promise<sqlite3.RunResult>,
  close: () => Promise<void>
}

const dbAsync: DBAsync = {
  run: promisify(db.run),
  close: promisify(db.close),
};

export const SQL = {
  tables: loadSQL('tables'),
};

export const resetDB = async (file: string) => {
  await dbAsync.close();

  // eslint-disable-next-line no-console
  console.log('DB: \t', chalk.red('closed'));

  await fs.unlink('./main.db');
};

export default dbAsync;
