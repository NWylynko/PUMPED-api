import SQL from 'sql-template-tag';
import db from '../../db';
import type { Stock } from './types';

export async function addStock({
  ShoeID, ColourID, size, stock,
}: Stock) {
  const { sql, values } = SQL`
    INSERT INTO Stock
    (
      "ShoeID",
      "ColourID",
      "size",
      "stock"
    ) VALUES (
      ${ShoeID},
      ${ColourID},
      ${size},
      ${stock}
    )
  `;

  await db.run(sql, values);

  return {
    ShoeID, ColourID, size, stock,
  };
}

export default addStock;
