import SQL from 'sql-template-tag';
import db from '../../db';
import type { CollectionWithID } from './types';

export function getCollection(CollectionID: number): Promise<CollectionWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Collection
    WHERE ID = ${CollectionID}
  `;

  return db.get(sql, values);
}

export default getCollection;
