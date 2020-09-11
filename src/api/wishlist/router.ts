import express from 'express';
import { isEmpty } from '../../utils/isEmpty';

import addWishListItem from './addWishListItem';
import clearWishList from './clearWishList';
import getWishlist from './getWishlist';
import removeWishListItem from './removeWishListItem';

const router = express.Router();

router.get('/:CustomerID', async (req, res, next) => {
  // get a customers wishlist
  try {
    const { CustomerID } = req.params;

    const results = await getWishlist(CustomerID);

    res.json({
      success: true,
      data: results,
      empty: isEmpty(results),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/:CustomerID/:ShoeID', async (req, res, next) => {
  // add a new wishlist item
  try {
    const { CustomerID, ShoeID } = req.params;

    res.json({
      success: true,
      data: await addWishListItem(CustomerID, ShoeID),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:CustomerID/:ShoeID', async (req, res, next) => {
  // remove a wishlist item
  try {
    const { CustomerID, ShoeID } = req.params;

    res.json({
      success: true,
      data: await removeWishListItem(CustomerID, ShoeID),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:CustomerID', async (req, res, next) => {
  // clear a wishlist
  try {
    const { CustomerID } = req.params;

    res.json({
      success: true,
      data: await clearWishList(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
