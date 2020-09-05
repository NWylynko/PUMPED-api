import express from 'express';

import data from '../testData';

const router = express.Router();

router.get('/', (req, res) => {
  res.json(data.shoes);
});

export default router;
