import SQL from 'sql-template-tag';
import db from '../../db';
import { Tag } from './types';

export async function addTag({ tag }: Tag) {
  const { sql, values } = SQL`
    INSERT INTO Tag
    (
      "tag"
    ) VALUES (
      ${tag}
    )
  `;

  await db.run(sql, values);

  return { tag };
}

export default addTag;
