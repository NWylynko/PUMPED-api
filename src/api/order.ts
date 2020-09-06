import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res) => {
  // get a customers orders
  res.json({});
});

router.post('/:customerID', async (req, res) => {
  // add a new order
  res.json({});
});

router.put('/:customerID/:id', async (req, res) => {
  // update the entire content of a order item
  res.json({});
});

router.patch('/:customerID/:id', async (req, res) => {
  // update a single or multiple table of a order item
  res.json({});
});

router.delete('/:customerID/:id', async (req, res) => {
  // remove a order item
  res.json({});
});

router.delete('/:customerID', async (req, res) => {
  // remove an order
  res.json({});
});

export default router;
