import SQL from 'sql-template-tag';
import db from '../../db';
import type { Review } from './types';

function getReviews(ShoeID: number): Promise<Review[]> {
  const { sql, values } = SQL`
    SELECT
      Customer.firstName,
      Customer.lastName,
      Review.stars,
      Review.message,
      Review.timestamp
    FROM Review, Customer
    WHERE Review.CustomerID = Customer.ID
    AND Review.ShoeID = ${ShoeID}
  `;

  return db.all(sql, values);
}

export default getReviews;
