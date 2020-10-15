import { Request } from 'express';
import num from './num';

const getCustomerID = (req: Request): number => {
  const CustomerID = req.header('CustomerID');

  if (!CustomerID) {
    throw new Error('no customer id supplied');
  }

  return num(CustomerID);
};

export default getCustomerID;
