import SQL from 'sql-template-tag';
import db from '../../db';
import getOrderIDFromCustomerID from './getOrderIDFromCustomerID';

async function clearCart(CustomerID: string) {
  const OrderID = await getOrderIDFromCustomerID(CustomerID);

  const { sql, values } = SQL`
    DELETE FROM OrderItem
    WHERE OrderID = ${OrderID}
  `;

  await db.run(sql, values);

  return { CustomerID, OrderID };
}

export default clearCart;
