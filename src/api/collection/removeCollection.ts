import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeCollection(CollectionID: number) {
  const { sql, values } = SQL`
    DELETE FROM "Collection"
    WHERE ID = ${CollectionID}
  `;

  await db.run(sql, values);

  return { CollectionID };
}

export default removeCollection;
