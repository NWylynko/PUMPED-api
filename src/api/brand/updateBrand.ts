import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfBrand } from './types';

export async function updateBrand(BrandID: number, fields: partOfBrand) {
  let sql = 'UPDATE "Brand" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(BrandID.toString())}`;

  await db.run(sql);

  return { BrandID, ...fields };
}

export default updateBrand;
