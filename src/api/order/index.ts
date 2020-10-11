import router from './router';

import getOrders from './getOrders';
import getOrderItems from './getOrderItems';
import updateOrderItem from './updateOrderItem';
import removeOrderItem from './removeOrderItem';
import removeOrder from './removeOrder';

import { Order, OrderItem, partOfOrderItem } from './types';

export {
  getOrders,
  getOrderItems,
  updateOrderItem,
  removeOrderItem,
  removeOrder,
  Order,
  OrderItem,
  partOfOrderItem,
};

export default router;
