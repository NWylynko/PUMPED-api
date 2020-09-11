import express from 'express';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
  // get single image
  try {

    // send image
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  // add a new image
  try {
    const data = {};

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  // update a single or multiple table of a image
  try {
    const data = {};

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  // remove a image
  try {
    const data = {};

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
