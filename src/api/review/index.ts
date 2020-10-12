import router from './router';

import addReview from './addReview';
import getReviews from './getReviews';
import reCalculateStars from './reCalculateStars';
import removeReview from './removeReview';
import updateReview from './updateReview';

import { reviewDetails, Review, partOfReview } from './types';

export {
  addReview,
  getReviews,
  reCalculateStars,
  removeReview,
  updateReview,
  reviewDetails,
  Review,
  partOfReview,
};

export default router;
