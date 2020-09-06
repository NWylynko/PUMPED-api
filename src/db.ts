import loadSQL from './utils/loadSQL';

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./main.db', () => {
  // eslint-disable-next-line no-console
  console.log('Opened Database');
});

export const SQL = {
  Shoe: loadSQL('tables/Shoe'),
};

export default db;

// eslint-disable-next-line no-undef
const handler = async () => {
  await db.close();

  // eslint-disable-next-line no-console
  console.log('Closed Database');

  process.exit();
};

process.on('SIGINT', handler);
process.on('SIGTERM', handler);
process.on('SIGUSR2', handler);
