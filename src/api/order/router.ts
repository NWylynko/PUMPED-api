import express from 'express';
import { isArrayEmpty } from '../../utils/isEmpty';
import getCustomerID from '../../utils/getCustomerID';

import type { Order, OrderItem } from './types';

import getOrders from './getOrders';
import getOrderItems from './getOrderItems';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // get a customers orders
  try {
    const CustomerID = getCustomerID(req);

    const results: Order[] = await getOrders(CustomerID);

    res.json({
      success: true,
      data: results,
      empty: isArrayEmpty(results),
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:OrderID', async (req, res, next) => {
  // get a customers order items
  try {
    const { OrderID } = req.params;

    const results: OrderItem[] = await getOrderItems(OrderID);

    res.json({
      success: true,
      data: results,
      empty: isArrayEmpty(results),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
