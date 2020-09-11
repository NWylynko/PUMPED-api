import express from 'express';
import { isArrayEmpty, isEmpty } from '../../utils/isEmpty';
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

router.get('/:ID', async (req, res, next) => {
  // get single shoe

  try {
    const { ID } = req.params;

    const result = await getShoe(ID);

    res.json({
      success: true,
      data: result,
      empty: isEmpty(result),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  // add a new shoe

  try {
    const json: newShoe = req.body;

    if (Object.keys(json).length === 0) {
      throw new Error('no data sent');
    }

    res.json({
      success: true,
      data: await addShoe(json),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:ID', async (req, res, next) => {
  // update a single or multiple items in a shoe
  try {
    const { ID } = req.params;

    const fields: PartOfShoe = req.body;

    if (Object.keys(req.body).length === 0) {
      throw new Error('no data sent');
    }

    const result = await updateShoe(ID, fields);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ID', async (req, res, next) => {
  // remove a shoe
  try {
    const { ID } = req.params;

    const result = await removeShoe(ID);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
