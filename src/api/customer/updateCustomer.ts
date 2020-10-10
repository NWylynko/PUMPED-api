import { escape } from 'sqlstring';
import db from '../../db';
import { Customer } from './types';
import objectToSQLupdate from '../../utils/objectToSQLupdate';

async function updateCustomer(CustomerID: string, fields: Customer) {
  let sql = 'UPDATE "Customer" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE Customer.ID = ${escape(CustomerID)}`;

  await db.run(sql);

  return { CustomerID, ...fields };
}

export default updateCustomer;
