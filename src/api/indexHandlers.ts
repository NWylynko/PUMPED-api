import express from 'express';
import resetDB from '../utils/resetDB';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    endpoints: {
      cart: '/cart',
      customer: '/customer',
      image: '/image',
      order: '/order',
      review: '/review',
      search: '/search',
      shoe: '/shoe',
      wishlist: '/wishlist',
      index: {
        createTables: '/createTables',
        createTestData: '/createTestData',
      },
    },
  });
});

router.get('/resetDB', async (req, res, next) => {
  try {
    await resetDB();
    res.json({
      success: true,
    });
  } catch (error) {
    next(new Error(error));
  }
});

router.get('/error', async (req, res, next) => {
  next(new Error('lol'));
});

export default router;
