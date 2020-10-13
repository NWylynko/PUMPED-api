import db from '../../db';
import SQL from 'sql-template-tag';

export async function removeCollection(CollectionID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Collection"
    WHERE ID = ${CollectionID}
  `;

  await db.run(sql, values);

  return { CollectionID };
}

export default removeCollection;
