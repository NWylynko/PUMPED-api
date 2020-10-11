import SQL from 'sql-template-tag';
import db from '../../db';

function removeItems(OrderID: string) {
  const { sql, values } = SQL`
      DELETE FROM "OrderItem"
      WHERE OrderID = ${OrderID}
    `;

  return db.run(sql, values);
}

async function removeOrder(OrderID: string) {
  await removeItems(OrderID);

  const { sql, values } = SQL`
    DELETE FROM "Order"
    WHERE ID = ${OrderID}
  `;

  await db.run(sql, values);

  return { OrderID };
}

export default removeOrder;
