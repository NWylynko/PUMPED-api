import SQL from 'sql-template-tag';
import db from '../../db';

function getWishlist(CustomerID: number): Promise<{ ShoeID: number }[]> {
  const { sql, values } = SQL`
      SELECT
        Shoe.ID as "ShoeID"
      FROM Shoe, WishList
      WHERE Shoe.ID = WishList.ShoeID
        AND WishList.CustomerID = ${CustomerID}
    `;

  return db.all(sql, values);
}

export default getWishlist;
