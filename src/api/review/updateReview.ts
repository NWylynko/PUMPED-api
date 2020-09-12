import { escape } from 'sqlstring';
import db from '../../db';
import { partOfReview } from './types';

async function updateReview(
  CustomerID: string,
  ShoeID: string,
  fields: partOfReview,
): Promise<partOfReview> {
  let sql = 'UPDATE "Review" SET ';

  Object.keys(fields).forEach((partName, index, array) => {
    // if the current item is the length of the array then its the last item
    // the last item cant have a comma
    const comma = index === array.length - 1 ? '' : ',';

    sql += `${escape(partName)} = ${escape(fields[partName])}${comma} `;
  });

  sql += `WHERE Review.CustomerID = ${escape(
    CustomerID,
  )} AND Review.ShoeID = ${escape(ShoeID)}`;

  await db.run(sql);

  return { CustomerID, ShoeID, ...fields };
}

export default updateReview;
