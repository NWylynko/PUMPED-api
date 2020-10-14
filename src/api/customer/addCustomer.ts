import SQL from 'sql-template-tag';
import db from '../../db';
import { Customer } from './types';

const getIDOfNewCustomer = (firstName?: string, lastName?: string) => {
  const { sql, values } = SQL`
    SELECT ID
    FROM Customer
    WHERE firstName = ${firstName}
    AND lastName = ${lastName}
  `;

  return db.get(sql, values);
};
const createCustomerCart = (CustomerID: string) => {
  const { sql, values } = SQL`
    INSERT INTO "Order"
    (
      "CustomerID", 
      "paid", 
      "activeCart"
    ) VALUES (
      ${CustomerID}, 
      0, 
      1
    );
  `;

  return db.run(sql, values);
};

async function addCustomer({ firstName, lastName }: Customer) {
  const { sql, values } = SQL`
    INSERT INTO Customer
    ( 
      "firstName", 
      "lastName"
    ) VALUES ( 
      ${firstName}, 
      ${lastName}
    )
  `;

  await db.run(sql, values);

  const { ID: CustomerID } = await getIDOfNewCustomer(firstName, lastName);

  await createCustomerCart(CustomerID);

  return { firstName, lastName };
}

export default addCustomer;
