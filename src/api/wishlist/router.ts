import express from 'express';
import { isEmpty } from '../../utils/isEmpty';
import getCustomerID from '../../utils/getCustomerID';
import num from '../../utils/num';

import addWishListItem from './addWishListItem';
import isInWishlist from './isInWishlist';
import clearWishList from './clearWishList';
import getWishlist from './getWishlist';
import removeWishListItem from './removeWishListItem';

const router = express.Router();

router.get('/', async (req, res, next) => {
  // get a customers wishlist
  try {
    const CustomerID = getCustomerID(req);

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

router.get('/:ShoeID', async (req, res, next) => {
  // returns true if the shoe is in the customeres wishlist or false if not
  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    const result = await isInWishlist(CustomerID, ShoeID);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/:ShoeID', async (req, res, next) => {
  // add a new wishlist item
  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await addWishListItem(CustomerID, num(ShoeID)),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ShoeID', async (req, res, next) => {
  // remove a wishlist item
  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await removeWishListItem(CustomerID, num(ShoeID)),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/', async (req, res, next) => {
  // clear a wishlist
  try {
    const CustomerID = getCustomerID(req);

    res.json({
      success: true,
      data: await clearWishList(CustomerID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
