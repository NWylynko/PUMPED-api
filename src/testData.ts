import { addBrand } from './api/brand';
import { addCollection } from './api/collection';
import { addSection } from './api/section';
import { addStyle } from './api/style';

const addTestData = async () => {
  await addBrand({ name: 'nike', website: 'nike.com' }); // id 1
  await addBrand({ name: 'adidas', website: 'nike.com.au' }); // id 2

  await addCollection({ name: 'air max' }); // id 1
  await addCollection({ name: 'hypes' }); // id 2

  await addSection({ name: 'mens' }); // id 1
  await addSection({ name: 'womens' }); // id 2

  await addStyle({ name: 'runners' }); // id 1
  await addStyle({ name: 'basketball' }); // id 2
};

export default addTestData;
