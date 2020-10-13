import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import { Style, partOfStyle } from './types';
import { getStyle } from './getStyle';
import { addStyle } from './addStyle';
import { updateStyle } from './updateStyle';
import { removeStyle } from './removeStyle';

const router = express.Router();

router.get('/:StyleID', async (req, res, next) => {
  // get a style by id
  try {
    const { StyleID } = req.params;

    const result = await getStyle(StyleID);

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
  // add a new style
  try {
    const fields: Style = req.body;

    res.json({
      success: true,
      data: await addStyle(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:StyleID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a style
  try {
    const { StyleID } = req.params;
    const fields: partOfStyle = req.body;

    res.json({
      success: true,
      data: await updateStyle(StyleID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:StyleID', async (req, res, next) => {
  // remove a style by id
  try {
    const { StyleID } = req.params;

    res.json({
      success: true,
      data: await removeStyle(StyleID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
