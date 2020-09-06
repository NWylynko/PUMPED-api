import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  // get all shoes
  res.json({});
});

router.get('/:id', async (req, res) => {
  // get single shoe
  res.json({});
});

router.post('/', async (req, res) => {
  // add a new shoe
  res.json({});
});

router.put('/:id', async (req, res) => {
  // update the entire content of a shoe
  res.json({});
});

router.patch('/:id', async (req, res) => {
  // update a single or multiple table of a shoe
  res.json({});
});

router.delete('/:id', async (req, res) => {
  // remove a shoe
  res.json({});
});

export default router;
