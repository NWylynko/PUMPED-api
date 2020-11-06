import SQL from 'sql-template-tag';
import db from '../../db';
import { WishListWithShoe } from './types';

async function isInWishlist(CustomerID: number, ShoeID: number | string): Promise<boolean> {
  const { sql, values } = SQL`
    SELECT *
    FROM WishList
    WHERE CustomerID = ${CustomerID}
    AND ShoeID = ${ShoeID}
  `;

  const result: WishListWithShoe[] = await db.all(sql, values);

  // if its 0 then the show isnt in the customers wishlist,
  // if its 1 then it is in the customers wishlist
  return result.length !== 0;
}

export default isInWishlist;
