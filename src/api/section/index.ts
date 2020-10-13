import router from './router';

import { getSection } from './getSection';
import { addSection } from './addSection';
import { updateSection } from './updateSection';
import { removeSection } from './removeSection';

import { Section, partOfSection, SectionWithID } from './types';

export {
  getSection,
  addSection,
  updateSection,
  removeSection,
  Section,
  partOfSection,
  SectionWithID,
};

export default router;
