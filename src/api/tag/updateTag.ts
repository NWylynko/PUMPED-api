import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import { partOfTag } from './types';

export async function updateTag(TagID: string, fields: partOfTag) {
  let sql = 'UPDATE "Tag" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(TagID)}`;

  await db.run(sql);

  return { TagID, ...fields };
}

export default updateTag;
