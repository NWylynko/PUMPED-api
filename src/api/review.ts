import express from 'express';

const router = express.Router();

router.get('/:shoeID', async (req, res) => {
  // get reviews for a shoe
  res.json({});
});

router.post('/:shoeID', async (req, res) => {
  // add a new review
  res.json({});
});

router.put('/:id', async (req, res) => {
  // update the entire content of a review
  res.json({});
});

router.patch('/:id', async (req, res) => {
  // update a single or multiple table of a review
  res.json({});
});

router.delete('/:id', async (req, res) => {
  // remove a review
  res.json({});
});

export default router;
