import router from './router';

import addShoe from './addShoe';
import getAllShoes from './getAllShoes';
import getShoe from './getShoe';
import removeShoe from './removeShoe';
import updateShoe from './updateShoe';

import {
  Shoe,
  PartOfShoe,
  newShoe,
  ShoeWithColours,
  GetAllShoes,
} from './types';

export {
  addShoe,
  getAllShoes,
  getShoe,
  removeShoe,
  updateShoe,
  Shoe,
  PartOfShoe,
  newShoe,
  ShoeWithColours,
  GetAllShoes,
};

export default router;
