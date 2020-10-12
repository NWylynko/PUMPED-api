import router from './router';

import addWishListItem from './addWishListItem';
import clearWishList from './clearWishList';
import getWishlist from './getWishlist';
import removeWishListItem from './removeWishListItem';

import { WishList, WishListWithShoe } from './types';

export {
  addWishListItem,
  clearWishList,
  getWishlist,
  removeWishListItem,
  WishList,
  WishListWithShoe,
};

export default router;
