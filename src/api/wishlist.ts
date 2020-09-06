import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res) => {
  // get a customers wishlist
  res.json({});
});

router.post('/:customerID', async (req, res) => {
  // add a new wishlist item
  res.json({});
});

router.put('/:customerID/:id', async (req, res) => {
  // update the entire content of a wishlist item
  res.json({});
});

router.patch('/:customerID/:id', async (req, res) => {
  // update a single or multiple table of a wishlist item
  res.json({});
});

router.delete('/:customerID/:id', async (req, res) => {
  // remove a wishlist item
  res.json({});
});

router.delete('/:customerID', async (req, res) => {
  // clear a wishlist
  res.json({});
});

export default router;
