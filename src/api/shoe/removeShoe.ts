import SQL from 'sql-template-tag';
import db from '../../db';

async function removeShoe(ShoeID: string): Promise<{ ShoeID: string; }> {
  const { sql, values } = SQL`
    DELETE FROM "Shoe"
    WHERE Shoe.ID = ${ShoeID}
  `;

  await db.run(sql, values);

  return { ShoeID };
}

export default removeShoe;
