import { escape } from 'sqlstring';
import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import { partOfOrderItem } from './types';

async function updateOrderItem(OrderID: string, ShoeID: string, fields: partOfOrderItem) {
  let sql = 'UPDATE "OrderItem" SET ';

  sql += objectToSQLupdate(fields);

  sql += `
    WHERE OrderID = ${escape(OrderID)}
    AND ShoeID = ${escape(ShoeID)}
  `;

  await db.run(sql);

  return { OrderID, ShoeID, ...fields };
}

export default updateOrderItem;
