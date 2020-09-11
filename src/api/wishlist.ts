import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res, next) => {
  // get a customers wishlist
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

router.post('/:customerID', async (req, res, next) => {
  // add a new wishlist item
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

router.delete('/:customerID/:id', async (req, res, next) => {
  // remove a wishlist item
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

router.delete('/:customerID', async (req, res, next) => {
  // clear a wishlist
  try {

    const data = {}

    res.json({ 
      success: true,
      data
    });
  } catch (error) {
    next(error)
  }
});

export default router;
