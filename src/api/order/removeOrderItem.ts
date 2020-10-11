import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeOrderItem(OrderID: string, ShoeID: string) {
  const { sql, values } = SQL`
    DELETE FROM "OrderItem"
    WHERE OrderID = ${OrderID}
    AND ShoeID = ${ShoeID}
  `;

  await db.run(sql, values);

  return { OrderID, ShoeID };
}

export default removeOrderItem;
