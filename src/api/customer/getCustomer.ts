import SQL from 'sql-template-tag';
import db from '../../db';
import type { Customer } from './types';

function getCustomer(CustomerID: number): Promise<Customer> {
  const { sql, values } = SQL`
    SELECT
      Customer.firstName,
      Customer.lastName
    FROM Customer
    WHERE Customer.ID = ${CustomerID}
  `;

  return db.get(sql, values);
}

export default getCustomer;
