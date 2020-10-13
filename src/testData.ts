import { addBrand } from './api/brand';
import { addCollection } from './api/collection';

const addTestData = async () => {
  await addBrand({ name: 'nike', website: 'nike.com' });
  await addBrand({ name: 'adidas', website: 'nike.com.au' });

  await addCollection({ name: 'air max' });
  await addCollection({ name: 'hypes' });
};

export default addTestData;
