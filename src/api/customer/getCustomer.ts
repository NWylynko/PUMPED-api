import SQL from 'sql-template-tag';
import db from '../../db';

function getCustomer(CustomerID: string) {
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
