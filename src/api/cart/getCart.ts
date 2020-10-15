import { getOrderItems } from '../order';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';

export async function getCart(CustomerID: number) {
  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  return getOrderItems(OrderID);
}

export default getCart;
