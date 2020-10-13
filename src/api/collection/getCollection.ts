import db from '../../db';
import SQL from 'sql-template-tag';
import { CollectionWithID } from './types';

export function getCollection(CollectionID: string): Promise<CollectionWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Collection
    WHERE ID = ${CollectionID}
  `;

  return db.get(sql, values);
}

export default getCollection;
