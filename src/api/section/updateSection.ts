import db from '../../db';
import objectToSQLupdate from '../../utils/objectToSQLupdate';
import type { partOfSection } from './types';

export async function updateSection(SectionID: number, fields: partOfSection) {
  let sql = 'UPDATE "Section" SET ';

  sql += objectToSQLupdate(fields);

  sql += `WHERE ID = ${escape(SectionID.toString())}`;

  await db.run(sql);

  return { SectionID, ...fields };
}

export default updateSection;
