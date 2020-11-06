import addColour from './addColour';
import getColour from './getColour';
import removeColour from './removeColour';
import type { partOfColour, updatedColour } from './types';

export async function updateColour(
  ColourID: number,
  newFields: partOfColour,
): Promise<updatedColour> {
  const fields = await getColour(ColourID);
  await removeColour(ColourID);
  await addColour({ ...fields, ...newFields });

  return { ColourID, ...fields };
}

export default updateColour;
