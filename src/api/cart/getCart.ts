import { getOrderItems } from '../order';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';

export async function getCart(CustomerID: string) {
  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  return getOrderItems(OrderID);
}

export default getCart;
