import SQL from 'sql-template-tag';
import db from '../../db';
import type { Order } from './types';

function getOrders(CustomerID: number): Promise<Order[]> {
  const { sql, values } = SQL`
    SELECT *
    FROM "Order"
    WHERE CustomerID = ${CustomerID}
  `;

  return db.all(sql, values);
}

export default getOrders;
