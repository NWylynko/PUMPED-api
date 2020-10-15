import { escape } from 'sqlstring';
import db from '../../db';
import type { Customer } from './types';
import objectToSQLupdate from '../../utils/objectToSQLupdate';

async function updateCustomer(CustomerID: number, fields: Customer) {
  let sql = 'UPDATE "Customer" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE Customer.ID = ${escape(CustomerID)}`;

  await db.run(sql);

  return { CustomerID, ...fields };
}

export default updateCustomer;
