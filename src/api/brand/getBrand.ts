import SQL from 'sql-template-tag';
import db from '../../db';
import type { BrandWithID } from './types';

export function getBrand(BrandID: number): Promise<BrandWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Brand
    WHERE ID = ${BrandID}
  `;

  return db.get(sql, values);
}

export default getBrand;
