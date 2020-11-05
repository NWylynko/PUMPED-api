import SQL from 'sql-template-tag';
import db from '../../db';
import type { Customer, CustomerWithID } from './types';

const getIDOfNewCustomer = (firstName?: string, lastName?: string): Promise<{ ID: number }> => {
  const { sql, values } = SQL`
    SELECT ID
    FROM Customer
    WHERE firstName = ${firstName}
    AND lastName = ${lastName}
  `;

  return db.get(sql, values);
};

const createCustomerCart = (CustomerID: number) => {
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

async function addCustomer({ firstName, lastName }: Customer): Promise<CustomerWithID> {
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

  try {
    await db.run(sql, values);
  } catch (error) {
    // customer already exists
  }

  const { ID: CustomerID } = await getIDOfNewCustomer(firstName, lastName);

  await createCustomerCart(CustomerID);

  return { firstName, lastName, ID: CustomerID };
}

export default addCustomer;
