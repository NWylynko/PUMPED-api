import SQL from 'sql-template-tag';
import db from '../../db';
import { Colour } from './types';

export async function addColour({ ShoeID, colour, hex }: Colour) {
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

  await db.run(sql, values);

  return { ShoeID, colour, hex };
}

export default addColour;
