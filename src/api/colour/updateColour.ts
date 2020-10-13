import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import { partOfColour } from './types';

export async function updateColour(ColourID: string, fields: partOfColour) {
  let sql = 'UPDATE "Brand" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(ColourID)}`;

  await db.run(sql);

  return { ColourID, ...fields };
}

export default updateColour;
