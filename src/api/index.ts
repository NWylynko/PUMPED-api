import express from 'express';

import indexHandlers from './indexHandlers';

import brand from './brand';
import cart from './cart';
import collection from './collection';
import colour from './colour';
import customer from './customer';
import image from './image';
import order from './order';
import review from './review';
import section from './section';
import shoe from './shoe';
import stock from './stock';
import style from './style';
import tag from './tag';
import wishlist from './wishlist';

import search from './search';

const router = express.Router();

router.use('/', indexHandlers);

router.use('/brand', brand);
router.use('/cart', cart);
router.use('/collection', collection);
router.use('/colour', colour);
router.use('/customer', customer);
router.use('/image', image);
router.use('/order', order);
router.use('/review', review);
router.use('/section', section);
router.use('/shoe', shoe);
router.use('/stock', stock);
router.use('/style', style);
router.use('/tag', tag);
router.use('/wishlist', wishlist);

router.use('/search', search);

export default router;
