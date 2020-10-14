import SQL from 'sql-template-tag';
import db from '../../db';
import type { StockWithID } from './types';

export function getStock(StockID: string): Promise<StockWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Stock
    WHERE ID = ${StockID}
  `;

  return db.get(sql, values);
}

export default getStock;
