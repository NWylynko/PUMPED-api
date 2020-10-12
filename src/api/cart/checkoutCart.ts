import SQL from 'sql-template-tag';
import db from '../../db';
import { getOrderIDFromCustomerID } from './getOrderIDFromCustomerID';

interface ShoePrices {
  ShoeID: number;
  price: number;
}

async function checkoutCart(CustomerID: string, address: string) {
  // get order id, this gets the id of the order of cart for the customer
  // each customer will have an order that has activeCart set to 1 (true)
  // this then gets converted to a placed order when the customer checks out
  // to convert it, set activeCart to 0 (false)
  // the shoes prices will then be set and cant be changed
  // before the customer checkouts the shoes prices might change due to promotions
  // or if they go up in price
  // but once the customer checkouts the shoes prices get set to the order Item for record keeping
  // the orders delivery address gets set and dateOfPurchase gets set
  // the paid attribute doesn't get set to 1 (true) until /cart/pay gets called by the customer
  // a new order is made with activeCart set to 1 (true) and assigned to the customer
  const OrderID = await getOrderIDFromCustomerID(CustomerID);

  if (!OrderID) {
    throw new Error('no order ID');
  }

  // get the shoe prices for the shoes in the cart
  const shoePrices: ShoePrices[] = await (() => {
    const { sql, values } = SQL`
      SELECT OrderItem.ShoeID, Shoe.price
      FROM "Order", OrderItem, Shoe
      WHERE "Order".CustomerID = ${CustomerID}
      AND "Order".ID = ${OrderID}
      AND "Order".ID = OrderItem.OrderID
      AND OrderItem.ShoeID = Shoe.ID
    `;

    return db.all(sql, values);
  })();

  if (shoePrices.length === 0) {
    throw new Error('no shoes in order');
  }

  // for each shoe set the price from the step above
  await Promise.all(shoePrices.map(({ ShoeID, price }) => {
    const { sql, values } = SQL`
      UPDATE OrderItem SET
      price = ${price}
      WHERE OrderID = ${OrderID}
      AND ShoeID = ${ShoeID}
    `;

    return db.run(sql, values);
  }));

  // set the date of purchase to right now
  // set the delivery address to the address given
  // set this order to not the active cart as its now checked out
  await (() => {
    const { sql, values } = SQL`
      UPDATE "Order" SET
      dateOfPurchase = ${Date.now()},
      deliveryAddress = ${address},
      activeCart = 0
      WHERE ID = ${OrderID}
    `;

    return db.run(sql, values);
  })();

  // create the new blank order for the customer to use as a cart
  await (() => {
    const { sql, values } = SQL`
      INSERT INTO "Order"
      (
        "CustomerID",
        "paid",
        "activeCart"
      ) VALUES (
        ${CustomerID},
        0,
        1
      )
    `;

    return db.run(sql, values);
  })();

  return { CustomerID, OrderID };
}

export default checkoutCart;
