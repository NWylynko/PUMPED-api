import express from 'express';

import indexHandlers from './indexHandlers';

import brand from './brand';
import cart from './cart';
import collection from './collection';
import customer from './customer';
import image from './image';
import order from './order';
import review from './review';
import section from './section';
import shoe from './shoe';
import wishlist from './wishlist';

import search from './search';

const router = express.Router();

router.use('/', indexHandlers);

router.use('/brand', brand);
router.use('/cart', cart);
router.use('/collection', collection);
router.use('/customer', customer);
router.use('/image', image);
router.use('/order', order);
router.use('/review', review);
router.use('/section', section);
router.use('/shoe', shoe);
router.use('/wishlist', wishlist);

router.use('/search', search);

export default router;
