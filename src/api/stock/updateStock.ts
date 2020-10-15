import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfStock } from './types';

export async function updateStock(StockID: number, fields: partOfStock) {
  let sql = 'UPDATE "Stock" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(StockID.toString())}`;

  await db.run(sql);

  return { StockID, ...fields };
}

export default updateStock;
