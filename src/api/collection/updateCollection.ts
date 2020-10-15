import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfCollection } from './types';

export async function updateCollection(CollectionID: number, fields: partOfCollection) {
  let sql = 'UPDATE "Collection" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(CollectionID.toString())}`;

  await db.run(sql);

  return { CollectionID, ...fields };
}

export default updateCollection;
