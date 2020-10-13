import router from './router'

import { getCollection } from './getCollection';
import { addCollection } from './addCollection';
import { updateCollection } from './updateCollection';
import { removeCollection } from './removeCollection';

import { Collection, partOfCollection, CollectionWithID } from './types'

export {
  getCollection,
  addCollection,
  updateCollection,
  removeCollection,
  Collection,
  partOfCollection,
  CollectionWithID
}

export default router