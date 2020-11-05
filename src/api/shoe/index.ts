import router from './router';

import addShoe from './addShoe';
import getAllShoes from './getAllShoes';
import getShoe from './getShoe';
import removeShoe from './removeShoe';
import updateShoe from './updateShoe';

import type {
  Shoe,
  PartOfShoe,
  newShoe,
  ShoeWithDetails,
  GetAllShoes,
} from './types';

export {
  addShoe,
  getAllShoes,
  getShoe,
  removeShoe,
  updateShoe,
};

export type {
  Shoe,
  PartOfShoe,
  newShoe,
  ShoeWithDetails as ShoeWithColours,
  GetAllShoes,
};

export default router;
