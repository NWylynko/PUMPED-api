import fs from 'fs';
import router from './router';

import addImage from './addImage';
import getImage from './getImage';
import removeImage from './removeImage';

import type { ImageSize } from './types';

if (!fs.existsSync('./public')) {
  fs.mkdirSync('./public');
}

export {
  addImage,
  getImage,
  removeImage,
};

export type {
  ImageSize,
};

export default router;
