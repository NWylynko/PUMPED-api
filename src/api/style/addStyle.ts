import SQL from 'sql-template-tag';
import db from '../../db';
import { Style } from './types';

export async function addStyle({ name }: Style) {
  const { sql, values } = SQL`
    INSERT INTO Style
    (
      "name"
    ) VALUES (
      ${name}
    )
  `;

  await db.run(sql, values);

  return { name };
}

export default addStyle;
