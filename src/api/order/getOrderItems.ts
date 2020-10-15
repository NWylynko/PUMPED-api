import SQL from 'sql-template-tag';
import db from '../../db';
import type { OrderItem } from './types';

function getOrderItems(OrderID: number): Promise<OrderItem[]> {
  const { sql, values } = SQL`
    SELECT *
    FROM OrderItem
    WHERE OrderID = ${OrderID}
  `;

  return db.all(sql, values);
}

export default getOrderItems;
