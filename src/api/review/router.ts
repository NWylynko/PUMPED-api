import express from 'express';

const router = express.Router();

router.get('/:shoeID', async (req, res, next) => {
  // get reviews for a shoe
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

router.post('/:shoeID', async (req, res, next) => {
  // add a new review

  // re-calculate the averageStars of the shoe
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
  // update a single or multiple table of a review
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
  // remove a review
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
