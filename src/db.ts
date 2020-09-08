/* eslint-disable no-unused-vars */
import chalk from 'chalk';
import sqlite3 from 'sqlite3';
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
  all: (sql: string, params?: any[]) => Promise<any[]>;
  close: () => Promise<number>;
}

interface Result extends sqlite3.RunResult {
  errno: number;
  code: string;
}

const dbAsync: DBAsync = {
  run: (sql: string, params: any[] = []) => new Promise((resolve, reject) => {
    db.run(sql, params, (result: Result, error: Error | null) => {
      if (error) reject(error);
      if (result?.errno === 1) reject(result.code);
      resolve(result);
    });
  }),
  all: (sql: string, params: any[] = []) => new Promise((resolve, reject) => {
    db.all(sql, params, (error: Error | null, result: any[]) => {
      if (error) reject(error);
      resolve(result);
    });
  }),
  close: closeDB,
};

export const SQL = {
  tables: {
    Brand: loadSQL('tables/Brand'),
    Cart: loadSQL('tables/Cart'),
    Collection: loadSQL('tables/Collection'),
    Colour: loadSQL('tables/Colour'),
    ColourImage: loadSQL('tables/ColourImage'),
    Customer: loadSQL('tables/Customer'),
    Image: loadSQL('tables/Image'),
    Order: loadSQL('tables/Order'),
    OrderItem: loadSQL('tables/OrderItem'),
    Review: loadSQL('tables/Review'),
    Section: loadSQL('tables/Section'),
    Shoe: loadSQL('tables/Shoe'),
    ShoeTag: loadSQL('tables/ShoeTag'),
    Stock: loadSQL('tables/Stock'),
    Style: loadSQL('tables/Style'),
    Tag: loadSQL('tables/Tag'),
    WishList: loadSQL('tables/WishList'),
  },
};

export default dbAsync;
