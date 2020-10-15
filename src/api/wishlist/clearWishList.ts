import SQL from 'sql-template-tag';
import db from '../../db';
import type { WishList } from './types';

async function clearWishList(CustomerID: number): Promise<WishList> {
  const { sql, values } = SQL`
      DELETE FROM "WishList"
      WHERE CustomerID = ${CustomerID}
    `;

  await db.run(sql, values);

  return { CustomerID };
}

export default clearWishList;
