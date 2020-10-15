import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import type { Stock, partOfStock } from './types';
import { getStock } from './getStock';
import { addStock } from './addStock';
import { updateStock } from './updateStock';
import { removeStock } from './removeStock';
import num from '../../utils/num';

const router = express.Router();

router.get('/:StockID', async (req, res, next) => {
  // get a stock by id
  try {
    const { StockID } = req.params;

    const result = await getStock(num(StockID));

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
  // add a new stock
  try {
    const fields: Stock = req.body;

    res.json({
      success: true,
      data: await addStock(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:StockID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a stock
  try {
    const { StockID } = req.params;
    const fields: partOfStock = req.body;

    res.json({
      success: true,
      data: await updateStock(num(StockID), fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:StockID', async (req, res, next) => {
  // remove a stock by id
  try {
    const { StockID } = req.params;

    res.json({
      success: true,
      data: await removeStock(num(StockID)),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
