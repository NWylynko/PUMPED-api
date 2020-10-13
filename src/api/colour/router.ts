import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import { Colour, partOfColour } from './types';
import { getColour } from './getColour';
import { addColour } from './addColour';
import { updateColour } from './updateColour';
import { removeColour } from './removeColour';

const router = express.Router();

router.get('/:ColourID', async (req, res, next) => {
  // get a colour by id
  try {
    const { ColourID } = req.params;

    const result = await getColour(ColourID);

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
  // add a new colour
  try {
    const fields: Colour = req.body;

    res.json({
      success: true,
      data: await addColour(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:ColourID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a colour
  try {
    const { ColourID } = req.params;
    const fields: partOfColour = req.body;

    res.json({
      success: true,
      data: await updateColour(ColourID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:ColourID', async (req, res, next) => {
  // remove a colour by id
  try {
    const { ColourID } = req.params;

    res.json({
      success: true,
      data: await removeColour(ColourID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
