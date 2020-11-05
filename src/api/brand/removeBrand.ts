import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeBrand(BrandID: number): Promise<{BrandID: number}> {
  const { sql, values } = SQL`
    DELETE FROM "Brand"
    WHERE ID = ${BrandID}
  `;

  await db.run(sql, values);

  return { BrandID };
}

export default removeBrand;
