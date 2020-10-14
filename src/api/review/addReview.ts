import SQL from 'sql-template-tag';
import db from '../../db';
import type { reviewDetails } from './types';
import reCalculateStars from './reCalculateStars';

async function addReview(CustomerID: string, ShoeID: string, {
  stars,
  message,
  timestamp,
}: reviewDetails) {
  const { sql, values } = SQL`
    INSERT INTO "Review"
    (
      "ShoeID",
      "CustomerID",
      "stars",
      "message",
      "timestamp"
    )
    VALUES (
      ${ShoeID},
      ${CustomerID},
      ${stars},
      ${message},
      ${timestamp}
    );
  `;

  await db.run(sql, values);

  // re-calculate the averageStars of the shoe
  await reCalculateStars(ShoeID);

  return {
    ShoeID,
    CustomerID,
    stars,
    message,
    timestamp,
  };
}

export default addReview;
