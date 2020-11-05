import SQL from 'sql-template-tag';
import db from '../../db';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';
import type { removedCartItem } from './types';

async function removeCartItem(CustomerID: number, ShoeID: number): Promise<removedCartItem> {
  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  const { sql, values } = SQL`
    DELETE FROM OrderItem
    WHERE OrderID = ${OrderID}
    AND ShoeID = ${ShoeID}
  `;

  await db.run(sql, values);

  return { OrderID, ShoeID, CustomerID };
}

export default removeCartItem;
