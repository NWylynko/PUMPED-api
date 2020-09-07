/* eslint-disable no-unused-vars */
import chalk from 'chalk';
import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import loadSQL from './utils/loadSQL';

export const db = new sqlite3.Database('./main.db', (err) => {
  if (err) throw new Error(err.message);
}).on('open', () => {
  // eslint-disable-next-line no-console
  console.log('DB: \t', chalk.green('open'));
});

const closeDB: () => Promise<number> = () => new Promise((resolve) => {
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
});

interface DBAsync {
  run: (sql: string, params?: any[]) => Promise<sqlite3.RunResult>;
  close: () => Promise<number>;
}

const dbAsync: DBAsync = {
  run: (sql: string, params: any[] = []) => new Promise((resolve, reject) => {
    db.run(sql, params, (result: sqlite3.RunResult, error: Error | null) => {
      if (error) reject(error);
      resolve(result);
    });
  }),
  close: closeDB,
};

export const SQL = {
  tables: loadSQL('tables'),
};

export default dbAsync;
