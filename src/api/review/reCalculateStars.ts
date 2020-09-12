import SQL from 'sql-template-tag';
import db from '../../db';

function reCalculateStars(ShoeID: string) {
  const { sql, values } = SQL`
    UPDATE Shoe
    SET
      Stars = (
        SELECT
          IFNULL(avg(Review.stars), 0)
        FROM Review
        WHERE
          ShoeID = ${ShoeID}
      )
    WHERE
      Shoe.ID = ${ShoeID};
  `;

  return db.run(sql, values);
}

export default reCalculateStars;
