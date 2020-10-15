import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import type { Collection, partOfCollection } from './types';
import { getCollection } from './getCollection';
import { addCollection } from './addCollection';
import { updateCollection } from './updateCollection';
import { removeCollection } from './removeCollection';
import num from '../../utils/num';

const router = express.Router();

router.get('/:CollectionID', async (req, res, next) => {
  // get a collection by id
  try {
    const { CollectionID } = req.params;

    const result = await getCollection(num(CollectionID));

    res.json({
      success: true,
      data: result,
      empty: isEmpty(result),
    });
  } catch (error) {
    next(error);
  }
});

router.post('/', requireJsonBody, async (req, res, next) => {
  // add a new collection
  try {
    const fields: Collection = req.body;

    res.json({
      success: true,
      data: await addCollection(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:CollectionID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a collection
  try {
    const { CollectionID } = req.params;
    const fields: partOfCollection = req.body;

    res.json({
      success: true,
      data: await updateCollection(num(CollectionID), fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:CollectionID', async (req, res, next) => {
  // remove a collection by id
  try {
    const { CollectionID } = req.params;

    res.json({
      success: true,
      data: await removeCollection(num(CollectionID)),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
