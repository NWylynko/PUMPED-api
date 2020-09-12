/* eslint-disable no-unused-vars */
import chalk from 'chalk';
import sqlite3 from 'sqlite3';
import loadSQL from './utils/loadSQL';

const { NODE_ENV: env = 'development' } = process.env;

const dbFile = env === 'test' ? ':memory:' : `./main.${env}.db`;

interface Result extends sqlite3.RunResult {
  errno: number;
  code: string;
}

class Database {
  db!: sqlite3.Database;

  open(): Promise<boolean> {
    return new Promise((resolve) => {
      this.db = new sqlite3.Database(dbFile, (err) => {
        if (err) throw new Error(err.message);
      }).on('open', () => {
      // eslint-disable-next-line no-console
        console.log('DB: \t', chalk.green('open'), dbFile);
        resolve(true);
      }).on('close', () => {
      // eslint-disable-next-line no-console
        console.log('DB: \t', chalk.red('closed'));
        resolve(false);
      });
    });
  }

  close(): Promise<number> {
    return new Promise((resolve) => {
      this.db.close((error) => {
        if (error) {
        // eslint-disable-next-line no-console
          console.error('DB: \t', chalk.red(error.message));
        }
        resolve(error ? 1 : 0);
      });
    });
  }

  run(sql: string, params: any[] = []): Promise<Result> {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, (result: Result, error: Error | null) => {
        if (error) reject(error);
        if (result?.errno) reject(result.code);
        resolve(result);
      });
    });
  }

  all(sql: string, params: any[] = []): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (error: Error | null, results: any[]) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }

  get(sql: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (error: Error | null, result: any) => {
        if (error) reject(error);
        resolve(result);
      });
    });
  }

  exec(sql: string) {
    return new Promise((resolve, reject) => {
      this.db.exec(sql, (error: Error | null) => {
        if (error) reject(error);
        resolve();
      });
    });
  }
}

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
  testData: loadSQL('testdata'),
};

const db = new Database();
db.open();

export default db;
