import express from 'express';
import { isEmpty } from '../../utils/isEmpty';
import { Customer } from './types';
import { requireJsonBody } from '../../middlewares';
import getCustomerID from '../../utils/getCustomerID';

import getCustomer from './getCustomer';
import addCustomer from './addCustomer';
import updateCustomer from './updateCustomer';
import removeCustomer from './removeCustomer';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // get single customer
  try {
    const CustomerID = getCustomerID(req);

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

router.patch('/', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a customer
  try {
    const CustomerID = getCustomerID(req);
    const fields: Customer = req.body;

    res.json({
      success: true,
      data: await updateCustomer(CustomerID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  // remove a customer by id
  try {
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await removeCustomer(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
