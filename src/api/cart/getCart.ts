import { getOrderItems } from '../order';
import getOrderIDFromCustomerID from './getOrderIDFromCustomerID';

export async function getCart(CustomerID: string) {
  const OrderID = await getOrderIDFromCustomerID(CustomerID);

  return getOrderItems(OrderID);
}

export default getCart;
