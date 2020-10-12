import SQL from 'sql-template-tag';
import db from '../../db';
import getOrderIDFromCustomerID from './getOrderIDFromCustomerID';

async function removeCartItem(CustomerID: string, ShoeID: string) {
  const OrderID = await getOrderIDFromCustomerID(CustomerID);

  const { sql, values } = SQL`
    DELETE FROM OrderItem
    WHERE OrderID = ${OrderID}
    AND ShoeID = ${ShoeID}
  `;

  await db.run(sql, values);

  return { OrderID, ShoeID, CustomerID };
}

export default removeCartItem;
