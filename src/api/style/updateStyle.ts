import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import { partOfStyle } from './types';

export async function updateStyle(StyleID: string, fields: partOfStyle) {
  let sql = 'UPDATE "Style" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(StyleID)}`;

  await db.run(sql);

  return { StyleID, ...fields };
}

export default updateStyle;
