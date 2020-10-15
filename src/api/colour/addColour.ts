import SQL from 'sql-template-tag';
import db from '../../db';
import type { Colour } from './types';

function getIDOfNewColour(ShoeID: number, colour: string, hex: string): Promise<{ ID: number }> {
  const { sql, values } = SQL`
      SELECT ID
      FROM Colour
      WHERE ShoeID = ${ShoeID}
      AND colour = ${colour}
      AND hex = ${hex}
    `;

  return db.get(sql, values);
}

function connectImageToColour(ColourID: number, ImageID: number) {
  const { sql, values } = SQL`
      INSERT INTO ColourImage
      (
        "ColourID",
        "ImageID"
      ) VALUES (
        ${ColourID},
        ${ImageID}
      )
    `;

  return db.run(sql, values);
}

export async function addColour({
  ShoeID, ImageIDs, colour, hex,
}: Colour) {
  await (() => {
    const { sql, values } = SQL`
      INSERT INTO Colour
      (
        "ShoeID",
        "colour",
        "hex"
      ) VALUES (
        ${ShoeID},
        ${colour},
        ${hex}
      )
    `;

    return db.run(sql, values);
  })();

  const { ID: ColourID } = await getIDOfNewColour(ShoeID, colour, hex);

  await Promise.all(ImageIDs.map((ImageID) => connectImageToColour(ColourID, ImageID)));

  return { ShoeID, colour, hex };
}

export default addColour;
