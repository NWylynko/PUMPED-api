import express from 'express';

import shoes from './shoes';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    endpoints: {
      shoes: '/shoes',
    },
  });
});

router.use('/shoes', shoes);

export default router;
