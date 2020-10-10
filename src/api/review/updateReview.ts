import { escape } from 'sqlstring';
import db from '../../db';
import { partOfReview } from './types';
import objectToSQLupdate from '../../utils/objectToSQLupdate';

async function updateReview(
  CustomerID: string,
  ShoeID: string,
  fields: partOfReview,
): Promise<partOfReview> {
  let sql = 'UPDATE "Review" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE Review.CustomerID = ${escape(
    CustomerID,
  )} AND Review.ShoeID = ${escape(ShoeID)}`;

  await db.run(sql);

  return { CustomerID, ShoeID, ...fields };
}

export default updateReview;
