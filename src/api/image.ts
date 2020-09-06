import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
  // get all images
  res.json({});
});

router.get('/:id', async (req, res) => {
  // get single image
  res.json({});
});

router.post('/', async (req, res) => {
  // add a new image
  res.json({});
});

router.put('/:id', async (req, res) => {
  // update the entire content of a image
  res.json({});
});

router.patch('/:id', async (req, res) => {
  // update a single or multiple table of a image
  res.json({});
});

router.delete('/:id', async (req, res) => {
  // remove a image
  res.json({});
});

export default router;
