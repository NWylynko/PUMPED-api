import router from './router';

import addCartItem from './addCartItem';
import checkoutCart from './checkoutCart';
import clearCart from './clearCart';
import getCart from './getCart';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';
import removeCartItem from './removeCartItem';
import updateCartItem from './updateCartItem';

import type { ShoePrices } from './types';

export {
  addCartItem,
  checkoutCart,
  clearCart,
  getCart,
  getCartOrderIDFromCustomerID,
  removeCartItem,
  updateCartItem,
};

export type {
  ShoePrices,
};

export default router;
