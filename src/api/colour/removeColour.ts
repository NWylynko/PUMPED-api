import SQL from 'sql-template-tag';
import db from '../../db';

const removeColourImage = (ColourID: number) => {
  const { sql, values } = SQL`
    DELETE FROM "ColourImage"
    WHERE ID = ${ColourID}
  `;

  return db.run(sql, values);
};

export async function removeColour(ColourID: number) {
  await removeColourImage(ColourID);

  const { sql, values } = SQL`
    DELETE FROM "Colour"
    WHERE ID = ${ColourID}
  `;

  await db.run(sql, values);

  return { ColourID };
}

export default removeColour;
