import SQL from 'sql-template-tag';
import db from '../../db';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';

async function clearCart(CustomerID: string) {
  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  const { sql, values } = SQL`
    DELETE FROM OrderItem
    WHERE OrderID = ${OrderID}
  `;

  await db.run(sql, values);

  return { CustomerID, OrderID };
}

export default clearCart;
