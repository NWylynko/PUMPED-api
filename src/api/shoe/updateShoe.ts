import { escape } from 'sqlstring';
import db from '../../db';
import type { PartOfShoe } from './types';
import objectToSQLupdate from '../../utils/objectToSQLupdate';

async function updateShoe(ShoeID: string, fields: PartOfShoe): Promise<PartOfShoe> {
  let sql = 'UPDATE "Shoe" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE Shoe.ID = ${escape(ShoeID)}`;

  await db.run(sql);

  return { ShoeID, ...fields };
}

export default updateShoe;
