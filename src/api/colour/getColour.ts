import SQL from 'sql-template-tag';
import db from '../../db';
import { ColourWithID } from './types';

export function getColour(ColourID: string): Promise<ColourWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Colour
    WHERE ID = ${ColourID}
  `;

  return db.get(sql, values);
}

export default getColour;
