import SQL from 'sql-template-tag';
import db from '../../db';
import type { Section } from './types';

export async function addSection({ name }: Section) {
  const { sql, values } = SQL`
    INSERT INTO Section
    (
      "name"
    ) VALUES (
      ${name}
    )
  `;

  await db.run(sql, values);

  return { name };
}

export default addSection;
