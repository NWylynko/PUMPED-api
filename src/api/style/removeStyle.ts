import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeStyle(StyleID: number) {
  const { sql, values } = SQL`
    DELETE FROM "Style"
    WHERE ID = ${StyleID}
  `;

  await db.run(sql, values);

  return { StyleID };
}

export default removeStyle;
