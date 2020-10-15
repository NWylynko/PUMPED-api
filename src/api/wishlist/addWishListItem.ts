import SQL from 'sql-template-tag';
import db from '../../db';
import type { WishListWithShoe } from './types';

async function addWishListItem(CustomerID: number, ShoeID: number): Promise<WishListWithShoe> {
  const { sql, values } = SQL`
      INSERT INTO "WishList"
      (
        "ShoeID",
        "CustomerID"
      ) VALUES (
        ${ShoeID}, 
        ${CustomerID}
      );
    `;

  await db.run(sql, values);

  return { CustomerID, ShoeID };
}

export default addWishListItem;
