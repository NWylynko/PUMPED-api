import { escape } from 'sqlstring';
import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfOrderItem } from '../order';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';

async function updateCartItem(CustomerID: number, ShoeID: number, fields: partOfOrderItem) {
  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  let sql = 'UPDATE "OrderItem" SET ';

  sql += objectToSQLupdate(fields);

  sql += `
    WHERE OrderID = ${escape(OrderID)}
    AND ShoeID = ${escape(ShoeID)}
  `;

  await db.run(sql);

  return {
    CustomerID, OrderID, ShoeID, ...fields,
  };
}

export default updateCartItem;
