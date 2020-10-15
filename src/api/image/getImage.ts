import SQL from 'sql-template-tag';
import db from '../../db';

async function getImage(ImageID: number) {
  // get image name
  const { sql, values } = SQL`SELECT name FROM Image WHERE ID = ${ImageID}`;
  const { name = undefined }: { name?: string } = await db.get(sql, values);

  if (!name) { throw new Error("image doesn't exist"); }

  return name;
}

export default getImage;
