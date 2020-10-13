import express from 'express';
import { requireJsonBody } from '../../middlewares';
import { isEmpty } from '../../utils/isEmpty';
import { Section, partOfSection } from './types';
import { getSection } from './getSection';
import { addSection } from './addSection';
import { updateSection } from './updateSection';
import { removeSection } from './removeSection';

const router = express.Router();

router.get('/:SectionID', async (req, res, next) => {
  // get a section by id
  try {
    const { SectionID } = req.params;

    const result = await getSection(SectionID);

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
  // add a new section
  try {
    const fields: Section = req.body;

    res.json({
      success: true,
      data: await addSection(fields),
    });
  } catch (error) {
    next(error);
  }
});

router.patch('/:SectionID', requireJsonBody, async (req, res, next) => {
  // update a single or multiple elements of a section
  try {
    const { SectionID } = req.params;
    const fields: partOfSection = req.body;

    res.json({
      success: true,
      data: await updateSection(SectionID, fields),
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:SectionID', async (req, res, next) => {
  // remove a section by id
  try {
    const { SectionID } = req.params;

    res.json({
      success: true,
      data: await removeSection(SectionID),
    });
  } catch (error) {
    next(error);
  }
});

export default router;
