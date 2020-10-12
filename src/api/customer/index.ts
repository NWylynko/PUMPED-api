import router from './router';

import addCustomer from './addCustomer';
import getCustomer from './getCustomer';
import removeCustomer from './removeCustomer';
import updateCustomer from './updateCustomer';

import { Customer } from './types';

export {
  addCustomer,
  getCustomer,
  removeCustomer,
  updateCustomer,
  Customer,
};

export default router;
