import fs from 'fs';
import path from 'path';

const loadSQL = (file: string) => {
  const sql = fs.readFileSync(path.resolve(__dirname, '../../SQL/', `${file}.SQL`), 'utf-8');

  return sql;
};

export default loadSQL;
