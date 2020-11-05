import SQL from 'sql-template-tag';
import db from '../../db';
import type { OrderItem } from './types';

function getOrderItems(OrderID: number): Promise<OrderItem[]> {
  const { sql, values } = SQL`
    SELECT OrderItem.*, shoe.price as "currentPrice"
    FROM OrderItem, shoe
    WHERE OrderID = ${OrderID}
    AND shoe.ID = OrderItem.ShoeID
  `;

  return db.all(sql, values);
}

export default getOrderItems;
