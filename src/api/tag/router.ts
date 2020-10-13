import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import { Tag, partOfTag } from './types';
import { getTag } from './getTag';
import { addTag } from './addTag';
import { updateTag } from './updateTag';
import { removeTag } from './removeTag';

const router = express.Router();

router.get('/:TagID', async (req, res, next) => {
  // get a tag by id
  try {
    const { TagID } = req.params;

    const result = await getTag(TagID);

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
  // add a new tag
  try {
    const fields: Tag = req.body;

    res.json({
      success: true,
      data: await addTag(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:TagID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a tag
  try {
    const { TagID } = req.params;
    const fields: partOfTag = req.body;

    res.json({
      success: true,
      data: await updateTag(TagID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:TagID', async (req, res, next) => {
  // remove a tag by id
  try {
    const { TagID } = req.params;

    res.json({
      success: true,
      data: await removeTag(TagID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
