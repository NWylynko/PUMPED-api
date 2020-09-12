import SQL from 'sql-template-tag';
import db from '../../db';

async function removeReview(CustomerID: string, ShoeID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Review"
    WHERE Review.ShoeID = ${ShoeID}
    AND Review.CustomerID = ${CustomerID}
  `;

  await db.run(sql, values);

  return { CustomerID, ShoeID };
}

export default removeReview;
