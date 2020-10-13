import db from '../../db';
import SQL from 'sql-template-tag';

export async function removeBrand(BrandID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Brand"
    WHERE ID = ${BrandID}
  `;

  await db.run(sql, values);

  return { BrandID };
}

export default removeBrand;
