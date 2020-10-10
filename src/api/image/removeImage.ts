import fs from 'fs/promises';
import SQL from 'sql-template-tag';

import db from '../../db';

async function removeImage(ImageID: string) {
  // unlink / remove folder of id
  await fs.rmdir(`./public/${ImageID}`, { recursive: true });

  // remove row in db
  const { sql, values } = SQL`DELETE FROM "Image" WHERE ID = ${ImageID}`;
  await db.run(sql, values);

  return { id: ImageID };
}

export default removeImage;
