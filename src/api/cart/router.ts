import express from 'express';
import { requireJsonBody } from '../../middlewares';
import getCustomerID from '../../utils/getCustomerID';
import checkoutCart from './checkoutCart';

const router = express.Router();

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

export default router;
