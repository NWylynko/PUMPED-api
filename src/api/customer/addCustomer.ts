import SQL from 'sql-template-tag';
import db from '../../db';
import { Customer } from './types';

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

  // create new order with activeCart set to true

  return { firstName, lastName };
}

export default addCustomer;
