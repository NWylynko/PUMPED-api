import SQL from 'sql-template-tag';
import db from '../../db';
import type { SectionWithID } from './types';

export function getSection(SectionID: string): Promise<SectionWithID> {
  const { sql, values } = SQL`
    SELECT *
    FROM Collection
    WHERE ID = ${SectionID}
  `;

  return db.get(sql, values);
}

export default getSection;
