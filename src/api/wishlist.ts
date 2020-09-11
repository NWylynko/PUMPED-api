import express from 'express';

const router = express.Router();

router.get('/:customerID', async (req, res, next) => {
  // get a customers wishlist
  try {
    
  } catch (error) {
    res.json({});
  }
});

router.post('/:customerID', async (req, res, next) => {
  // add a new wishlist item
  try {
    
  } catch (error) {
    res.json({});
  }
});

router.delete('/:customerID/:id', async (req, res, next) => {
  // remove a wishlist item
  try {
    
  } catch (error) {
    res.json({});
  }
});

router.delete('/:customerID', async (req, res, next) => {
  // clear a wishlist
  try {
    
  } catch (error) {
    res.json({});
  }
});

export default router;
