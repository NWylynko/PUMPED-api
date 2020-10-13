import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeColour(ColourID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Colour"
    WHERE ID = ${ColourID}
  `;

  await db.run(sql, values);

  return { ColourID };
}

export default removeColour;
