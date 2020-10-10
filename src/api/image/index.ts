import fs from 'fs';
import router from './router';

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

export default router;
