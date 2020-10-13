import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeTag(TagID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Tag"
    WHERE ID = ${TagID}
  `;

  await db.run(sql, values);

  return { TagID };
}

export default removeTag;
