import SQL from 'sql-template-tag';
import db from '../../db';

async function removeCustomer(CustomerID: number) {
  const { sql, values } = SQL`
    DELETE FROM "Customer"
    WHERE Customer.ID = ${CustomerID}
  `;

  await db.run(sql, values);

  return { CustomerID };
}

export default removeCustomer;
