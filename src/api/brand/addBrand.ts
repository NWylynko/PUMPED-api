import db from '../../db';
import SQL from 'sql-template-tag';
import { Brand } from './types';

export async function addBrand({ name, website, icon }: Brand) {
  const { sql, values } = SQL`
    INSERT INTO Brand
    (
      "name",
      "website",
      "icon"
    ) VALUES (
      ${name},
      ${website},
      ${icon}
    )
  `;

  await db.run(sql, values);

  return { name, website, icon };
}

export default addBrand;