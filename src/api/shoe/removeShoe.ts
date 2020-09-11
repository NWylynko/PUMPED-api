import SQL from 'sql-template-tag';
import db from '../../db';

async function removeShoe(ID: string): Promise<{ ID: string; }> {
  const { sql, values } = SQL`
    DELETE FROM "Shoe"
    WHERE Shoe.ID = ${ID}
  `;

  await db.run(sql, values);

  return { ID };
}

export default removeShoe;
