import chalk from 'chalk';
import loadSQL from './utils/loadSQL';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./main.db', () => {
  // eslint-disable-next-line no-console
  console.log('DB: \t', chalk.green('open'));
});

export const SQL = {
  Shoe: loadSQL('tables/Shoe'),
};

export default db;
