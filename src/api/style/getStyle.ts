import SQL from 'sql-template-tag';
import db from '../../db';
import type { StyleWithID } from './types';

export function getStyle(StyleID: string): Promise<StyleWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Collection
    WHERE ID = ${StyleID}
  `;

  return db.get(sql, values);
}

export default getStyle;
