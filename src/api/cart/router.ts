import express from 'express';
import { requireJsonBody } from '../../middlewares';
import getCustomerID from '../../utils/getCustomerID';
import { partOfOrderItem } from '../order';
import checkoutCart from './checkoutCart';
import clearCart from './clearCart';
import removeCartItem from './removeCartItem';
import updateCartItem from './updateCartItem';

import { addCartItem } from './addCartItem';
import { getCart } from './getCart';
import num from '../../utils/num';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await getCart(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/add/:ShoeID', requireJsonBody, async (req, res, next) => {
  try {
    const CustomerID = getCustomerID(req);
    const { ShoeID } = req.params;
    const fields: partOfOrderItem = req.body;

    res.json({
      success: true,
      data: await addCartItem(CustomerID, num(ShoeID), fields),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/checkout', requireJsonBody, async (req, res, next) => {
  // checkout the cart to be an order
  try {
    const CustomerID = getCustomerID(req);
    const { address } = req.body;

    if (!address) {
      throw new Error('no address supplied');
    }

    res.json({
      success: true,
      data: await checkoutCart(CustomerID, address),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:ShoeID', async (req, res, next) => {
  // update a single or multiple parts of a cart item
  try {
    const CustomerID = getCustomerID(req);
    const { ShoeID } = req.params;
    const fields: partOfOrderItem = req.body;

    res.json({
      success: true,
      data: await updateCartItem(CustomerID, num(ShoeID), fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ShoeID', async (req, res, next) => {
  // remove an order item
  try {
    const CustomerID = getCustomerID(req);
    const { ShoeID } = req.params;

    res.json({
      success: true,
      data: await removeCartItem(CustomerID, num(ShoeID)),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  // remove an order
  try {
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await clearCart(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
