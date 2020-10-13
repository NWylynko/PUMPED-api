import { addBrand } from './api/brand';
import { addCollection } from './api/collection';
import { addSection } from './api/section';

const addTestData = async () => {
  await addBrand({ name: 'nike', website: 'nike.com' });
  await addBrand({ name: 'adidas', website: 'nike.com.au' });

  await addCollection({ name: 'air max' });
  await addCollection({ name: 'hypes' });

  await addSection({ name: 'mens' });
  await addSection({ name: 'womens' });
};

export default addTestData;
