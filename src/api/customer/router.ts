import express from 'express';
import { isEmpty } from '../../utils/isEmpty';
import { Customer } from './types';
import { requireJsonBody } from '../../middlewares';

import getCustomer from './getCustomer';
import addCustomer from './addCustomer';
import updateCustomer from './updateCustomer';
import removeCustomer from './removeCustomer';

const router = express.Router();

router.get('/:CustomerID', async (req, res, next) => {
  // get single customer
  try {
    const { CustomerID } = req.params;

    const data: Customer = await getCustomer(CustomerID);

    res.json({
      success: true,
      data,
      empty: isEmpty(data),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', requireJsonBody, async (req, res, next) => {
  // add a new customer
  try {
    const newCustomer: Customer = req.body;

    res.json({
      success: true,
      data: await addCustomer(newCustomer),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:CustomerID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple table of a customer
  try {
    const { CustomerID } = req.params;
    const fields: Customer = req.body;

    res.json({
      success: true,
      data: await updateCustomer(CustomerID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:CustomerID', async (req, res, next) => {
  // remove a customer
  try {
    const { CustomerID } = req.params;

    res.json({
      success: true,
      data: await removeCustomer(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
