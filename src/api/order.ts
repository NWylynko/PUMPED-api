import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res, next) => {
  // get a customers orders
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
  // add a new order
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
  // update a single or multiple table of a order item
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
  // remove an order item
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
  // remove an order
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
