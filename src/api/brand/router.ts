import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import { Brand, partOfBrand } from './types'
import { getBrand } from './getBrand';
import { addBrand } from './addBrand';
import { updateBrand } from './updateBrand';
import { removeBrand } from './removeBrand';

const router = express.Router();

router.get('/:BrandID', async (req, res, next) => {
  try {

    const { BrandID } = req.params

    const result = await getBrand(BrandID)

    res.json({
      success: true,
      data: result,
      empty: isEmpty(result)
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', requireJsonBody, async (req, res, next) => {
  try {
    const fields: Brand = req.body

    res.json({
      success: true,
      data: await addBrand(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:BrandID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple table of a customer
  try {
    const { BrandID } = req.params
    const fields: partOfBrand = req.body;

    res.json({
      success: true,
      data: await updateBrand(BrandID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:BrandID', async (req, res, next) => {
  // remove a customer
  try {

    const { BrandID } = req.params

    res.json({
      success: true,
      data: await removeBrand(BrandID),
    });
  } catch (error) {
    next(error);
  }
});


export default router