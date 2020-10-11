import SQL from 'sql-template-tag';
import db from '../../db';

function getOrderItems(OrderID: string) {
  const { sql, values } = SQL`
    SELECT *
    FROM OrderItem
    WHERE OrderID = ${OrderID}
  `;

  return db.all(sql, values);
}

export default getOrderItems;
