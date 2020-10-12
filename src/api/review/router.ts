import express from 'express';
import { isArrayEmpty } from '../../utils/isEmpty';
import { Review, reviewDetails, partOfReview } from './types';
import { requireJsonBody } from '../../middlewares';
import getReviews from './getReviews';
import addReview from './addReview';
import updateReview from './updateReview';
import removeReview from './removeReview';
import getCustomerID from '../../utils/getCustomerID';

const router = express.Router();

router.get('/:ShoeID', async (req, res, next) => {
  // get reviews for a shoe
  try {
    const { ShoeID } = req.params;

    const results: Review[] = await getReviews(ShoeID);

    res.json({
      success: true,
      data: results,
      empty: isArrayEmpty(results),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/:ShoeID', requireJsonBody, async (req, res, next) => {
  // add a new review

  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    const json: reviewDetails = req.body;

    const result = await addReview(CustomerID, ShoeID, json);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:ShoeID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple table of a review
  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    const fields: partOfReview = req.body;

    const result = await updateReview(CustomerID, ShoeID, fields);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ShoeID', async (req, res, next) => {
  // remove a review
  try {
    const { ShoeID } = req.params;
    const CustomerID = getCustomerID(req);

    const result = await removeReview(CustomerID, ShoeID);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
