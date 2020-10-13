import db from '../../db';
import SQL from 'sql-template-tag';
import { BrandWithID } from './types';

export function getBrand(BrandID: string): Promise<BrandWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Brand
    WHERE ID = ${BrandID}
  `;

  return db.get(sql, values);
}

export default getBrand;
