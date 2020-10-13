import router from './router'

import { getBrand } from './getBrand';
import { addBrand } from './addBrand';
import { updateBrand } from './updateBrand';
import { removeBrand } from './removeBrand';

import { Brand, partOfBrand, BrandWithID } from './types'

export {
  getBrand,
  addBrand,
  updateBrand,
  removeBrand,
  Brand,
  partOfBrand,
  BrandWithID
}

export default router