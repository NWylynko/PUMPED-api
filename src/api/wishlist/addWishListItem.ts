import SQL from 'sql-template-tag';
import db from '../../db';
import { WishListWithShoe } from './types';

async function addWishListItem(CustomerID: string, ShoeID: string): Promise<WishListWithShoe> {
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
