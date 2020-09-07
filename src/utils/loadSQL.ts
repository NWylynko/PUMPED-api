import fs from 'fs';
import path from 'path';
import sqlParser from 'sql-template-tag';

const loadSQL = (file: string) => {
  const sql = fs.readFileSync(path.resolve(__dirname, '../../SQL/', `${file}.SQL`), 'utf-8');

  return sqlParser([sql]).sql;
};

export default loadSQL;
