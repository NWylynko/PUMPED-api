import express from 'express';
import resetDB from '../utils/resetDB';

const router = express.Router();

router.get('/', async (req, res) => {
  res.json({
    ping: 'pong',
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
