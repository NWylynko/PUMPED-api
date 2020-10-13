import SQL from 'sql-template-tag';
import db from '../../db';

export async function removeSection(SectionID: string) {
  const { sql, values } = SQL`
    DELETE FROM "Section"
    WHERE ID = ${SectionID}
  `;

  await db.run(sql, values);

  return { SectionID };
}

export default removeSection;
