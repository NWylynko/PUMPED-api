import express from 'express';
import { requireJsonBody } from '../../middlewares';
import checkoutCart from './checkoutCart';

const router = express.Router();

router.post('/checkout/:CustomerID', requireJsonBody, async (req, res, next) => {
  // checkout the cart to be an order
  try {
    const { CustomerID } = req.params;
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
