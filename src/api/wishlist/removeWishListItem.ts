import SQL from 'sql-template-tag';
import db from '../../db';
import type { WishListWithShoe } from './types';

async function removeWishListItem(CustomerID: number, ShoeID: number): Promise<WishListWithShoe> {
  const { sql, values } = SQL`
      DELETE FROM "WishList"
      WHERE CustomerID = ${CustomerID}
      AND ShoeID = ${ShoeID}
    `;

  await db.run(sql, values);

  return { CustomerID, ShoeID };
}

export default removeWishListItem;
