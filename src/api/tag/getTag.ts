import SQL from 'sql-template-tag';
import db from '../../db';
import type { TagWithID } from './types';

export function getTag(TagID: number): Promise<TagWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Tag
    WHERE ID = ${TagID}
  `;

  return db.get(sql, values);
}

export default getTag;
