import fs from 'fs';
import path from 'path';

const loadSQL = (file: string) => fs.readFileSync(path.resolve(__dirname, '../../SQL/', `${file}.SQL`), 'utf-8');

export default loadSQL;
