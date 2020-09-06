import express from 'express';

const router = express.Router();

router.get('/:id', async (req, res) => {
  // get single customer
  res.json({});
});

router.post('/', async (req, res) => {
  // add a new customer
  res.json({});
});

router.put('/:id', async (req, res) => {
  // update the entire content of a customer
  res.json({});
});

router.patch('/:id', async (req, res) => {
  // update a single or multiple table of a customer
  res.json({});
});

router.delete('/:id', async (req, res) => {
  // remove a customer
  res.json({});
});

export default router;
