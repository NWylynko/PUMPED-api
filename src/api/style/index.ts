import router from './router';

import { getStyle } from './getStyle';
import { addStyle } from './addStyle';
import { updateStyle } from './updateStyle';
import { removeStyle } from './removeStyle';

import { Style, partOfStyle, StyleWithID } from './types';

export {
  getStyle,
  addStyle,
  updateStyle,
  removeStyle,
  Style,
  partOfStyle,
  StyleWithID,
};

export default router;
