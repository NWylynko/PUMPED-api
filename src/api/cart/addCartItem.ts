import SQL from 'sql-template-tag';
import { partOfOrderItem } from '../order';
import getOrderIDFromCustomerID from './getOrderIDFromCustomerID';
import db from '../../db';

export async function addCartItem(
  CustomerID: string,
  ShoeID: string,
  { StockID, quantity = 1 }: partOfOrderItem,
) {
  if (!StockID) {
    throw new Error('stock id not supplied');
  }

  const OrderID = await getOrderIDFromCustomerID(CustomerID);

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

  return { CustomerID, ShoeID };
}

export default addCartItem;
