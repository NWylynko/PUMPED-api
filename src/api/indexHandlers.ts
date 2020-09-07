import express from 'express';
import db, { SQL, resetDB, openDB } from '../db';

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

router.get('/reset', async (req, res) => {
  // reset database

  try {
    await resetDB('./main.db');
    await openDB('./main.db');

    await db.run(SQL.tables);

    res.json({ success: true });
  } catch (error) {
    res.json({ error });
  }
});

export default router;
