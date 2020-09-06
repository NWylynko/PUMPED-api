import express from 'express';

import cart from './cart';
import customer from './customer';
import image from './image';
import order from './order';
import review from './review';
import shoe from './shoe';
import wishlist from './wishlist';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    endpoints: {
      cart: '/cart',
      customer: '/customer',
      image: '/image',
      order: '/order',
      review: '/review',
      shoe: '/shoe',
      wishlist: '/wishlist',
    },
  });
});

router.use('/cart', cart);
router.use('/customer', customer);
router.use('/image', image);
router.use('/order', order);
router.use('/review', review);
router.use('/shoe', shoe);
router.use('/wishlist', wishlist);

export default router;
