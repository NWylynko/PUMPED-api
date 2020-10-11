import SQL from 'sql-template-tag';
import db from '../../db';

function getOrders(CustomerID: string) {
  const { sql, values } = SQL`
    SELECT *
    FROM Order
    WHERE CustomerID = ${CustomerID}
  `;

  return db.all(sql, values);
}

export default getOrders;
