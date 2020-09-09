import { promises as fs } from 'fs';
import db from '../db';

const reset = async () => {
  await db.close();
  await fs.unlink('./main.test.db');
  await fs.copyFile('./main.testData.db', './main.test.db');
  await db.open();
};

export default reset;
