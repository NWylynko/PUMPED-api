import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res) => {
  // get a customers cart
  res.json({});
});

router.post('/:customerID', async (req, res) => {
  // add a new item to cart
  res.json({});
});

router.put('/:customerID/:id', async (req, res) => {
  // update the entire content of a cart item
  res.json({});
});

router.patch('/:customerID/:id', async (req, res) => {
  // update a single or multiple table of a cart item
  res.json({});
});

router.delete('/:customerID/:id', async (req, res) => {
  // remove a cart item
  res.json({});
});

router.delete('/:customerID', async (req, res) => {
  // clear a cart
  res.json({});
});

export default router;
