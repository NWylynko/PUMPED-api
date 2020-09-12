import { escape } from 'sqlstring';
import db from '../../db';
import { PartOfShoe } from './types';

async function updateShoe(ID: string, fields: PartOfShoe): Promise<PartOfShoe> {
  let sql = 'UPDATE "Shoe" SET ';

  Object.keys(fields).forEach((partName, index, array) => {
    // if the current item is the length of the array then its the last item
    // the last item cant have a comma
    const comma = index === array.length - 1 ? '' : ',';

    sql += `${escape(partName)} = ${escape(fields[partName])}${comma} `;
  });

  sql += `WHERE Shoe.ID = ${escape(ID)}`;

  await db.run(sql);

  return { ID, ...fields };
}

export default updateShoe;