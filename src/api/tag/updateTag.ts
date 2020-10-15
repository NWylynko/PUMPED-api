import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfTag } from './types';

export async function updateTag(TagID: number, fields: partOfTag) {
  let sql = 'UPDATE "Tag" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(TagID.toString())}`;

  await db.run(sql);

  return { TagID, ...fields };
}

export default updateTag;
