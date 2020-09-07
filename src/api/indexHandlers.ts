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
    const result = await db.run(SQL.tables);
    res.json({ success: true, result });
  } catch (error) {
    next(error);
  }
});

router.get('/error', async (req, res, next) => {
  next('lol');
});

export default router;
