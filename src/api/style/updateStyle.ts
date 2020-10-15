import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfStyle } from './types';

export async function updateStyle(StyleID: number, fields: partOfStyle) {
  let sql = 'UPDATE "Style" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(StyleID.toString())}`;

  await db.run(sql);

  return { StyleID, ...fields };
}

export default updateStyle;
