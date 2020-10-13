import router from './router';

import { getStock } from './getStock';
import { addStock } from './addStock';
import { updateStock } from './updateStock';
import { removeStock } from './removeStock';

import { Stock, partOfStock, StockWithID } from './types';

export {
  getStock,
  addStock,
  updateStock,
  removeStock,
  Stock,
  partOfStock,
  StockWithID,
};

export default router;
