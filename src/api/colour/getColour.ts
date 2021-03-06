import SQL from 'sql-template-tag';
import db from '../../db';
import type { ColourWithID } from './types';

export function getColour(ColourID: number): Promise<ColourWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Colour, ColourImage
    WHERE ID = ${ColourID}
    Colour.ID = ColourImage.ColourID
  `;

  return db.get(sql, values);
}

export default getColour;
