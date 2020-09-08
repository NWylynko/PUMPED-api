import express from 'express';
import db, { SQL } from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    endpoints: {
      cart: '/cart',
      customer: '/customer',
      image: '/image',
      order: '/order',
      review: '/review',
      shoe: '/shoe',
      wishlist: '/wishlist',
    },
  });
});

router.get('/createTables', async (req, res, next) => {
  try {
    res.json({
      Brand: await db.run(SQL.tables.Brand) || 'Success',
      Cart: await db.run(SQL.tables.Cart) || 'Success',
      Collection: await db.run(SQL.tables.Collection) || 'Success',
      Colour: await db.run(SQL.tables.Colour) || 'Success',
      ColourImage: await db.run(SQL.tables.ColourImage) || 'Success',
      Customer: await db.run(SQL.tables.Customer) || 'Success',
      Image: await db.run(SQL.tables.Image) || 'Success',
      Order: await db.run(SQL.tables.Order) || 'Success',
      OrderItem: await db.run(SQL.tables.OrderItem) || 'Success',
      Review: await db.run(SQL.tables.Review) || 'Success',
      Section: await db.run(SQL.tables.Section) || 'Success',
      Shoe: await db.run(SQL.tables.Shoe) || 'Success',
      ShoeTag: await db.run(SQL.tables.ShoeTag) || 'Success',
      Stock: await db.run(SQL.tables.Stock) || 'Success',
      Style: await db.run(SQL.tables.Style) || 'Success',
      Tag: await db.run(SQL.tables.Tag) || 'Success',
      WishList: await db.run(SQL.tables.WishList) || 'Success',
      Success: true,
    });
  } catch (error) {
    next(new Error(error));
  }
});

router.get('/error', async (req, res, next) => {
  next(new Error('lol'));
});

export default router;
