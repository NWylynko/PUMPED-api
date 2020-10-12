import fs from 'fs';
import router from './router';

import addImage from './addImage';
import getImage from './getImage';
import removeImage from './removeImage';

import { ImageSize } from './types';

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

export {
  addImage,
  getImage,
  removeImage,
  ImageSize,
};

export default router;
