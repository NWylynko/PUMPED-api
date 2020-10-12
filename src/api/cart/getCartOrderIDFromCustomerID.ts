import SQL from 'sql-template-tag';
import db from '../../db';

export async function getCartOrderIDFromCustomerID(CustomerID: string): Promise<string> {
  const { sql, values } = SQL`
      SELECT ID
      FROM "Order"
      WHERE CustomerID = ${CustomerID}
      AND activeCart = 1
    `;

  const { ID: OrderID }: { ID: string } = await db.get(sql, values);

  return OrderID;
}

export default getCartOrderIDFromCustomerID;
