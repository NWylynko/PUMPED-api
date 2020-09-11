import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res, next) => {
  // get a customers cart
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
  // add a new item to cart
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

router.patch('/:customerID/:id', async (req, res, next) => {
  // update a single or multiple table of a cart item
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
  // remove a cart item
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
  // clear a cart
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
