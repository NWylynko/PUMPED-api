import express from 'express';
import { isArrayEmpty } from '../../utils/isEmpty';
import getCustomerID from '../../utils/getCustomerID';

import { Order, OrderItem, partOfOrderItem } from './types';

import getOrders from './getOrders';
import getOrderItems from './getOrderItems';
import updateOrderItem from './updateOrderItem';
import removeOrderItem from './removeOrderItem';
import removeOrder from './removeOrder';

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

router.patch('/:OrderID/:ShoeID', async (req, res, next) => {
  // update a single or multiple table of a order item
  try {
    const { OrderID, ShoeID } = req.params;
    const fields: partOfOrderItem = req.body;

    res.json({
      success: true,
      data: await updateOrderItem(OrderID, ShoeID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:OrderID/:ShoeID', async (req, res, next) => {
  // remove an order item
  try {
    const { OrderID, ShoeID } = req.params;

    res.json({
      success: true,
      data: await removeOrderItem(OrderID, ShoeID),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:OrderID', async (req, res, next) => {
  // remove an order
  try {
    const { OrderID } = req.params;

    res.json({
      success: true,
      data: await removeOrder(OrderID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
