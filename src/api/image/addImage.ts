import fs from 'fs/promises';
import sharp from 'sharp';
import SQL from 'sql-template-tag';
import { ImageSize } from './types';
import db from '../../db';

function resizeAndSaveImage(dir: string, image: sharp.Sharp, { name, width }: ImageSize) {
  return image.resize(width).toFile(`${dir}/${name}.webp`);
}

async function addImage(image: string | Buffer, name: string) {
  // convert image to webp
  const master = sharp(image).toFormat('webp').webp();

  // get id
  const { id }: { id: string } = await db.get('SELECT IFNULL(MAX(ID) + 1, 1) as id FROM "Image"');

  // create row
  const { sql, values } = SQL`INSERT INTO "Image" ("ID", "name") VALUES (${id}, ${name})`;
  await db.run(sql, values);

  // define directory for image
  const dir = `./public/${id}`;

  // make image directory
  await fs.mkdir(dir);

  // save master file
  await master.toFile(`${dir}/master.webp`);

  // resize / compress images to smaller sizes
  const sizes: ImageSize[] = [{ name: 'low', width: 300 }, { name: 'medium', width: 600 }, { name: 'high', width: 900 }];
  await Promise.all(sizes.map((size) => resizeAndSaveImage(dir, master, size)));

  return { id };
}

export default addImage;
