import { promises as fs } from 'fs';
import db, { SQL } from '../db';

export const createTables = () => Promise.all([
  db.run(SQL.tables.Brand),
  db.run(SQL.tables.Collection),
  db.run(SQL.tables.Colour),
  db.run(SQL.tables.ColourImage),
  db.run(SQL.tables.Customer),
  db.run(SQL.tables.Image),
  db.run(SQL.tables.Order),
  db.run(SQL.tables.OrderItem),
  db.run(SQL.tables.Review),
  db.run(SQL.tables.Section),
  db.run(SQL.tables.Shoe),
  db.run(SQL.tables.ShoeTag),
  db.run(SQL.tables.Stock),
  db.run(SQL.tables.Style),
  db.run(SQL.tables.Tag),
  db.run(SQL.tables.WishList),
]);

const resetDB = async () => {
  await db.close();
  await fs.unlink(`./main.${process.env.NODE_ENV}.db`);
  await db.open();
  await createTables();
};

export const addTestData = () => db.exec(SQL.testData);

export const resetDBForTest = async () => {
  await db.close();
  await db.open();
  await createTables();
  await db.exec(SQL.testData);
};

export default resetDB;
