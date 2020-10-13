import express from 'express';
import { isArrayEmpty, isEmpty } from '../../utils/isEmpty';
import { requireJsonBody } from '../../middlewares';
import { newShoe, PartOfShoe } from './types';

import getAllShoes from './getAllShoes';
import getShoe from './getShoe';
import addShoe from './addShoe';
import updateShoe from './updateShoe';
import removeShoe from './removeShoe';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // get all shoes

  try {
    const results = await getAllShoes(req.query);

    res.json({
      success: true,
      data: results,
      empty: isArrayEmpty(results),
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:ShoeID', async (req, res, next) => {
  // get single shoe

  try {
    const { ShoeID } = req.params;

    const result = await getShoe(ShoeID);

    res.json({
      success: true,
      data: result,
      empty: isEmpty(result),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', requireJsonBody, async (req, res, next) => {
  // add a new shoe

  try {
    const json: newShoe = req.body;

    res.json({
      success: true,
      data: await addShoe(json),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:ShoeID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements in a shoe
  try {
    const { ShoeID } = req.params;

    const fields: PartOfShoe = req.body;

    const result = await updateShoe(ShoeID, fields);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ShoeID', async (req, res, next) => {
  // remove a shoe
  try {
    const { ShoeID } = req.params;

    const result = await removeShoe(ShoeID);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
