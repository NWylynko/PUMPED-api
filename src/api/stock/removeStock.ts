import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeStock(StockID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Stock"
    WHERE ID = ${StockID}
  `;

  await db.run(sql, values);

  return { StockID };
}

export default removeStock;
