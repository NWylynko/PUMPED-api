import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import { partOfBrand } from './types';

export async function updateBrand(BrandID: string, fields: partOfBrand) {
  let sql = 'UPDATE "Brand" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(BrandID)}`;

  await db.run(sql);

  return { BrandID, ...fields };
}

export default updateBrand;
