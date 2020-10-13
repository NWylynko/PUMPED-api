import db from '../../db';
import SQL from 'sql-template-tag';
import { Collection } from './types';

export async function addCollection({ name }: Collection) {
  const { sql, values } = SQL`
    INSERT INTO Collection
    (
      "name"
    ) VALUES (
      ${name}
    )
  `;

  await db.run(sql, values);

  return { name };
}

export default addCollection;
