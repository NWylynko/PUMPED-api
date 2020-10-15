import { escape } from 'sqlstring';
import db from '../../db';
import type { PartOfShoe } from './types';
import objectToSQLupdate from '../../utils/objectToSQLupdate';

async function updateShoe(ShoeID: number, fields: PartOfShoe): Promise<PartOfShoe> {
  let sql = 'UPDATE "Shoe" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE Shoe.ID = ${escape(ShoeID.toString())}`;

  await db.run(sql);

  return { ShoeID, ...fields };
}

export default updateShoe;
