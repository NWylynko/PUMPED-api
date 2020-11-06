import SQL from 'sql-template-tag';
import type { partOfOrderItem } from '../order';
import type { AddedToCart } from './types';
import getCartOrderIDFromCustomerID from './getCartOrderIDFromCustomerID';
import db from '../../db';

export async function addCartItem(
  CustomerID: number,
  ShoeID: number,
  { StockID, quantity = 1 }: partOfOrderItem,
): Promise<AddedToCart> {
  if (!StockID) {
    throw new Error('stock id not supplied');
  }

  const OrderID = await getCartOrderIDFromCustomerID(CustomerID);

  const { sql, values } = SQL`
    INSERT INTO OrderItem
    (
      "OrderID", 
      "ShoeID", 
      "StockID",
      "quantity"
    ) VALUES (
      ${OrderID}, 
      ${ShoeID}, 
      ${StockID},
      ${quantity}
    );
  `;

  await db.run(sql, values);

  return {
    CustomerID, ShoeID, OrderID, StockID, quantity,
  };
}

export default addCartItem;
